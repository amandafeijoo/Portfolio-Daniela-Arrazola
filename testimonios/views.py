from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from django.utils.timezone import now
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, parser_classes,permission_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from .models import Testimonio
from reservas.models import Reserva
from .serializers import TestimonioSerializer
from rest_framework.permissions import IsAdminUser


@api_view(["POST"])
@parser_classes([MultiPartParser, FormParser])
def crear_testimonio(request):
    # 1) Obtengo la reserva o devuelvo 404
    reserva = get_object_or_404(Reserva, id=request.data.get("reserva_id"))

    # 2) Verifico email
    if request.data.get("email_cliente") != reserva.email:
        return Response(
            {"error": "El correo no coincide con la reserva"},
            status=status.HTTP_400_BAD_REQUEST
        )

    # 3) Evito duplicados
    if Testimonio.objects.filter(reserva=reserva).exists():
        return Response(
            {"error": "Ya existe un testimonio para esta reserva"},
            status=status.HTTP_400_BAD_REQUEST
        )

    # 4) Preparo el payload SIN imagen
    payload = {
        "reserva": reserva.id,
        "mensaje": request.data.get("mensaje"),
        "consentimiento": request.data.get("consentimiento"),
    }

    # 5) Valido y creo instancia sin imagen
    serializer = TestimonioSerializer(data=payload)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    testimonio = serializer.save()

    # 6) Si hay archivo en request.FILES, lo guardo ya en el modelo
    imagen = request.FILES.get("imagen")
    if imagen:
        testimonio.imagen.save(imagen.name, imagen, save=True)

    return Response(
        {"message": "Testimonio enviado correctamente"},
        status=status.HTTP_201_CREATED
    )

# ///////////enviar testimonio desde admin front //////////////

@api_view(["POST"])
@permission_classes([IsAdminUser])
def enviar_correo_testimonio(request):
    reserva_id = request.data.get("reserva_id")
    try:
        reserva = Reserva.objects.get(id=reserva_id)
    except Reserva.DoesNotExist:
        return Response({"error": "Reserva no encontrada"}, status=status.HTTP_404_NOT_FOUND)

    # Usa aquí tu variable de entorno
    base = settings.FRONTEND_URL.rstrip("/")
    enlace_testimonio = f"{base}/testimonios?reserva_id={reserva.id}"

    mensaje = f"""
Hola {reserva.nombre_completo},

Espero que estés bien. Ayer tuviste una consulta y me gustaría saber tu experiencia.

Si deseas compartir tu testimonio, puedes hacerlo en el siguiente enlace:

👉 {enlace_testimonio}

Tu opinión me ayuda a mejorar y a que otros conozcan mi trabajo.

¡Gracias por tu tiempo y confianza!

Un cordial saludo,

Daniela Arrazola  
Psicóloga Sanitaria
"""

    send_mail(
        "Comparte tu experiencia - Daniela Arrazola Psicóloga Sanitaria",
        mensaje,
        settings.EMAIL_HOST_USER,
        [reserva.email],
        fail_silently=False,
    )
    return Response({"message": "Correo enviado correctamente"}, status=status.HTTP_200_OK)

@api_view(["GET"])
def listar_testimonios(request):
    """ Devuelve testimonios aprobados, pendientes y rechazados en grupos separados. """
    testimonios_aprobados = Testimonio.objects.filter(aprobado=True)
    testimonios_pendientes = Testimonio.objects.filter(aprobado=False)

    return Response({
        "aprobados": TestimonioSerializer(testimonios_aprobados, many=True).data,
        "pendientes": TestimonioSerializer(testimonios_pendientes, many=True).data,
    })

@api_view(["PATCH"])
def aprobar_testimonio(request, testimonio_id):
    try:
        testimonio = Testimonio.objects.get(id=testimonio_id)
        testimonio.aprobado = True  # Aprobar el testimonio
        testimonio.save()
        return Response({"message": "Testimonio aprobado"}, status=status.HTTP_200_OK)
    except Testimonio.DoesNotExist:
        return Response({"error": "Testimonio no encontrado"}, status=status.HTTP_404_NOT_FOUND)

@api_view(["DELETE"])
def eliminar_testimonio(request, testimonio_id):
    try:
        testimonio = Testimonio.objects.get(id=testimonio_id)
        testimonio.delete()
        return Response({"message": "Testimonio eliminado"}, status=status.HTTP_200_OK)
    except Testimonio.DoesNotExist:
        return Response({"error": "Testimonio no encontrado"}, status=status.HTTP_404_NOT_FOUND)
