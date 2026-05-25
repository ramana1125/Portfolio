import { FaExternalLinkAlt } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { portfolio } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <SectionHeader label="// credentials" title="Certifications" />
        <div className="cert-grid">
          {portfolio.certifications.map((c) => (
            <article key={c.url} className="card cert-card">
              <h3>{c.name}</h3>
              <p className="issuer">
                {[c.issuer, c.year].filter(Boolean).join(" · ")}
              </p>
              {c.url && (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginTop: "0.75rem", display: "inline-flex", gap: "0.35rem", alignItems: "center", fontSize: "0.85rem" }}
                >
                  {c.url.endsWith(".pdf") ? "Download certificate" : "View credential"}{" "}
                  <FaExternalLinkAlt size={12} />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
