import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { portfolio } from "../data/portfolioData";
import HeroBackdrop from "./HeroBackdrop";

export default function Hero() {
  const { name, profilePhoto, designations, social, heroTagline } = portfolio;

  return (
    <section className="hero section" id="home">
      <HeroBackdrop />
      <div className="container hero-grid">
        <div className="profile-wrap">
          <div className="profile-ring">
            <img
              src={profilePhoto}
              alt={`${name} profile`}
              className="profile-photo"
            />
          </div>
        </div>
        <div className="hero-content-panel">
          <p className="section-label">Hello, I&apos;m</p>
          <h1 className="hero-name gradient-text">{name}</h1>
          <div className="designation-tags">
            {designations.map((d) => (
              <span key={d} className="tag">
                {d}
              </span>
            ))}
          </div>
          <p className="hero-tagline">{heroTagline}</p>
          <div className="social-row">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href={social.gmail} className="social-btn" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              Check out my work!
            </a>
            <a href={social.resume} className="btn btn-outline" download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
