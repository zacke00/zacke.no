import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = () => {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return storedTheme === "dark" || (!storedTheme && prefersDark);
    }
    return false;
  });

  // ✅ Update DOM & localStorage when `dark` changes
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="fixed top-20 right-2 z-50">
      <button
        onClick={() => setDark(!dark)}
        className={`relative w-20 h-10 rounded-full border-2 flex items-center px-1 transition-colors duration-300 
        ${dark ? "bg-gray-700 border-gray-600" : "bg-yellow-300 border-yellow-400"}`}
      >
        {/* Sun icon */}
        <div className="px-2 w-1/2 text-center">
          <Sun size={18} className={`${dark ? "text-gray-400" : "text-yellow-600"}`} />
        </div>

        {/* Moon icon */}
        <div className="px-2 w-1/2 text-center">
          <Moon size={18} className={`${dark ? "text-white" : "text-gray-400"}`} />
        </div>

        {/* Toggle knob */}
        <span
          className={`absolute left-[2px] w-8 h-8 rounded-full bg-white shadow-md transition-transform duration-300 ${
            dark ? "translate-x-[38px]" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
};

export default DarkModeToggle;
