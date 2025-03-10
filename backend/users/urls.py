from django.urls import path
from .views import LoginView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path("login/", LoginView.as_view(), name="login"),  # 📌 Endpoint para autenticación
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),  # 📌 Obtener JWT
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),  # 📌 Refrescar JWT
]
