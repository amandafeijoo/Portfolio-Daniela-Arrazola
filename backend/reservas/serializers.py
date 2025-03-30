from rest_framework import serializers
from .models import Reserva
from datetime import datetime, date, time

class ReservaSerializer(serializers.ModelSerializer):
    fecha_reserva_formateada = serializers.SerializerMethodField()
    hora_reserva_formateada = serializers.SerializerMethodField()

    hora_reserva = serializers.CharField(
        required=True,
        allow_blank=False,
        error_messages={
            'blank': 'La hora de la reserva es obligatoria.',
            'required': 'La hora de la reserva es obligatoria.',
        }
    )

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
            'cancelada',
            'fecha_reserva_formateada',
            'hora_reserva_formateada',
        ]

    def get_fecha_reserva_formateada(self, obj):
        return obj.fecha_reserva.strftime("%d-%b-%Y")

    def get_hora_reserva_formateada(self, obj):
        return obj.hora_reserva.strftime("%H:%M")

    def validate(self, data):
        selected_date = data.get("fecha_reserva")
        selected_time = data.get("hora_reserva")

        # ✅ Forzar fecha_reserva si llega como string
        if isinstance(selected_date, str):
            try:
                selected_date = datetime.strptime(selected_date, "%Y-%m-%d").date()
                data["fecha_reserva"] = selected_date
            except ValueError:
                raise serializers.ValidationError({"error": "La fecha seleccionada no es válida."})

        # ✅ Forzar hora_reserva si llega como string
        if isinstance(selected_time, str):
            try:
                selected_time = datetime.strptime(selected_time, "%H:%M").time()
                data["hora_reserva"] = selected_time
            except ValueError:
                raise serializers.ValidationError({"error": "El formato de la hora es incorrecto. Usa el formato HH:MM."})

        today = date.today()

        # 🧪 Debug temporal 
        print("📅 Fecha seleccionada:", selected_date)
        print("🕒 Hora seleccionada:", selected_time)
        print("📅 Hoy:", today)
        print("🕒 Hora actual:", datetime.now().time())

        # 🔥 Validar fecha en el pasado
        if selected_date < today:
            raise serializers.ValidationError(
                {"error": "No es posible reservar en una fecha pasada. Por favor, elige una fecha válida."}
            )

        # 🔥 Validar hora en el pasado si es hoy
        if selected_date == today:
            current_time = datetime.now().time()
            if selected_time <= current_time:
                raise serializers.ValidationError(
                    {"error": "La hora seleccionada ya ha pasado. Por favor, elige una hora válida."}
                )

        # 🔥 Validar que no haya otra reserva activa en ese día y hora
        if Reserva.objects.filter(
            fecha_reserva=selected_date,
            hora_reserva=selected_time,
            cancelada=False
        ).exists():
            raise serializers.ValidationError(
                {"error": "Ya existe una reserva en esta fecha y hora. Por favor, elige otro horario."}
            )

        return data

