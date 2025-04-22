import { Sparkles } from "lucide-react";
import DarkModeToggle from "../DarkMode";

const Header = () => {
  return (
    <header className="w-[92%] mx-auto mt-6 px-6 py-3 
      bg-white/90 dark:bg-darkSurface/90 
      backdrop-blur-md 
      border border-gray-200 dark:border-darkBorder 
      shadow-[0_2px_8px_rgba(0,0,0,0.05)] 
      rounded-2xl 
      flex items-center justify-between 
      transition-all duration-300">
      
      <div className="flex items-center gap-2">
        <Sparkles size={20} className="text-[#235AC7]" />
        <span className="text-lg font-semibold tracking-tight text-gray-800 dark:text-gray-100">
          zacke´s Portfolio
        </span>
      </div>
        
      <div className="text-sm text-gray-500 italic dark:text-gray-400">
        Focused on quality & clarity
      </div>
      
      
    </header>
  );
};

export default Header;
