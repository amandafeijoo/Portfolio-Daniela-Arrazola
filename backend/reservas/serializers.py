from rest_framework import serializers
from .models import Reserva

class ReservaSerializer(serializers.ModelSerializer):
    fecha_reserva_formateada = serializers.SerializerMethodField()
    hora_reserva_formateada = serializers.SerializerMethodField()

    class Meta:
        model = Reserva
        fields = [
            'id', 
            'nombre_completo', 
            'email', 
            'fecha_reserva', 
            'hora_reserva', 
            'motivo_consulta', 
            'tipo_terapia', 
            'comentarios',
            'cancelada',  # Incluye el campo cancelada
            'fecha_reserva_formateada',  
            'hora_reserva_formateada',  
        ]

    def get_fecha_reserva_formateada(self, obj):
        return obj.fecha_reserva.strftime("%d-%b-%Y")

    def get_hora_reserva_formateada(self, obj):
        return obj.hora_reserva.strftime("%H:%M")

    def validate(self, data):
        if Reserva.objects.filter(
            fecha_reserva=data["fecha_reserva"], hora_reserva=data["hora_reserva"]
        ).exists():
            raise serializers.ValidationError(
                {"error": "Ya existe una reserva en esta fecha y hora. Por favor, elige otro horario."}
            )
        return data


