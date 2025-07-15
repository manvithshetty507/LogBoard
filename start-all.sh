#!/bin/bash

echo "🔄 Starting Docker containers..."
docker compose start

echo "⏳ Waiting for services to be ready..."
sleep 10  # Increase if needed for Kafka/ES readiness

echo "🚀 Starting Kafka Producer..."
(cd backend/producer && npm install && node index.js) &

echo "🚀 Starting Kafka Consumer..."
(cd backend/consumer && npm install && node index.js) &

echo "🌐 Starting Frontend..."
(cd frontend && npm install && npm start) &

echo "✅ All services launched!"
