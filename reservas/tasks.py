from datetime import date
from reservas.models import Reserva  # 🔹 Importación absoluta
from reservas.utils.emails import enviar_email_testimonio  # 🔹 Importación absoluta

def enviar_emails_testimonios():
    hoy = date.today()
    reservas_pasadas = Reserva.objects.filter(fecha_reserva__lt=hoy, email_enviado=False)

    for reserva in reservas_pasadas:
        enviar_email_testimonio(reserva.email, reserva.nombre_completo, reserva.id)
        reserva.email_enviado = True  # Marcar como enviado
        reserva.save()
