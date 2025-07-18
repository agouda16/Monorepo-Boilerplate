import { useTheme } from "@/shared/lib/theme/useTheme";

export const LoginPage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-white text-black dark:bg-black dark:text-white transition-colors">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold">Current: {theme}</h1>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Toggle Themes
          </button>
        </div>
      </div>
    </>
  );
};
