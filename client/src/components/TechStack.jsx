import SectionHeader from "./SectionHeader";
import { portfolio } from "../data/portfolioData";
import {
  SiDocker,
  SiExpress,
  SiFlask,
  SiGit,
  SiHoppscotch,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiN8N,
  SiNodedotjs,
  SiOpenai,
  SiPostman,
  SiPython,
  SiReact,
} from "react-icons/si";
import { FaRobot, FaServer } from "react-icons/fa";

const techLogos = {
  JavaScript: { icon: SiJavascript, color: "#f7df1e" },
  Python: { icon: SiPython, color: "#3776ab" },
  SQL: { icon: SiMysql, color: "#4479a1" },
  React: { icon: SiReact, color: "#61dafb" },
  "Node.js": { icon: SiNodedotjs, color: "#5fa04e" },
  Express: { icon: SiExpress, color: "#f8fafc" },
  Flask: { icon: SiFlask, color: "#f8fafc" },
  MongoDB: { icon: SiMongodb, color: "#47a248" },
  n8n: { icon: SiN8N, color: "#ea4b71" },
  Git: { icon: SiGit, color: "#f05032" },
  Docker: { icon: SiDocker, color: "#2496ed" },
  Postman: { icon: SiPostman, color: "#ff6c37" },
  Hoppscotch: { icon: SiHoppscotch, color: "#31c48d" },
  "REST APIs": { icon: FaServer, color: "#38bdf8" },
  "AI / LLMs": { icon: SiOpenai, color: "#10a37f" },
  Automation: { icon: FaRobot, color: "#a78bfa" },
};

export default function TechStack() {
  return (
    <section className="section" id="stack">
      <div className="container">
        <SectionHeader label="// toolbox" title="Tech Stack" />
        <div className="tech-grid">
          {portfolio.techStack.map((t) => {
            const logo = techLogos[t.name];
            const Icon = logo?.icon || FaServer;

            return (
              <span key={t.name} className="tech-chip" title={t.category}>
                <Icon
                  className="tech-logo"
                  style={{ color: logo?.color || "var(--accent)" }}
                  aria-hidden="true"
                />
                <span>{t.name}</span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
