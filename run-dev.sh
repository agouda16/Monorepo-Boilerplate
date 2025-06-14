#!/bin/bash

set -e  # Exit on any error


COMPOSE_FILE=docker-compose.dev.yml
ENV_FILE=.env.dev
PROJECT_NAME=Dev-full-stack-web-application

# Define a cleanup function to run on Ctrl+C
cleanup() {
  echo -e "\n🧹 Cleaning up Docker containers..."
  docker-compose -p "$PROJECT_NAME" -f "$COMPOSE_FILE" --env-file "$ENV_FILE" down -v
  exit 0
}

# Trap Ctrl+C (SIGINT) and call cleanup
trap cleanup SIGINT

# docker-compose -p "$PROJECT_NAME" -f "$COMPOSE_FILE" --env-file "$ENV_FILE" build --no-cache

# docker-compose -p "$PROJECT_NAME" -f "$COMPOSE_FILE" --env-file "$ENV_FILE" up


docker-compose \
  -p "$PROJECT_NAME" \
  -f "$COMPOSE_FILE" \
  --env-file "$ENV_FILE" \
  up --build