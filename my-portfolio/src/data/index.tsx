import { FaReact,  FaFigma, FaGithub } from "react-icons/fa";
import {
    TypeIcon,
    WindIcon,
    FlashlightIcon,
    ImageIcon,
    LayoutDashboardIcon,
    EyeIcon,
    GlobeIcon,
    GitBranchIcon,
    PuzzleIcon,
    WrenchIcon,
    SettingsIcon,
    ServerIcon,
    DotIcon,
    CodeIcon,
    NetworkIcon,
    DatabaseIcon,
    FlameIcon,
    PackageIcon,
    TerminalIcon,
    FileCodeIcon,
    DownloadIcon,
  } from "lucide-react"; // import only icons you need
import {  Project, SkillCategory } from "../types";
import TandanlagetImg from "../assets/Tandanlaget.png";
import BerglundwebImg from "../assets/Berglundweb.png";
import Sameie from "../assets/Sameie.png";

const skills: SkillCategory[] = [
    {
      title: "Frontend",
      items: [
        { name: "React", icon: <FaReact size={18} className="text-blue-500" /> },
        { name: "TypeScript", icon: <TypeIcon size={18} className="text-blue-500"/> },
        { name: "Tailwind CSS", icon: <WindIcon size={18} className="text-blue-500"/> },
        { name: "Vite", icon: <FlashlightIcon size={18} className="text-blue-500"/> },
      ],
    },
    {
      title: "UI/UX Design",
      items: [
        { name: "Figma", icon: <FaFigma size={18} className="text-blue-500" />  },
        { name: "Illustrator", icon: <ImageIcon size={18} className="text-blue-500"/> },
        { name: "Layout & Structure", icon: <LayoutDashboardIcon size={18} className="text-blue-500"/> },
        { name: "Accessibility", icon: <EyeIcon size={18} className="text-blue-500"/> },
      ],
    },
    {
      title: "Web Development",
      items: [
        { name: "Routing", icon: <GlobeIcon size={18} className="text-blue-500"/> },
        { name: "Git", icon: <GitBranchIcon size={18} className="text-blue-500"/> },
        { name: "Dev Tools", icon: <WrenchIcon size={18} className="text-blue-500"/> },
        { name: "Build & Config", icon: <SettingsIcon size={18} className="text-blue-500"/> },
        { name: "Hosting & Deployment", icon: <ServerIcon size={18} className="text-blue-500"/> },
      ],
    },
    {
      title: "Backend & API",
      items: [
        { name: ".NET", icon: <DotIcon size={18} className="text-blue-500"/> },
        { name: "C#", icon: <CodeIcon size={18} className="text-blue-500"/> },
        { name: "API Design", icon: <NetworkIcon size={18} className="text-blue-500"/> },
        { name: "SQL", icon: <DatabaseIcon size={18} className="text-blue-500"/> },
        { name: "Node.js", icon: <PuzzleIcon size={18} className="text-blue-500"/> },
        { name: "Firebase", icon: <FlameIcon size={18} className="text-blue-500"/> },
      ],
    },
    {
      title: "Tools & Workflow",
      items: [
        { name: "NPM", icon: <PackageIcon size={18} className="text-blue-500"/> },
        { name: "Cyberduck", icon: <DownloadIcon size={18} className="text-blue-500"/> },
        { name: "GitHub", icon: <FaGithub size={18} className="text-blue-500"/> },
        { name: "ESLint/Prettier", icon: <FileCodeIcon size={18} className="text-blue-500"/> },
        { name: "Terminal", icon: <TerminalIcon size={18} className="text-blue-500" /> },
      ],
    },
  ];


  const projects: Project[] = [
    {
      title: "Berglund Web",
      description: "My official company website where I offer custom-built web solutions for clients. Designed with React and Tailwind, this site showcases my services, projects, and web design capabilities.",
      path: "https://www.berglundweb.no",
      external: true,
      thumbnail: BerglundwebImg,
    },
    {
      title: "Tandanlaget.se",
      description: "A clean and professional website built for a Swedish dental clinic. Focused on simplicity, clarity, and ease of navigation — created using React and Tailwind CSS.",
      path: "https://www.tandanlaget.se",
      external: true,
      thumbnail: TandanlagetImg,
    },
    {
      title: "Tors Vei 11A Sameie",
      description: "A cross-platform social app inspired by Facebook, made for the local housing community. Built with React Native and Firebase — supports posts, images, real-time updates, and secure user authentication.",
      path: "/Sameie",
      external: false,
      thumbnail: Sameie,
    },
    {
      title: "CV",
      description: "A dedicated page for my personal CV. Here, you can explore my skills, technical background, and previous experience — including leadership and creative work outside IT.",
      path: "/CV", // You might want to change this path to /cv
      external: false,
    }
  ];
  


  export { skills, projects };