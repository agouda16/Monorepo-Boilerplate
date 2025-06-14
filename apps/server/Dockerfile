# Step 1: Build the app
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY tsconfig.json ./
COPY src ./src

RUN npm run build

# Step 2: Run the built app
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

# Strip "prepare" script from package.json to avoid husky
RUN npm pkg delete scripts.prepare

# Install production dependencies only
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist

EXPOSE 8080

CMD ["node", "--trace-warnings","dist/index.js"]
