from django.core.management.base import BaseCommand
from django.core.mail import send_mail
from django.utils.timezone import now, timedelta
from django.conf import settings
from reservas.models import Reserva

class Command(BaseCommand):
    help = "Envía correos electrónicos a clientes un día después de su reserva para que dejen un testimonio."

    def handle(self, *args, **kwargs):
        fecha_ayer = now().date() - timedelta(days=1)
        reservas_ayer = Reserva.objects.filter(fecha_reserva=fecha_ayer)

        if not reservas_ayer.exists():
            self.stdout.write(self.style.WARNING("No hay reservas de ayer para enviar correos."))
            return

        for reserva in reservas_ayer:
            self.enviar_email_testimonio(reserva)

        self.stdout.write(self.style.SUCCESS(f"Se enviaron {reservas_ayer.count()} correos de testimonios."))

    def enviar_email_testimonio(self, reserva):
        # Construye el enlace usando la URL del frontend
        base = settings.FRONTEND_URL.rstrip("/")  # quita posible slash final
        enlace_testimonio = f"{base}/testimonios?reserva_id={reserva.id}"

        mensaje = f"""
Hola {reserva.nombre_completo},

Espero que estés bien. Ayer tuviste una consulta y me gustaría saber tu experiencia.

Si deseas compartir tu testimonio, puedes hacerlo en el siguiente enlace:

👉 {enlace_testimonio}

Tu opinión me ayuda a mejorar y a que otros conozcan mi trabajo.

¡Gracias por tu tiempo y confianza!

Un cordial saludo,

**Daniela Arrazola**  
Psicóloga Sanitaria  
"""

        send_mail(
            "Comparte tu experiencia - Daniela Arrazola Psicóloga Sanitaria",
            mensaje,
            settings.EMAIL_HOST_USER,
            [reserva.email],
            fail_silently=False,
        )

