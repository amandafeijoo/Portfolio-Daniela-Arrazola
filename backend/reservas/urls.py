from django.urls import path
from .views import crear_reserva,obtener_reservas,cancelar_reserva,crear_sesion_pago,stripe_webhook, verificar_disponibilidad

urlpatterns = [
    path("reservas/crear/", crear_reserva, name="crear-reserva"),  # POST - Crear reserva
    path("reservas/", obtener_reservas, name="obtener-reservas"),
    path("reservas/<int:reserva_id>/cancelar/", cancelar_reserva, name="cancelar-reserva"),  # DELETE - Cancelar reserva
    path("pago/crear-sesion/", crear_sesion_pago, name="crear_sesion_pago"),
    path('stripe/webhook/', stripe_webhook, name='stripe-webhook'),
    path("verificar-disponibilidad/", verificar_disponibilidad, name="verificar-disponibilidad"),  # 👈 NUEVA RUTA



]

