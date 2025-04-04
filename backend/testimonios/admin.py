from django.contrib import admin
from .models import Testimonio

class TestimonioAdmin(admin.ModelAdmin):
    list_display = ("get_nombre_cliente", "get_email_cliente", "get_fecha_reserva", "consentimiento", "aprobado")
    list_filter = ("aprobado", "consentimiento") 
    search_fields = ("reserva__nombre_completo", "reserva__email") 

    def get_nombre_cliente(self, obj):
        return obj.reserva.nombre_completo if obj.reserva else "Sin nombre"
    get_nombre_cliente.short_description = "Nombre Cliente"

    def get_email_cliente(self, obj):
        return obj.reserva.email if obj.reserva else "Sin email"
    get_email_cliente.short_description = "Email Cliente"

    def get_fecha_reserva(self, obj):
        return obj.reserva.fecha_reserva if obj.reserva else "Sin fecha"
    get_fecha_reserva.short_description = "Fecha Reserva"

    actions = ["aprobar_testimonios"]  # ✅ Acción de aprobación rápida

    def aprobar_testimonios(self, request, queryset):
        queryset.update(aprobado=True)  # ✅ Aprobar varios testimonios al mismo tiempo
        self.message_user(request, "Testimonios aprobados exitosamente")
    aprobar_testimonios.short_description = "Aprobar testimonios seleccionados"

admin.site.register(Testimonio, TestimonioAdmin)  # ✅ Registrar el modelo en el panel de administración
