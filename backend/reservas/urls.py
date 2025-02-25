from django.urls import path
from .views import crear_reserva,obtener_reservas,cancelar_reserva 

urlpatterns = [
    path("reservas/crear/", crear_reserva, name="crear-reserva"),  # POST - Crear reserva
    path("reservas/", obtener_reservas, name="obtener-reservas"),
    path("reservas/<int:reserva_id>/cancelar/", cancelar_reserva, name="cancelar-reserva"),  # DELETE - Cancelar reserva
]

