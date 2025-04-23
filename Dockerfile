FROM python:3.11-slim

# Instala Node.js y dependencias #
RUN apt-get update && apt-get install -y curl gnupg && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt ./
RUN pip install --upgrade pip && pip install -r requirements.txt

COPY . .

WORKDIR /app/frontend
RUN npm install --legacy-peer-deps && npm run build

WORKDIR /app
RUN mkdir -p staticfiles && \
    cp -r frontend_build/assets staticfiles/ && \
    cp -r frontend_build/images staticfiles/ && \
    cp frontend_build/index.html staticfiles/

EXPOSE 8080
CMD gunicorn danielabackend.wsgi:application --bind 0.0.0.0:8080
