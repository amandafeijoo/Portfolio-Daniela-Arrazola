from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.core.exceptions import ValidationError
from .models import Reserva
from .serializers import ReservaSerializer
from .utils.emails import enviar_email_confirmacion_reserva
from .utils.emails import enviar_email_cancelacion_reserva 

from django.db import IntegrityError
import threading

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

