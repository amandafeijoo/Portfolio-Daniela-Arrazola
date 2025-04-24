FROM python:3.11-slim

# Instala Node.js y dependencias
RUN apt-get update && apt-get install -y curl gnupg && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt ./
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copiar el resto del código
COPY . .

WORKDIR /app/frontend

# 1️⃣ Instala dependencias sin build
RUN npm install --legacy-peer-deps

# 2️⃣ Pasa la variable directamente para que Vite la use al hacer el build
RUN VITE_API_URL=https://web-production-70fa.up.railway.app npm run build

# Volver al backend y mover archivos estáticos
WORKDIR /app
RUN mkdir -p staticfiles && \
    cp -r frontend_build/assets staticfiles/ && \
    cp -r frontend_build/images staticfiles/ && \
    cp frontend_build/index.html staticfiles/

EXPOSE 8080
CMD gunicorn danielabackend.wsgi:application --bind 0.0.0.0:8080
