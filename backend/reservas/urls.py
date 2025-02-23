from django.urls import path
from .views import crear_reserva,obtener_reservas 

urlpatterns = [
    path("reservas/crear/", crear_reserva, name="crear-reserva"),  # POST - Crear reserva
    path("reservas/", obtener_reservas, name="obtener-reservas"),

]

