import { Link } from "react-router-dom";
import { projects } from "../../data";

const ProjectShowcase = () => {
  return (
    <div className="w-[90%] mx-auto mt-20 p-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-textColor dark:text-textColor border-white transition-colors mt-0">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Link
            to={project.path}
            key={index}
            className="block bg-white dark:bg-darkSurface 
              border border-black/10 dark:border-darkBorder 
              rounded-lg shadow-md p-4 
              hover:shadow-lg transition-transform hover:scale-105 
              transition-colors duration-300"
          >
            {project.thumbnail && (
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-40 object-cover rounded-t-lg mb-3"
              />
            )}
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
