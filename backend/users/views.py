from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from .serializers import LoginSerializer

class LoginView(APIView):
    """Vista para autenticar usuarios y devolver un token JWT."""
    
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data["user"]
            refresh = RefreshToken.for_user(user)
            return Response({
                "access": str(refresh.access_token),
                "refresh": str(refresh),
            })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
