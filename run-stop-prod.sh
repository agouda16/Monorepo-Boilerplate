#!/bin/bash

# Exit immediately if any command fails
set -e

PROJECT_NAME="production-full-stack-web-application"

echo "🛑 Stopping production containers..."

docker compose -f docker-compose.yml \
  --env-file .env.prod \
  --project-name $PROJECT_NAME \
  down

echo "✅ Production environment stopped."
