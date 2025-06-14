# 🧠 Server - Node.js + TypeScript (Clean Architecture)

This is the backend of the boilerplate, built using **Node.js**, **Express**, and **TypeScript**, following the principles of **Clean Architecture**.

## 🧱 Clean Architecture Overview
├── dist/ # Compiled output
├── src/
│ ├── config/ # Environment config, DB setup
│ ├── domain/ # Entities and business rules (pure logic)
│ ├── use-cases/ # Application-specific business rules
│ ├── infrastructure/ # External services (e.g., DB, APIs)
│ └── interfaces/ # Controllers, routes, middlewares
│ └── controllers/ # Express route handlers
│
└── index.ts # Entry point that runs the server

This structure promotes **separation of concerns** and is easy to test and maintain.