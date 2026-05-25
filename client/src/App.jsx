import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import TechStack from "./components/TechStack";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import CatCursor from "./components/CatCursor";

function App() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReduced) document.body.classList.add("custom-cursor-active");
    return () => document.body.classList.remove("custom-cursor-active");
  }, []);

  return (
    <>
      <CatCursor />
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Certifications />
        <TechStack />
        <Connect />
      </main>
      <Footer />
    </>
  );
}

export default App;
