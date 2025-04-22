import { useEffect, useRef, useState } from "react";
import { skills } from "../../data";

const SkillBar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActiveIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-wrap justify-center md:justify-between gap-2 relative z-20"
    >
      {skills.map((skill, index) => (
        <div
        key={index}
        className="w-36 h-44 sm:w-40 sm:h-48 md:w-48 md:h-56 lg:w-56 lg:h-64 xl:w-74 xl:h-72 
                   perspective cursor-pointer"
        onClick={() =>
          setActiveIndex((prev) => (prev === index ? null : index))
        }
      >
          <div
            className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${
              activeIndex === index ? "rotate-y-180" : ""
            }`}
          >
            {/* Front */}
            <div className="absolute inset-0 bg-white dark:bg-darkSurface border border-black/10 dark:border-darkBorder rounded-xl shadow-md flex items-center justify-center backface-hidden p-2 text-center">
              <span className="font-semibold text-lg text-black dark:text-white">
                {skill.title}
              </span>
            </div>

            {/* Back */}
            <div className="absolute inset-0 transform rotate-y-180 bg-white dark:bg-darkSurface border border-black/10 dark:border-darkBorder rounded-xl shadow-md p-3 flex flex-col justify-center items-center backface-hidden overflow-y-auto">
            <ul className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 text-left space-y-1 w-full">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillBar;
