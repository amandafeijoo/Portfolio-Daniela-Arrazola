FROM python:3.11-slim

# 1) Instala Node.js y dependencias necesarias para frontend
RUN apt-get update && apt-get install -y curl gnupg \
 && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
 && apt-get install -y nodejs \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

# 2) Directorio de trabajo para el backend
WORKDIR /app

# 3) Instala dependencias de Python
COPY requirements.txt ./
RUN pip install --upgrade pip && pip install -r requirements.txt

# 4) Copia todo el código
COPY . .

# 5) Build del frontend
WORKDIR /app/frontend
RUN npm install --legacy-peer-deps \
 && VITE_API_URL=https://web-production-70fa.up.railway.app npm run build \
 && node fix-static-paths.js

# 6) Copia el resultado del build (y los favicons) a staticfiles/
WORKDIR /app        # vuelve al root de la app
RUN mkdir -p staticfiles && \
    cp -r frontend/frontend_build/assets                staticfiles/ && \
    cp -r frontend/frontend_build/images                staticfiles/ && \
    cp    frontend/frontend_build/index.html            staticfiles/ && \
    cp    frontend/frontend_build/favicon.ico           staticfiles/ && \
    cp    frontend/frontend_build/favicon-16x16.png     staticfiles/ && \
    cp    frontend/frontend_build/favicon-32x32.png     staticfiles/ && \
    cp    frontend/frontend_build/apple-touch-icon.png  staticfiles/ && \
    cp    frontend/frontend_build/site.webmanifest      staticfiles/

# 7) Expone y arranca Gunicorn
EXPOSE 8080
CMD gunicorn danielabackend.wsgi:application --bind 0.0.0.0:8080

