from django.db import models
from django.core.exceptions import ValidationError


class OpcionesConsulta(models.TextChoices):
    ANSIEDAD_DEPRESION = "Ansiedad y Depresión"
    REGULACION_EMOCIONAL = "Regulación emocional"
    AUTOESTIMA = "Autoestima y Conocimiento Personal"
    DUELO_CAMBIOS = "Duelo y Cambios"
    CONFLICTOS_INTERPERSONALES = "Conflictos interpersonales"
    HABILIDADES_SOCIALES = "Habilidades sociales"
    CRIANZA = "Crianza"
    PRODUCTIVIDAD = "Productividad y gestión del tiempo"
    CRECIMIENTO_PERSONAL = "Crecimiento personal y hábitos saludables"
    FOBIAS = "Fobias"
    TOC = "Trastorno Obsesivo Compulsivo"
    NEURODESARROLLO = "Trastornos del Neurodesarrollo"
    ALIMENTACION = "Trastornos de la conducta alimentaria"


class TiposTerapia(models.TextChoices):
    INDIVIDUAL = "Terapia Individual - 80€"
    PAREJA = "Terapia de Pareja - 105€"
    PACK_SESIONES = "Pack 4 Sesiones - 300€"


class Reserva(models.Model):
    nombre_completo = models.CharField(max_length=200)
    email = models.EmailField()
    fecha_reserva = models.DateField()
    hora_reserva = models.TimeField()
    motivo_consulta = models.CharField(max_length=50, choices=OpcionesConsulta.choices)
    tipo_terapia = models.CharField(max_length=50, choices=TiposTerapia.choices)
    comentarios = models.TextField(blank=True, null=True)
    privacidad_aceptada = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    email_enviado = models.BooleanField(default=False)  # ✅ campo para controlar si el email ha sido enviado

    class Meta:
        unique_together = ("fecha_reserva", "hora_reserva")  # 🔹 Evita reservas con misma fecha y hora en la BD
        ordering = ["fecha_reserva", "hora_reserva"]  # 🔹 Ordena las reservas por fecha y hora

    def clean(self):
        """
        Valida antes de guardar que no haya otra reserva en la misma fecha y hora.
        """
        if Reserva.objects.filter(
            fecha_reserva=self.fecha_reserva, hora_reserva=self.hora_reserva
        ).exists():
            raise ValidationError(
                "Ya existe una reserva en esta fecha y hora. Por favor, elige otro horario."
            )

    def save(self, *args, **kwargs):
        """
        Llama a clean() antes de guardar para evitar duplicados en la misma fecha/hora.
        """
        self.clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.nombre_completo} - {self.fecha_reserva} a las {self.hora_reserva} ({self.motivo_consulta})"
