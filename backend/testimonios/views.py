from django.shortcuts import render
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from .models import Testimonio
from reservas.models import Reserva
from .serializers import TestimonioSerializer

@api_view(["POST"])
@parser_classes([MultiPartParser, FormParser])
def crear_testimonio(request):
    reserva_id = request.data.get("reserva_id")
    try:
        reserva = Reserva.objects.get(id=reserva_id)
    except Reserva.DoesNotExist:
        return Response({"error": "Reserva no encontrada"}, status=status.HTTP_404_NOT_FOUND)

    # Verificar que el correo ingresado coincida con el de la reserva
    email_cliente = request.data.get("email_cliente")
    if email_cliente != reserva.email:
        return Response({"error": "El correo no coincide con la reserva"}, status=status.HTTP_400_BAD_REQUEST)

    # Evitar que se deje más de un testimonio por reserva
    if Testimonio.objects.filter(reserva=reserva).exists():
        return Response({"error": "Ya existe un testimonio para esta reserva"}, status=status.HTTP_400_BAD_REQUEST)

    data = request.data.copy()
    data["reserva"] = reserva_id

    serializer = TestimonioSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Testimonio enviado correctamente"}, status=status.HTTP_201_CREATED)

    print(serializer.errors)  # Para depuración
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



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
