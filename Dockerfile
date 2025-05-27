FROM python:3.11-slim

# Instala Node.js y dependencias necesarias para frontend
RUN apt-get update && apt-get install -y curl gnupg && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Establece directorio de trabajo para el backend
WORKDIR /app

# Instala dependencias de Python
COPY requirements.txt ./
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copia todo el código del proyecto
COPY . .

# Cambia al frontend
WORKDIR /app/frontend

# Instala dependencias de Node/Vite
RUN npm install --legacy-peer-deps

# ⬇️ Build del frontend + corrección de rutas (¡este es el cambio importante!)
RUN VITE_API_URL=https://web-production-70fa.up.railway.app npm run build && node fix-static-paths.js

# Regresa al backend y copia archivos del build al directorio que Django sirve
WORKDIR /app
RUN mkdir -p staticfiles && \
    cp -r frontend_build/assets staticfiles/ && \
    cp -r frontend_build/images staticfiles/ && \
    cp frontend_build/index.html staticfiles/

# Expone el puerto para Gunicorn
EXPOSE 8080

# Ejecuta la app con Gunicorn
CMD gunicorn danielabackend.wsgi:application --bind 0.0.0.0:8080
