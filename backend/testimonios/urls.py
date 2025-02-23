from django.urls import path
from .views import crear_testimonio, listar_testimonios, aprobar_testimonio, eliminar_testimonio

urlpatterns = [
    path("testimonios/", listar_testimonios, name="listar-testimonios"),  # 📌 Obtener todos los testimonios
    path("testimonios/crear/", crear_testimonio, name="crear-testimonio"),  # 📌 Crear un testimonio
    path("testimonios/<int:testimonio_id>/aprobar/", aprobar_testimonio, name="aprobar-testimonio"),  # 📌 Aprobar testimonio
    path("testimonios/<int:testimonio_id>/eliminar/", eliminar_testimonio, name="eliminar-testimonio"),  # 📌 Eliminar testimonio
]
