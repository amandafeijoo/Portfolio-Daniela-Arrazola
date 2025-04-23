# Imagen base de Python
FROM python:3.11-slim

# Actualizar e instalar Node.js y otras dependencias necesarias
RUN apt-get update && apt-get install -y curl gnupg && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Establecer directorio de trabajo
WORKDIR /app

# Instalar dependencias de Python
COPY requirements.txt ./
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copiar todo el proyecto
COPY . .

# 👉 Copiar manualmente el archivo de entorno del frontend al lugar correcto
COPY frontend/.env /app/frontend/.env

# 🛠️ Construir el frontend (React + Vite)
WORKDIR /app/frontend

# 👉 Verificamos que el .env esté bien copiado
RUN echo "📦 .env para Vite:" && cat .env

RUN npm install --legacy-peer-deps && npm run build

# Volver al backend
WORKDIR /app

# Copiar el build generado al directorio de archivos estáticos de Django
RUN mkdir -p staticfiles && \
    cp -r frontend_build/assets staticfiles/ && \
    cp -r frontend_build/images staticfiles/ && \
    cp frontend_build/index.html staticfiles/

# Exponer el puerto para Gunicorn
EXPOSE 8080

# Comando para arrancar el servidor
CMD gunicorn danielabackend.wsgi:application --bind 0.0.0.0:8080
