export default function SectionHeader({ label, title, id }) {
  return (
    <header id={id}>
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
    </header>
  );
}
