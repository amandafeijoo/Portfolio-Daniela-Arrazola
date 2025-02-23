from django.core.mail import send_mail
from django.conf import settings

def enviar_email_testimonio(email_cliente, nombre_cliente, reserva_id):
    enlace_testimonio = f"http://localhost:5173/testimonios?reserva_id={reserva_id}"  # 🔗 Link actualizado para Vite
    
    mensaje = f"""
    Hola {nombre_cliente},

    Espero que te encuentres bien. Quiero agradecerte por confiar en mi servicio de terapia psicológica. 
    Mi compromiso es ofrecer un espacio seguro y profesional para tu bienestar emocional.

    Tu opinión es muy importante para mí. Si deseas compartir tu experiencia, te invito a dejar un testimonio en el siguiente enlace:
    
    👉 {enlace_testimonio}

    Esto me ayudará a seguir mejorando y permitirá que otras personas conozcan más sobre mi trabajo.

    Muchas gracias por tu tiempo y confianza.

    Un cordial saludo,
    
    **Daniela Arrazola**  
    Psicóloga Sanitaria  
    (Pruebas en localhost)
    """

    send_mail(
        "Comparte tu experiencia - Daniela Arrazola Psicóloga Sanitaria",
        mensaje,
        settings.EMAIL_HOST_USER,
        [email_cliente],  # 👈 Enviamos el email al cliente de la reserva
        fail_silently=False,
    )
