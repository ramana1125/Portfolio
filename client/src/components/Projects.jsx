import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { portfolio } from "../data/portfolioData";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeader label="// work" title="Projects" />
        <div className="projects-grid">
          {portfolio.projects.map((p) => (
            <article
              key={p.title}
              className={`card project-card ${p.featured ? "featured" : ""}`}
            >
              <h3>{p.title}</h3>
              {p.description ? <p>{p.description}</p> : null}
              {p.highlights?.length > 0 && (
                <ul className="project-highlights">
                  {p.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              <div className="project-tech">
                {p.tech.map((t) => (
                  <span key={t} className="course-pill">
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Code
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
