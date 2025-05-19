from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.core.exceptions import ValidationError
from .models import Reserva
from django.utils import timezone
from datetime import datetime
from .serializers import ReservaSerializer
from .utils.emails import enviar_email_confirmacion_reserva
from .utils.emails import enviar_email_cancelacion_reserva 
from django.http import HttpResponse
import stripe
from django.db import IntegrityError
import threading
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
import json



# 👇 Función auxiliar para ejecutar en segundo plano
def enviar_email_async(reserva):
    threading.Thread(target=enviar_email_confirmacion_reserva, args=(reserva,)).start()

@api_view(["POST"])
def crear_reserva(request):
    serializer = ReservaSerializer(data=request.data)
    
    if serializer.is_valid():
        try:
            reserva = serializer.save()

            # ✅ Enviar email sin bloquear la respuesta
            enviar_email_async(reserva)

            return Response(
                {"message": "Reserva creada con éxito", "reserva": ReservaSerializer(reserva).data},
                status=status.HTTP_201_CREATED,
            )
        except ValidationError as e:
            return Response(
                {"errors": str(e)}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        except IntegrityError:
            return Response(
                {"errors": "Ya existe una reserva para esta fecha y hora. Por favor, elija otro horario."},
                status=status.HTTP_400_BAD_REQUEST
            )

    return Response({"errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET"])
def obtener_reservas(request):
    reservas = Reserva.objects.all().order_by("fecha_reserva", "hora_reserva")  # Ordenadas por fecha y hora
    serializer = ReservaSerializer(reservas, many=True)
    return Response(serializer.data)


@api_view(["PATCH"])  # 👈 Usamos PATCH en lugar de DELETE para marcar como cancelada
def cancelar_reserva(request, reserva_id):
    try:
        reserva = Reserva.objects.get(id=reserva_id)

        if reserva.cancelada:
            return Response(
                {"error": "La reserva ya está cancelada."},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        reserva.cancelada = True  # ✅ Marcar como cancelada
        reserva.save()

        # ✅ Enviar email de cancelación
        enviar_email_cancelacion_reserva(reserva)

        return Response(
            {
                "message": "Reserva cancelada correctamente.",
                "reserva": ReservaSerializer(reserva).data
            },
            status=status.HTTP_200_OK
        )
    except Reserva.DoesNotExist:
        return Response(
            {"error": "No se encontró la reserva."},
            status=status.HTTP_404_NOT_FOUND
        )
    
    
@api_view(["POST"])
@permission_classes([AllowAny])
def verificar_disponibilidad(request):
    fecha_str = request.data.get("fecha_reserva")
    hora_str = request.data.get("hora_reserva")
    if not fecha_str or not hora_str:
        return Response({"error": "Fecha y hora requeridas"}, status=400)

    # 1️⃣ Parseo
    try:
        fecha = datetime.strptime(fecha_str, "%Y-%m-%d").date()
        hora = datetime.strptime(hora_str, "%H:%M").time()
    except ValueError:
        return Response({"error": "Formato de fecha u hora inválido"}, status=400)

    # 2️⃣ Combinamos y hacemos tz-aware
    dt_sel = datetime.combine(fecha, hora)
    dt_sel = timezone.make_aware(dt_sel, timezone.get_default_timezone())

    # 3️⃣ Validamos que no sea pasado
    if dt_sel <= timezone.now():
        return Response({
            "disponible": False,
            "error": "La hora seleccionada ya ha pasado. Por favor, elige un horario futuro."
        }, status=200)

    # 4️⃣ Comprobamos solapamiento
    ya_reservado = Reserva.objects.filter(
        fecha_reserva=fecha,
        hora_reserva=hora,
        cancelada=False
    ).exists()

    return Response({"disponible": not ya_reservado}, status=200)



# pagos con Stripe 
stripe.api_key = settings.STRIPE_SECRET_KEY


@csrf_exempt
@api_view(["POST", "OPTIONS"])
@permission_classes([AllowAny])
def crear_sesion_pago(request):
    try:
        data = request.data
        print("📩 Datos recibidos del frontend:", data)

        tipo_terapia = data.get("tipo_terapia")

        precios = {
            "Terapia Individual - 80€": 8000,
            "Terapia de Pareja - 105€": 10500,
            "Pack 4 Sesiones - 300€": 30000,
        }

        amount = precios.get(tipo_terapia)

        if amount is None:
            return Response({"error": "Tipo de terapia inválido"}, status=400)

        session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[{
                'price_data': {
                    'currency': 'eur',
                    'product_data': {
                        'name': tipo_terapia,
                    },
                    'unit_amount': amount,
                },
                'quantity': 1,
            }],
            mode='payment',
            success_url = f"{settings.FRONTEND_URL}/reserva-exitosa",
            cancel_url = f"{settings.FRONTEND_URL}/reserva-cancelada",
            payment_intent_data={  # 👈 Aquí va el metadata correcto
                "metadata": {
                    "nombre_completo": data.get("nombre_completo"),
                    "email": data.get("email"),
                    "tipo_terapia": tipo_terapia,
                    "fecha_reserva": data.get("fecha_reserva"),
                    "hora_reserva": data.get("hora_reserva"),
                    "motivo_consulta": data.get("motivo_consulta"),
                    "comentarios": data.get("comentarios"),
                }
            }
        )

        print("💳 URL de Stripe:", session.url)
        return Response({'url': session.url})

    except Exception as e:
        print("❌ Error al crear sesión de Stripe:", str(e))
        return Response({'error': str(e)}, status=500)


 

stripe.api_key = settings.STRIPE_SECRET_KEY

@csrf_exempt
@api_view(["POST"])
def stripe_webhook(request):
    print("📩 Webhook recibido en Django")
    print("🔐 Usando clave secreta:", stripe.api_key)  # 👈 DEBUG de clave

    payload = request.body
    sig_header = request.META.get("HTTP_STRIPE_SIGNATURE")
    webhook_secret = settings.STRIPE_WEBHOOK_SECRET

    try:
        event = stripe.Webhook.construct_event(payload, sig_header, webhook_secret)
        print("💥 Evento recibido completo:", json.dumps(event, indent=2))
    except ValueError as e:
        print("⚠️ Error en payload:", str(e))
        return HttpResponse(status=400)
    except stripe.error.SignatureVerificationError as e:
        print("❌ Error de firma:", str(e))
        return HttpResponse(status=400)
    except Exception as e:
        print("❌ Error inesperado en el webhook:", str(e))
        return HttpResponse(status=500)

    print("✅ Evento recibido:", event["type"])

    if event["type"] == "checkout.session.completed":
        try:
            session = event["data"]["object"]
            print("🔬 Session completa:", json.dumps(session, indent=2))

            payment_intent_id = session.get("payment_intent")
            print("🔍 ID del PaymentIntent recibido:", payment_intent_id)

            intent = stripe.PaymentIntent.retrieve(payment_intent_id)
            metadata = intent.metadata
            print("🔍 Metadata desde PaymentIntent:", metadata)

            nombre = metadata.get("nombre_completo", "")
            email = metadata.get("email", "")
            tipo_terapia = metadata.get("tipo_terapia", "")
            fecha_reserva = metadata.get("fecha_reserva", "")
            hora_reserva = metadata.get("hora_reserva", "")
            motivo_consulta = metadata.get("motivo_consulta", "")
            comentarios = metadata.get("comentarios", "")

            if nombre and email and tipo_terapia and fecha_reserva and hora_reserva:
                reserva = Reserva.objects.create(
                    nombre_completo=nombre,
                    email=email,
                    tipo_terapia=tipo_terapia,
                    fecha_reserva=fecha_reserva,
                    hora_reserva=hora_reserva,
                    motivo_consulta=motivo_consulta,
                    comentarios=comentarios,
                    cancelada=False,
                )
                print("✅ Reserva creada correctamente:", reserva)
                enviar_email_confirmacion_reserva(reserva)
            else:
                print("⚠️ Faltan datos en metadata. No se creó la reserva.")

        except Exception as e:
            print("❌ Error interno al procesar el evento:", str(e))
            return HttpResponse(status=500)

    return HttpResponse(status=200)