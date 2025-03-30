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

    list_filter = ("fecha_reserva", "tipo_terapia")  
    search_fields = ("nombre_completo", "email") 
    ordering = ("-fecha_reserva", "-hora_reserva") 

