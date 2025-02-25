from django.db import models

class Testimonio(models.Model):
    reserva = models.OneToOneField(
        "reservas.Reserva",  # Referencia a Reserva sin importar el modelo directamente
        on_delete=models.CASCADE,
        related_name="testimonio"
    )
    mensaje = models.TextField()
    imagen = models.ImageField(
        upload_to='testimonios/',  # Carpeta donde se almacenarán las imágenes
        blank=True,               # Permite que el campo quede vacío en formularios
        null=True                 # Permite valores nulos en la base de datos
    )
    aprobado = models.BooleanField(default=False)  # Permite que el administrador lo apruebe antes de mostrarse

    def __str__(self):
        return f"Testimonio de {self.reserva.nombre_completo} - {self.reserva.fecha_reserva}"

    def get_nombre_cliente(self):
        return self.reserva.nombre_completo if self.reserva else "Sin nombre"
    
    def get_email_cliente(self):
        return self.reserva.email if self.reserva else "Sin email"
    
    def get_fecha_reserva(self):
        return self.reserva.fecha_reserva if self.reserva else "Sin fecha"
