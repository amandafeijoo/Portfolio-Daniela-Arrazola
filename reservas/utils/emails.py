from django.core.mail import send_mail
from django.conf import settings


def enviar_email_testimonio(email_cliente, nombre_cliente, reserva_id):
    enlace_testimonio = f"{settings.FRONTEND_URL}/testimonios?reserva_id={reserva_id}"

    mensaje = f"""
    Hola {nombre_cliente},

    Espero que te encuentres bien. Quiero agradecerte por confiar en mi servicio de terapia psicológica. 
    Mi compromiso es ofrecer un espacio seguro y profesional para tu bienestar emocional.

    Tu opinión es muy importante para mí. Si deseas compartir tu experiencia, te invito a dejar un testimonio en el siguiente enlace:
    
    👉 {enlace_testimonio}

    Esto me ayudará a seguir mejorando y permitirá que otras personas conozcan más sobre mi trabajo.

    Muchas gracias por tu tiempo y confianza.

    Un cordial saludo,
    
    Daniela Arrázola 
    Psicóloga Sanitaria  
    """

    send_mail(
        "Comparte tu experiencia - Daniela Arrazola Psicóloga Sanitaria",
        mensaje,
        settings.EMAIL_HOST_USER,
        [email_cliente],
        fail_silently=False,
    )


def enviar_email_confirmacion_reserva(reserva):
    """Envía email al cliente confirmando su consulta psicológica + copia a la psicóloga"""
    asunto = "Confirmación de su consulta psicológica en línea"

    comentarios = f"\n📝 Comentarios: {reserva.comentarios}\n" if reserva.comentarios else ""

    mensaje_cliente = (
        f"Estimado/a {reserva.nombre_completo},\n\n"
        f"Le confirmamos que su consulta psicológica en línea ha sido agendada correctamente.\n\n"
        f"🗓 Fecha: {reserva.fecha_reserva}\n"
        f"🕒 Hora: {reserva.hora_reserva} (Hora local)\n"
        f"📌 Motivo de la consulta: {reserva.motivo_consulta}\n"
        f"💆‍♂️ Tipo de terapia: {reserva.tipo_terapia}\n"
        f"{comentarios}\n"
        "En breve recibirá un correo con el enlace de acceso a la reunión de terapia.\n\n"
        "Le recomiendo conectarse 5 minutos antes para verificar su conexión y asegurarse de un inicio puntual.\n\n"
        "Si necesita reprogramar o cancelar su sesión, por favor avísar con antelación.\n\n"
        "Si tiene alguna pregunta, no dude en contactarme.\n\n"
        "Atentamente,\n\n"
        "Daniela Arrázola\n"
        "Psicóloga Sanitaria\n"
        "📧 Correo: danielaarrazolabenitez@gmail.com\n"
        "📞 WhatsApp: +47 983 15 132\n"
    )

    # 📧 Enviar al cliente
    send_mail(
        asunto,
        mensaje_cliente,
        settings.EMAIL_HOST_USER,
        [reserva.email],
        fail_silently=False,
    )

    # 📥 Notificación a la psicóloga
    mensaje_psicologa = (
        f"📬 Nueva reserva desde la web:\n\n"
        f"👤 Nombre: {reserva.nombre_completo}\n"
        f"📧 Email: {reserva.email}\n"
        f"🗓 Fecha: {reserva.fecha_reserva}\n"
        f"🕒 Hora: {reserva.hora_reserva}\n"
        f"💆‍♀️ Terapia: {reserva.tipo_terapia}\n"
        f"💬 Motivo: {reserva.motivo_consulta}\n"
        f"{comentarios}"
        "Puedes ver más detalles en el panel de administración."
    )

    send_mail(
        "📬 Nueva reserva recibida",
        mensaje_psicologa,
        settings.EMAIL_HOST_USER,
        ["danielaarrazolabenitez@gmail.com"],
        fail_silently=False,
    )

def enviar_email_cancelacion_reserva(reserva):
    asunto = "Cancelación de su consulta psicológica"

    mensaje = (
        f"Estimado/a {reserva.nombre_completo},\n\n"
        "Le informamos que su consulta psicológica ha sido cancelada.\n\n"
        f"🗓 Fecha original: {reserva.fecha_reserva}\n"
        f"🕒 Hora: {reserva.hora_reserva}\n"
        f"📌 Motivo: {reserva.motivo_consulta}\n\n"
        "Si desea reprogramar una nueva cita o tiene alguna pregunta, no dude en contactarme.\n\n"
        "Lamento los inconvenientes y agradezco su comprensión.\n\n"
        "Atentamente,\n"
        "Daniela Arrázola\n"
        "Psicóloga Sanitaria\n"
        "📧 danielaarrazolabenitez@gmail.com\n"
        "📞 WhatsApp: +47 983 15 132"
    )

    send_mail(
        asunto,
        mensaje,
        settings.EMAIL_HOST_USER,
        [reserva.email],
        fail_silently=False,
    )

