# ⚛️ React + TypeScript + Vite + Tailwind CSS

> Featuring **Feature-Sliced Design (FSD)** & Advanced ESLint Setup

This project provides a **scalable, maintainable** front-end boilerplate using:

- ⚡️ [Vite](https://vitejs.dev) — Fast development build tool
- 🧠 [TypeScript](https://www.typescriptlang.org)
- 💨 [Tailwind CSS](https://tailwindcss.com) — Utility-first styling
- 🧱 **Feature-Sliced Design (FSD)** — Scalable frontend architecture
- ✅ [ESLint](https://eslint.org) — With optional type-aware, React-specific rules

---

## 🧩 Feature-Sliced Architecture (FSD)

We follow [Feature-Sliced Design](https://feature-sliced.design) to structure our app in a modular, domain-oriented way:

src/
├── app/ # App entry, router, context providers
├── pages/ # Route-level views
├── features/ # Business logic (e.g., auth, search)
├── shared/ # Reusable UI, utilities, types
└── index.css # Tailwind base styles

This makes the app more **scalable**, **testable**, and **easy to migrate**.

---

## ⚙️ Vite + React Template

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
