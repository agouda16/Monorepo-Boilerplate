# Build step
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies and build
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Serve with NGINX
FROM nginx:alpine

# Remove default config and copy custom one
COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/dist /usr/share/nginx/html

# Expose default port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]