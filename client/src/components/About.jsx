import SectionHeader from "./SectionHeader";
import { portfolio } from "../data/portfolioData";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeader label="// about" title="About Me" />
        <p className="about-text">{portfolio.about}</p>
      </div>
    </section>
  );
}
