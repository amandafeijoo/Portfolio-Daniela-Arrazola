FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt ./
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copiar todo el código
COPY . .

# 🔧 Construir el frontend
WORKDIR /app/frontend
RUN npm install && npm run build
WORKDIR /app

# 📦 Copiar frontend build a staticfiles
RUN mkdir -p staticfiles && \
    cp -r frontend_build/assets staticfiles/ && \
    cp -r frontend_build/images staticfiles/ && \
    cp frontend_build/index.html staticfiles/

EXPOSE 8080

CMD gunicorn danielabackend.wsgi:application --bind 0.0.0.0:8080
