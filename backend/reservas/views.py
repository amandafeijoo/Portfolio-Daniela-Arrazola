from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.core.exceptions import ValidationError
from .models import Reserva
from .serializers import ReservaSerializer

@api_view(["POST"])
def crear_reserva(request):
    serializer = ReservaSerializer(data=request.data)
    
    if serializer.is_valid():
        try:
            reserva = serializer.save()
            return Response(
                {"message": "Reserva creada con éxito", "reserva": ReservaSerializer(reserva).data},
                status=status.HTTP_201_CREATED,
            )
        except ValidationError as e:
            return Response(
                {"errors": str(e)}, 
                status=status.HTTP_400_BAD_REQUEST
            )

    return Response({"errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)



@api_view(["GET"])
def obtener_reservas(request):
    reservas = Reserva.objects.all().order_by("fecha_reserva", "hora_reserva")  # Ordenadas por fecha y hora
    serializer = ReservaSerializer(reservas, many=True)
    return Response(serializer.data)
