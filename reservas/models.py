from django.db import models
from django.core.exceptions import ValidationError

class Reserva(models.Model):
    nombre_completo = models.CharField(max_length=200)
    email = models.EmailField()
    fecha_reserva = models.DateField()
    hora_reserva = models.TimeField()
    motivo_consulta = models.CharField(max_length=50)
    tipo_terapia = models.CharField(max_length=50)
    comentarios = models.TextField(blank=True, null=True)
    privacidad_aceptada = models.BooleanField(default=False)
    cancelada = models.BooleanField(default=False)  
    created_at = models.DateTimeField(auto_now_add=True)
    email_enviado = models.BooleanField(default=False)  # ✅ Control para el envío de email

    class Meta:
        ordering = ["fecha_reserva", "hora_reserva"]  

    def clean(self):
        """
        Valida antes de guardar que no haya otra reserva en la misma fecha y hora,
        excepto si la reserva ya está cancelada.
        """
        if not self.cancelada and Reserva.objects.filter(
            fecha_reserva=self.fecha_reserva,
            hora_reserva=self.hora_reserva,
            cancelada=False  # ✅ Solo verificar reservas activas
        ).exists():
            raise ValidationError("Ya existe una reserva en esta fecha y hora. Por favor, elige otro horario.")

    def save(self, *args, **kwargs):
        """
        Llama a clean() antes de guardar, pero omite la validación si se está cancelando.
        """
        if not self.cancelada:
            self.clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.nombre_completo} - {self.fecha_reserva} a las {self.hora_reserva} ({self.motivo_consulta})"
