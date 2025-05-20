from rest_framework import serializers
from reservas.models import Reserva
from .models import Testimonio

class TestimonioSerializer(serializers.ModelSerializer):
    # Hacemos que el campo imagen sea sólo de escritura
    imagen = serializers.ImageField(required=False, allow_null=True, write_only=True)
    # Y añadimos un field sólo de lectura para devolver la URL
    imagen_url = serializers.SerializerMethodField(read_only=True)

    reserva = serializers.PrimaryKeyRelatedField(queryset=Reserva.objects.all())
    nombre_cliente = serializers.CharField(source="reserva.nombre_completo", read_only=True)
    email_cliente = serializers.EmailField(source="reserva.email", read_only=True)
    fecha_reserva = serializers.DateField(source="reserva.fecha_reserva", read_only=True)
    created_at = serializers.DateTimeField(read_only=True)

    class Meta:
        model = Testimonio
        fields = [
            "id",
            "reserva",
            "nombre_cliente",
            "email_cliente",
            "fecha_reserva",
            "mensaje",
            "aprobado",
            "imagen",       # sólo write
            "imagen_url",   # sólo read
            "consentimiento",
            "created_at",
        ]

    def get_imagen_url(self, obj):
        # DRF ImageField en lectura ya da URL, pero lo hacemos explícito
        if obj.imagen:
            return obj.imagen.url
        return None

    def create(self, validated_data):
        # 1) Extraigo la imagen del dict para no pasarla a super().create()
        imagen = validated_data.pop("imagen", None)

        # 2) Creo la instancia con el resto de campos
        testimonio = super().create(validated_data)

        # 3) Si había imagen, la asigno y guardo (subida a Cloudinary si lo tienes configurado)
        if imagen:
            testimonio.imagen.save(imagen.name, imagen, save=True)

        return testimonio
