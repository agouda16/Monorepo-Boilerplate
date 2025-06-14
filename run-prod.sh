#!/bin/bash

# Exit immediately if any command fails
set -e

# Load env variables
# export $(grep -v '^#' .env.prod | xargs)
set -a
source <(grep -E '^[A-Za-z_][A-Za-z0-9_]*=' .env.prod)
set +a


PROJECT_NAME="production-full-stack-web-application"

echo "👉 Building and starting production containers..."

# Build with production Dockerfiles
docker compose -f docker-compose.yml \
  --env-file .env.prod \
  --project-name $PROJECT_NAME \
  build

# Start containers in detached mode
docker compose -f docker-compose.yml \
  --env-file .env.prod \
  --project-name $PROJECT_NAME \
  up -d

echo "✅ Production environment is up!"
echo "🌐 Visit: http://localhost:${CLIENT_PORT} (client)"
echo "📡 Server running on port ${SERVER_PORT}"
