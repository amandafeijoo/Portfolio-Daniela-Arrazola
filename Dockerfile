# Imagen base de Python
FROM python:3.11-slim

# Actualizar y preparar para instalar dependencias
RUN apt-get update && apt-get install -y curl gnupg && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Crear directorio de trabajo
WORKDIR /app

# Instalar dependencias de Python
COPY requirements.txt ./
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copiar todo el proyecto
COPY . .

# 🛠️ Construir el frontend
WORKDIR /app/frontend
RUN npm install && npm run build

# Volver al backend
WORKDIR /app

# Copiar frontend build al staticfiles
RUN mkdir -p staticfiles && \
    cp -r frontend_build/assets staticfiles/ && \
    cp -r frontend_build/images staticfiles/ && \
    cp frontend_build/index.html staticfiles/

# Exponer puerto
EXPOSE 8080

# Iniciar con Gunicorn
CMD gunicorn danielabackend.wsgi:application --bind 0.0.0.0:8080
