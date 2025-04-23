# --- FASE 1: Build del frontend ---
    FROM node:18 as frontend-build
    WORKDIR /app
    COPY frontend/ .
    COPY frontend/.env .env
    RUN npm install --legacy-peer-deps && npm run build
    
    # --- FASE 2: Backend con Python + staticfiles ---
    FROM python:3.11-slim
    
    RUN apt-get update && apt-get install -y curl && \
        apt-get clean && rm -rf /var/lib/apt/lists/*
    
    WORKDIR /app
    COPY requirements.txt ./
    RUN pip install --upgrade pip && pip install -r requirements.txt
    COPY . .
    
    # Copiar solo los archivos de build generados
    COPY --from=frontend-build /app/frontend_build ./frontend_build
    
    RUN mkdir -p staticfiles && \
        cp -r frontend_build/assets staticfiles/ && \
        cp -r frontend_build/images staticfiles/ && \
        cp frontend_build/index.html staticfiles/
    
    EXPOSE 8080
    CMD gunicorn danielabackend.wsgi:application --bind 0.0.0.0:8080
    