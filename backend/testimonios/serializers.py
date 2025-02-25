from rest_framework import serializers
from reservas.models import Reserva  # Asegúrate de importar el modelo Reserva
from .models import Testimonio

class TestimonioSerializer(serializers.ModelSerializer):
    reserva = serializers.PrimaryKeyRelatedField(queryset=Reserva.objects.all())
    nombre_cliente = serializers.CharField(source="reserva.nombre_completo", read_only=True)
    email_cliente = serializers.EmailField(source="reserva.email", read_only=True)
    fecha_reserva = serializers.DateField(source="reserva.fecha_reserva", read_only=True)
    imagen = serializers.ImageField(required=False, allow_null=True)

    class Meta:
        model = Testimonio
        fields = [
            "id", 
            "reserva", 
            "nombre_cliente", 
            "email_cliente", 
            "fecha_reserva", 
            "mensaje", 
            "aprobado",
            "imagen"
        ]

