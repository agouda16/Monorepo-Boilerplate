import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") return "light"; // fallback for SSR
  const stored = localStorage.getItem("theme") as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function useTheme(): {
  theme: Theme;
  setTheme: (theme: Theme) => void;
} {
  const [theme, setTheme] = useState<Theme>(getPreferredTheme);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
}
