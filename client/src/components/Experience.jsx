import SectionHeader from "./SectionHeader";
import { portfolio } from "../data/portfolioData";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeader label="// career" title="Experience" />
        <div className="timeline-list">
          {portfolio.experience.map((exp) => (
            <article key={`${exp.company}-${exp.period}`} className="card timeline-item">
              <div className="timeline-logo">{exp.logo || exp.company[0]}</div>
              <div className="timeline-head">
                <h3>
                  {exp.role} · {exp.company}
                </h3>
                <p className="timeline-meta">{exp.period}</p>
                {exp.highlights?.length > 0 && (
                  <ul className="timeline-bullets">
                    {exp.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
