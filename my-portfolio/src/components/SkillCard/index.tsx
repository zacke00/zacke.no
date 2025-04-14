import { useState } from "react";
import { SkillCardProps } from "../../types";

const SkillCard = ({ skill }: SkillCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-44 h-40 perspective">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${
          flipped ? "rotate-y-180" : ""
        } group sm:hover:rotate-y-180`}
      >
        {/* Front */}
        <div className="absolute inset-0 bg-white border border-black/10 rounded-xl shadow-md flex items-center justify-center backface-hidden p-2 text-center">
          <div className="flex flex-col items-center">
            <span className="font-semibold text-lg text-black">{skill.title}</span>
            <button
              onClick={() => setFlipped(true)}
              className="mt-2 px-2 py-1 text-xs text-blue-600 border border-blue-300 rounded sm:hidden"
            >
              Show Skills
            </button>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 transform rotate-y-180 bg-white border border-black/10 rounded-xl shadow-md p-3 flex flex-col justify-center items-center backface-hidden overflow-y-auto">
          <ul className="text-sm text-gray-700 text-left space-y-1 w-full">
            {skill.items.map((item, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setFlipped(false)}
            className="mt-3 px-2 py-1 text-xs text-gray-600 border border-gray-300 rounded sm:hidden"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
