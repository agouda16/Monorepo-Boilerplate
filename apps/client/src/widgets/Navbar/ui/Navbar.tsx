import { useTheme } from "@/shared/lib/theme/useTheme";
import { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"; // or "outline"

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // dummy auth toggle

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleAuthToggle = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <div className="w-full fixed top-0 z-50 glass-morphism dark:glass-morphism text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* LEFT: Logo */}
        <div className="text-lg font-normal">Full Stack Developer</div>

        {/* RIGHT: Menus + Login + Theme Toggle */}
        <div className="flex items-center gap-4">
          <nav className="hidden sm:flex gap-5 text-sm">
            <ul className="sm:flex gap-10 text-base font-normal py-1">
              <li className="relative overflow-hidden h-[22px] group">
                <a href="#" className="block relative">
                  <span className="block transition-transform duration-500 ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full">
                    Home
                  </span>
                  <span className="block absolute top-full left-0 transition-transform duration-500 ease-[cubic-bezier(.51,.92,.24,1.15)] group-hover:translate-y-[-100%]">
                    Home
                  </span>
                </a>
              </li>
              <li className="relative overflow-hidden h-[22px] group">
                <a href="#" className="block relative">
                  <span className="block transition-transform duration-500 ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full">
                    About
                  </span>
                  <span className="block absolute top-full left-0 transition-transform duration-500 ease-[cubic-bezier(.51,.92,.24,1.15)] group-hover:translate-y-[-100%]">
                    About
                  </span>
                </a>
              </li>
              <li className="relative overflow-hidden h-[22px] group">
                <a href="#" className="block relative">
                  <span className="block transition-transform duration-500 ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full">
                    Contact
                  </span>
                  <span className="block absolute top-full left-0 transition-transform duration-500 ease-[cubic-bezier(.51,.92,.24,1.15)] group-hover:translate-y-[-100%]">
                    Contact
                  </span>
                </a>
              </li>
            </ul>
            {/* </div> */}
            {/* <button
              onClick={handleAuthToggle}
              className="w-20 rounded-md bg-blue-600 text-white"
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button> */}
          </nav>

          {/* Theme toggle */}
          <button
            className="text-sm p-2 rounded hover:bg-white/20"
            onClick={toggleTheme}
            title="Toggle theme"
          >
            {theme === "dark" ? (
              <SunIcon className="w-5 h-5 text-yellow-400" />
            ) : (
              <MoonIcon className="w-5 h-5 text-black" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
