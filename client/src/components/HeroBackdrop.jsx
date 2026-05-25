const CODE_SYMBOLS = [
  { text: "</>", top: "12%", left: "8%", delay: "0s", size: "1.1rem" },
  { text: "{ }", top: "22%", left: "72%", delay: "1.2s", size: "1rem" },
  { text: "n8n", top: "68%", left: "15%", delay: "0.6s", size: "0.95rem" },
  { text: "React", top: "18%", left: "88%", delay: "2s", size: "0.85rem" },
  { text: "Node.js", top: "75%", left: "78%", delay: "1.5s", size: "0.8rem" },
  { text: "JS", top: "55%", left: "5%", delay: "2.4s", size: "0.95rem" },
  { text: "Python", top: "42%", left: "12%", delay: "2.1s", size: "0.85rem" },
  { text: "const", top: "38%", left: "92%", delay: "0.3s", size: "0.75rem" },
  { text: "API", top: "82%", left: "42%", delay: "1.8s", size: "0.9rem" },
  { text: "=>", top: "8%", left: "48%", delay: "1s", size: "0.8rem" },
  { text: "AI", top: "48%", left: "68%", delay: "2.8s", size: "0.85rem" },
  { text: "Automation", top: "30%", left: "28%", delay: "1.4s", size: "0.8rem" },
  { text: "npm", top: "62%", left: "55%", delay: "0.9s", size: "0.75rem" },
];

export default function HeroBackdrop() {
  return (
    <div className="hero-backdrop" aria-hidden="true">
      <div className="hero-mesh" />
      <div className="hero-grid-lines" />
      <div className="hero-glow hero-glow-right" />
      <div className="hero-glow hero-glow-left" />
      <div className="hero-code-layer">
        {CODE_SYMBOLS.map((s) => (
          <span
            key={`${s.text}-${s.top}-${s.left}`}
            className="hero-code-symbol"
            style={{
              top: s.top,
              left: s.left,
              animationDelay: s.delay,
              fontSize: s.size,
            }}
          >
            {s.text}
          </span>
        ))}
      </div>
    </div>
  );
}
