from django.db import models
from django.utils import timezone 


class Testimonio(models.Model):
    reserva = models.OneToOneField(
        "reservas.Reserva",
        on_delete=models.CASCADE,
        related_name="testimonio"
    )
    mensaje = models.TextField()
    imagen = models.ImageField(
        upload_to='testimonios/',
        blank=True,
        null=True
    )
    aprobado = models.BooleanField(default=False)
    consentimiento = models.BooleanField(
        default=False,
        help_text="Indica si el usuario ha dado su consentimiento para publicar el testimonio."
    )
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"Testimonio de {self.reserva.nombre_completo} - {self.reserva.fecha_reserva}"

    def get_nombre_cliente(self):
        return self.reserva.nombre_completo if self.reserva else "Sin nombre"
    
    def get_email_cliente(self):
        return self.reserva.email if self.reserva else "Sin email"
    
    def get_fecha_reserva(self):
        return self.reserva.fecha_reserva if self.reserva else "Sin fecha"
