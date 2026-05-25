import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { portfolio } from "../data/portfolioData";

export default function Connect() {
  const { social, name } = portfolio;

  const links = [
    { href: social.github, label: "GitHub", icon: <FaGithub size={28} /> },
    { href: social.linkedin, label: "LinkedIn", icon: <FaLinkedin size={28} /> },
    { href: social.gmail, label: "Email", icon: <FaEnvelope size={28} /> },
    { href: social.resume, label: "Resume", icon: <FaFileDownload size={28} />, download: true },
  ];

  return (
    <section className="section connect-section" id="connect">
      <div className="container">
        <SectionHeader label="// contact" title="Let's Connect" />
        <p className="connect-desc">
          Open to opportunities and collaborations. Reach out via GitHub, LinkedIn, or email.
        </p>
        <div className="connect-links">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="connect-card"
              target={l.download ? undefined : "_blank"}
              rel={l.download ? undefined : "noopener noreferrer"}
              download={l.download || undefined}
              aria-label={l.label}
            >
              {l.icon}
              <strong>{l.label}</strong>
              <span>{l.label === "Email" ? social.email : name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
