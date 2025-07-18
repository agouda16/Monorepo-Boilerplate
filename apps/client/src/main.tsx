import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppProvider } from "@/app/providers/AppProvider.tsx";
import { StoreProvider } from "@/app/providers/StoreProvide.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </StoreProvider>
  </StrictMode>
);
