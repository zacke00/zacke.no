import "./Home.css";
import SkillBar from "../../components/SkillBar";
import ProjectShowcase from "../../components/ProjectShowcase";
import { useEffect, useState } from "react";

const Home = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkScreen = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      checkScreen(); // run on mount
      window.addEventListener("resize", checkScreen);
      return () => window.removeEventListener("resize", checkScreen);
    }, []);
    
  return (
    <div className="relative bg-cloudWhite text-black dark:bg-softBlack dark:text-white transition-colors duration-300 overflow-hidden">
      {/* Background Layer */}
      <div className={isMobile ? "home-section-mobile" : "home-section"} />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center px-6 md:px-10 py-10 min-h-screen">
        {/* Name & Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 w-full max-w-6xl mx-auto">
          <div className="flex flex-col justify-center items-center md:items-end h-[60vh] text-right">
            <h1 className="julius-sans text-4xl md:text-8xl text-textColor dark:text-softLavender transition-colors duration-300">
              Zakaria Berglund
            </h1>
          </div>

          <div className="hidden sm:flex justify-center md:justify-start h-[60vh] items-center">
            {/* optional image here */}
          </div>
        </div>

        <div className="w-full flex justify-center mt-10">
          <SkillBar />
        </div>

        <div className="w-full flex justify-center mt-10">
          <ProjectShowcase />
        </div>
      </div>
    </div>
  );
};

export default Home;
