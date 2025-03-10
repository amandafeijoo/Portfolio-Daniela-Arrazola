from rest_framework import serializers
from django.contrib.auth import authenticate

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        username = data.get("username")
        password = data.get("password")

        if not username or not password:
            raise serializers.ValidationError("Se requieren usuario y contraseña.")

        user = authenticate(username=username, password=password)
        if not user:
            raise serializers.ValidationError("Usuario o contraseña incorrectos.")

        if not user.is_active:
            raise serializers.ValidationError("Esta cuenta está desactivada.")

        # 📌 Permitir solo usuarios con permisos staff o superusuarios
        if not user.is_staff and not user.is_superuser:
            raise serializers.ValidationError("No tienes permisos de administrador.")

        data["user"] = user
        return data
