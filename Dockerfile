# --- FASE 1: Build del frontend ---
    FROM node:18 as frontend-build
    WORKDIR /app
    
    # Definir la variable de entorno como argumento para usarla al hacer el build
    ARG VITE_API_URL
    ENV VITE_API_URL=$VITE_API_URL
    
    # Copiar el código del frontend
    COPY frontend/ .
    
    # Ejecutar el build con la variable inyectada
    RUN npm install --legacy-peer-deps && VITE_API_URL=$VITE_API_URL npm run build
    
    # --- FASE 2: Backend con Python + staticfiles ---
    FROM python:3.11-slim
    
    # Instalar curl y limpiar
    RUN apt-get update && apt-get install -y curl && \
        apt-get clean && rm -rf /var/lib/apt/lists/*
    
    # Crear directorio de trabajo
    WORKDIR /app
    
    # Copiar dependencias Python e instalarlas
    COPY requirements.txt ./
    RUN pip install --upgrade pip && pip install -r requirements.txt
    
    # Copiar todo el código (menos node_modules por .dockerignore)
    COPY . .
    
    # Copiar el build del frontend desde la primera etapa
    COPY --from=frontend-build /app/frontend_build ./frontend_build
    
    # Mover los archivos estáticos a la carpeta usada por Django
    RUN mkdir -p staticfiles && \
        cp -r frontend_build/assets staticfiles/ && \
        cp -r frontend_build/images staticfiles/ && \
        cp frontend_build/index.html staticfiles/
    
    # Exponer puerto y arrancar el servidor
    EXPOSE 8080
    CMD gunicorn danielabackend.wsgi:application --bind 0.0.0.0:8080
    