# Imagen oficial de Python como base
FROM python:3.11-slim

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar solo los archivos necesarios para instalar dependencias
COPY requirements.txt ./
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copia el resto del proyecto
COPY . .

# ⚠️ aun no esta línea:
# RUN python manage.py collectstatic --noinput

# Puerto en el que correrá Gunicorn
EXPOSE 8080

# Gunicorn como servidor de producción
CMD gunicorn danielabackend.wsgi:application --bind 0.0.0.0:8080
