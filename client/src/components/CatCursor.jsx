import { useEffect, useRef, useState } from "react";

const CAT_SVG = (
  <svg className="cat-svg" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="32" cy="38" rx="22" ry="18" fill="#fbbf24" />
    <circle cx="32" cy="28" r="16" fill="#fbbf24" />
    <path d="M18 18 L22 8 L26 18 Z" fill="#fbbf24" />
    <path d="M38 18 L42 8 L46 18 Z" fill="#fbbf24" />
    <circle cx="26" cy="26" r="3" fill="#1e293b" />
    <circle cx="38" cy="26" r="3" fill="#1e293b" />
    <ellipse cx="32" cy="32" rx="2" ry="1.5" fill="#f472b6" />
    <path d="M28 34 Q32 37 36 34" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M14 36 Q8 40 12 44" stroke="#fbbf24" strokeWidth="4" fill="none" strokeLinecap="round" />
    <path d="M50 36 Q56 40 52 44" stroke="#fbbf24" strokeWidth="4" fill="none" strokeLinecap="round" />
  </svg>
);

export default function CatCursor() {
  const catRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const [pouncing, setPouncing] = useState(false);
  const trailsRef = useRef([]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    if (reduced || mobile) return;

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const onOver = (e) => {
      const t = e.target;
      if (t.closest("a, button, .social-btn, .connect-card, .card, .btn")) {
        setPouncing(true);
      }
    };

    const onOut = (e) => {
      const t = e.target;
      if (t.closest("a, button, .social-btn, .connect-card, .card, .btn")) {
        setPouncing(false);
      }
    };

    let frame;
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      if (catRef.current) {
        catRef.current.style.transform = `translate(${pos.current.x - 24}px, ${pos.current.y - 24}px)`;
      }
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(frame);
      trailsRef.current.forEach((el) => el.remove());
    };
  }, []);

  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduced) return null;

  return (
    <div ref={catRef} className="cat-cursor" aria-hidden="true">
      <div className={`cat-cursor-inner ${pouncing ? "pouncing" : ""}`}>{CAT_SVG}</div>
    </div>
  );
}
