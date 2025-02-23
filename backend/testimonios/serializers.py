from rest_framework import serializers
from .models import Testimonio

class TestimonioSerializer(serializers.ModelSerializer):
    nombre_cliente = serializers.CharField(source="reserva.nombre_completo", read_only=True)
    email_cliente = serializers.EmailField(source="reserva.email", read_only=True)
    fecha_reserva = serializers.DateField(source="reserva.fecha_reserva", read_only=True)

    class Meta:
        model = Testimonio
        fields = ["id", "reserva", "nombre_cliente", "email_cliente", "fecha_reserva", "mensaje", "aprobado"]
