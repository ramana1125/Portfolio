import { portfolio } from "../data/portfolioData";

export default function Footer() {
  const year = portfolio.copyright.year;
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {year} {portfolio.name}. {portfolio.copyright.text}
        </p>
      </div>
    </footer>
  );
}
