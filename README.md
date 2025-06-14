# 🚀 Full Stack Web App Boilerplate (Docker + Nginx + Clean Architecture)

This is a **production-grade full-stack boilerplate** designed with **Docker-first workflow**.  
It uses a monorepo structure to unify:

- 🧠 **Backend**: Node.js + TypeScript + Express, following Clean Architecture.
- 🎨 **Frontend**: React (Vite).
- 🐳 **Docker**: For containerization.
- 🌐 **Nginx**: Acts as a reverse proxy in production.

## 📂 Folder Structure

.
├── apps/
│ ├── client/ # Frontend
│ └── server/ # Backend (Clean Architecture)
├── docker/
│ └── nginx/ # NGINX config for production
├── .env.dev # Development environment variables
├── .env.prod # Production environment variables
├── docker-compose.yml # Root-level Docker config
├── run-dev.sh # Start dev mode
├── run-prod.sh # Start prod mode
├── run-stop-prod.sh # Stop prod containers
└── README.md

## 📁 Project Structure

- `apps/client`: Frontend (React/Vite)
- `apps/server`: Backend (Node.js/Express with Clean Architecture)
- `docker-compose`: For consistent local and production setups

See [`apps/server/README.md`](apps/server/README.md) for a full breakdown.

---

## 🧰 Getting Started

> ⚠️ Prerequisites: Install Docker & Docker Compose

### 🔧 Development Mode

```bash
./run-dev.sh
```

- Starts both frontend and backend in dev mode
- Hot-reloading enabled
- Uses .env.dev

### 🚀 Production Mode

```bash
./run-prod.sh
```

- Builds and runs the app using production Dockerfiles
- Serves frontend with NGINX
- Uses .env.prod

🛑 Stop Production Containers

```bash
./run-stop-prod.sh
```

- Gracefully stops and removes the production containers
