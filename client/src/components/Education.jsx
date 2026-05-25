import SectionHeader from "./SectionHeader";
import { portfolio } from "../data/portfolioData";

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHeader label="// academics" title="Education" />
        <div className="timeline-list">
          {portfolio.education.map((edu) => (
            <article key={edu.institution} className="card timeline-item">
              <div className="timeline-logo">{edu.institution[0]}</div>
              <div className="timeline-head">
                <h3>{edu.institution}</h3>
                <p className="timeline-meta">
                  {[edu.degree, edu.location, edu.period].filter(Boolean).join(" · ")}
                </p>
                {edu.coursework?.length > 0 && (
                  <div className="coursework">
                    {edu.coursework.map((c) => (
                      <span key={c} className="course-pill">
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
