#!/bin/bash

set -e  # Exit on any error


COMPOSE_FILE=docker-compose.dev.yml
ENV_FILE=.env.dev
PROJECT_NAME=dev-full-stack-web-application

# 🧠 Check if Docker is running
if ! docker info > /dev/null 2>&1; then
  echo "🚨 Docker is not running. Attempting to start Docker..."

  # macOS specific: try to launch Docker Desktop
  open --background -a Docker

  # Wait until Docker daemon is ready
  while ! docker info > /dev/null 2>&1; do
    echo "⏳ Waiting for Docker to start..."
    sleep 2
  done

  echo "✅ Docker is now running."
fi

# Define a cleanup function to run on Ctrl+C
cleanup() {
  echo -e "\n🧹 Cleaning up Docker containers..."
  docker-compose -p "$PROJECT_NAME" -f "$COMPOSE_FILE" --env-file "$ENV_FILE" down -v
  exit 0
}

# Trap Ctrl+C (SIGINT) and call cleanup
trap cleanup SIGINT

docker-compose -p "$PROJECT_NAME" -f "$COMPOSE_FILE" --env-file "$ENV_FILE" build --no-cache

docker-compose -p "$PROJECT_NAME" -f "$COMPOSE_FILE" --env-file "$ENV_FILE" up


# 🚀 Compose Bake-enabled up --build
# COMPOSE_BAKE=true docker-compose \
#   -p "$PROJECT_NAME" \
#   -f "$COMPOSE_FILE" \
#   --env-file "$ENV_FILE" \
#   up --build