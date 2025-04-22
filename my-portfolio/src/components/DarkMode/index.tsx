import { useEffect, useState, useRef } from "react";
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

  const [collapsed, setCollapsed] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Apply dark class + localStorage update
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // Starts or resets the collapse timer
  const startCollapseTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setCollapsed(true);
    }, 3000);
  };

  // When button is clicked
  const handleToggleClick = () => {
    setDark(prev => !prev);
    setCollapsed(false);
    startCollapseTimer();
  };

  const handleExpand = () => {
    setCollapsed(false);
    startCollapseTimer();
  };

  return (
    <div className="fixed top-5 right-2 z-50">
      {!collapsed ? (
        <button
          onClick={handleToggleClick}
          className={`relative w-20 h-10 rounded-full border-2 flex items-center px-1 transition-colors duration-300 
          ${dark ? "bg-gray-700 border-gray-600" : "bg-yellow-300 border-yellow-400"}`}
        >
          <div className="px-2 w-1/2 text-center">
            <Sun size={18} className={`${dark ? "text-gray-400" : "text-yellow-600"}`} />
          </div>
          <div className="px-2 w-1/2 text-center">
            <Moon size={18} className={`${dark ? "text-white" : "text-gray-400"}`} />
          </div>
          <span
            className={`absolute left-[2px] w-8 h-8 rounded-full bg-white shadow-md transition-transform duration-300 ${
              dark ? "translate-x-[38px]" : "translate-x-0"
            }`}
          />
        </button>
      ) : (
        <button
          onClick={handleExpand}
          className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md border-2 transition-all duration-300 
          ${dark ? "bg-gray-700 border-gray-600" : "bg-yellow-300 border-yellow-400"}`}
          title="Toggle dark mode"
        >
          {dark ? (
            <Moon size={18} className="text-white" />
          ) : (
            <Sun size={18} className="text-yellow-600" />
          )}
        </button>
      )}
    </div>
  );
};

export default DarkModeToggle;
