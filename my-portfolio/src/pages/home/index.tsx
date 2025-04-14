import "./Home.css";
import SkillBar from "../../components/SkillBar";
import ProjectShowcase from "../../components/ProjectShowcase";


const Home = () => {
  return (
    <div className="relative bg-white text-black overflow-hidden">
      {/* Background Layer */}
      <div className="home-section"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center px-6 md:px-10 py-10 min-h-screen">
        {/* Name & Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 w-full max-w-6xl mx-auto">
          {/* Left: Title */}
            <div className="flex flex-col justify-center items-center md:items-end h-[60vh] text-right">
                <h1 className="julius-sans text-4xl md:text-8xl text-textColor">
                Zakaria Berglund
                </h1>
            </div>

          {/* Right: PNG Image */}
          <div className="hidden sm:flex justify-center md:justify-start h-[60vh] items-center">
            </div>
        </div>

        {/* SkillBar */}
        <div className="w-full flex justify-center mt-10">
          <SkillBar />
        </div>
        {/* Project Showcase */}
        <div className="w-full flex justify-center mt-10">
            <ProjectShowcase />
        </div>
      </div>
    </div>
  );
};

export default Home;
