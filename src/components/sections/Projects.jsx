import ProjectTitle from "./ProjectSection/ProjectTitle";
import PinnedProjects from "./ProjectSection/PinnedProjects";
import { RiExternalLinkLine, RiGithubFill } from "@remixicon/react";

const PROJECTS = [
  {
    id: "ai-code-review-bot",
    title: "AI Code Review Bot",
    tag: "AI · Microservices · LLMs",
    description:
      "Automated code review bot that ingests GitHub pull request diffs via webhooks to evaluate code quality, style, and security vulnerabilities. Features asynchronous backend microservices with context-aware prompting for instant static analysis and inline remediation.",
    image: "/Framework.jpg",
    alt: "AI Code Review Bot — Automated PR Reviewer",
    deployUrl: null,
    githubUrl: "https://github.com/rayapatiravitheja/ai-code-review-bot",
    techIcons: "python,github,fastapi,docker,git",
  },
  {
    id: "inventorypro",
    title: "InventoryPro",
    tag: "Full-Stack · MERN",
    description:
      "Architected a centralized multi-warehouse inventory system utilizing MongoDB, Express.js, React.js, and Node.js for real-time stock lifecycle management. Features Role-Based Access Control (RBAC), inter-warehouse allocations, and automated reconciliation.",
    image: "/InventoryPro.png",
    alt: "InventoryPro — Inventory & Warehouse Management System",
    deployUrl: "https://inventory-pro-azure-two.vercel.app/",
    githubUrl: "https://github.com/rayapatiravitheja/Inventory-pro",
    techIcons: "mongodb,express,react,nodejs,tailwind,postman",
  },
  {
    id: "linkedai",
    title: "LinkedAI",
    tag: "AI · Web Automation",
    description:
      "Intelligent automation platform streamlining job matching, applicant tracking, and recruiter interaction. Integrated Playwright for headless browser automation coupled with Groq API (LLaMA 3.3) for high-throughput communication generation and Express/Firebase backend.",
    image: "/LMS.png",
    alt: "LinkedAI — LinkedIn Automation Platform",
    deployUrl: null,
    githubUrl: "https://github.com/rayapatiravitheja",
    techIcons: "nodejs,express,react,firebase,python,postman",
  },
  {
    id: "ai-exam",
    title: "AI-EXAM Proctoring",
    tag: "Computer Vision · Deep Learning",
    description:
      "Intelligent online proctoring system using computer vision and deep learning to monitor examinee behavior in real-time, detecting multi-face presence, gaze diversion, and suspicious activity during remote examination sessions.",
    image: "/WebDev.jpg",
    alt: "AI-EXAM — Intelligent Online Proctoring Platform",
    deployUrl: null,
    githubUrl: "https://github.com/rayapatiravitheja/AI-Powered-Online-Examination-Intelligent-Proctoring-System",
    techIcons: "python,tensorflow,opencv,react,fastapi",
  },
];

const ProjectCard = ({ project, index }) => {
  const { title, tag, description, deployUrl, githubUrl, techIcons } = project;

  return (
    <div className="flex flex-col gap-4 sm:gap-5 w-full mx-4 sm:mx-6 md:m-8 my-0">
      <div className="flex items-end gap-3">
        <span
          className="font-black leading-none text-white select-none"
          style={{
            fontSize: "clamp(40px, 10vw, 130px)",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="mb-3 sm:mb-4 text-[9px] tracking-[0.28em] uppercase text-[#c9ff00] border border-[#c9ff00]/25 px-3 py-1 rounded-full font-medium whitespace-nowrap">
          {tag}
        </span>
      </div>

      <h3
        className="font-black leading-none tracking-tight text-white"
        style={{
          fontSize: "clamp(26px, 4.5vw, 62px)",
        }}
      >
        {title}
      </h3>

      <div className="w-18 h-px bg-white" />

      <p className="text-[13.5px] leading-[1.8] text-white/50 font-light max-w-full sm:max-w-[80%] md:max-w-[66%]">
        {description}
      </p>

      <div>
        <p className="text-sm tracking-[0.3em] uppercase text-white mb-2.5 font-medium">
          Tech Stack
        </p>
        <img
          src={`https://skillicons.dev/icons?i=${techIcons}&perline=9&theme=dark`}
          alt={`Tech used in ${title}`}
          className="h-8 sm:h-10"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="flex items-center gap-2.5 flex-wrap pt-1">
        {deployUrl && (
          <a
            href={deployUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-1.5 rounded-full font-semibold tracking-wide
              bg-[#c9ff00] text-black transition-[opacity,transform] duration-200
              opacity-80 hover:opacity-100
              px-5 py-2.5 text-sm
              sm:px-8 sm:py-3 sm:text-md
            "
          >
            <RiExternalLinkLine size={20} className="sm:hidden" />
            <RiExternalLinkLine size={25} className="hidden sm:block" />
            Live Demo
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-1.5 rounded-full font-semibold tracking-wide
              border border-white text-white
              transition-[border-color,transform,background-color] duration-200
              hover:border-[#555] hover:text-black hover:bg-white
              px-5 py-2.5 text-sm
              sm:px-8 sm:py-3 sm:text-md
            "
          >
            <RiGithubFill size={20} className="sm:hidden" />
            <RiGithubFill size={25} className="hidden sm:block" />
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

const ProjectImage = ({ project }) => (
  <div className="relative w-full overflow-hidden rounded-2xl min-h-55 sm:min-h-80 md:min-h-125">
    <img
      src={project.image}
      alt={project.alt}
      loading="lazy"
      decoding="async"
      className="pinned-project-img absolute inset-0 w-full h-full object-cover block"
    />
  </div>
);

const Projects = () => (
  <section
    id="projects"
    className="min-h-screen bg-[#0f0f0f]"
    aria-label="Projects"
  >
    <div>
      <ProjectTitle />

      <PinnedProjects
        leftWidth="w-[50%]"
        leftContent={PROJECTS.map((p, i) => (
          <ProjectCard
            key={p.id}
            project={p}
            index={i}
            total={PROJECTS.length}
          />
        ))}
        rightContent={PROJECTS.map((p, i) => (
          <ProjectImage
            key={p.id}
            project={p}
            index={i}
            total={PROJECTS.length}
          />
        ))}
      />

      <div className="h-[10vh]" />
    </div>
  </section>
);

export default Projects;
