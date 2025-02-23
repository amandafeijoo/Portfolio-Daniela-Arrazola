from django.contrib import admin
from .models import Reserva

@admin.register(Reserva)
class ReservaAdmin(admin.ModelAdmin):
    list_display = (
        "nombre_completo",
        "email",
        "fecha_reserva",
        "hora_reserva",
        "motivo_consulta",
        "tipo_terapia",
        "created_at",
    )  # 📌 Campos que se mostrarán en la lista de reservas

    list_filter = ("fecha_reserva", "tipo_terapia")  # 📌 Filtros en el panel lateral derecho
    search_fields = ("nombre_completo", "email")  # 📌 Permite buscar por nombre y email
    ordering = ("-fecha_reserva", "-hora_reserva")  # 📌 Ordena por fecha y hora más recientes

