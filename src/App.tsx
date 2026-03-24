import "./App.css";
import Navbar from "./components/Navbar";
import { projects, work, education } from "./portfolioData";

function App() {
  return (
    <div className="portfolio-container">
      <Navbar />

      {/* SECTION 1: HOME */}
      <section id="home" className="snap-section hero">
        <div className="content">
          <h1 className="hero-title">Sienna Lansky</h1>
          <p className="hero-subtitle">
          Fullstack JavaScript-student som bygger moderna applikationer och tycker om att lära sig nytt
          </p>
          <p>Söker LIA praktik till hösten 2026!</p>
        </div>
        <a href="#about" className="scroll-hint">
          Läs mer om mig ↓
        </a>
      </section>

      {/* SECTION 2: ABOUT */}
      <section id="about" className="snap-section about">
        <div className="about-container">
          <div className="text-bubble">
            <h2>Om mig</h2>
            <p>
              Jag är en 25-årig fullstackstudent bosatt i södra Stockholm som
              gillar problemlösning och att ständigt lära mig nya saker. Med
              bred arbetslivserfarenhet har jag vant mig vid att ta ansvar,
              samarbeta och snabbt anpassa mig till nya miljöer. Jag studerar
              idag Fullstack JavaScript på Chas Academy och har som mål att
              starta en karriär inom utveckling. De senaste åren har jag
              fokuserat mycket på att resa, vilket har gett mig värdefulla
              perspektiv som jag tar med mig framåt. Till hösten söker jag en
              LIA-plats där jag kan fortsätta utvecklas och ta mina första steg
              i branschen.
            </p>
          </div>
        </div>
        <a href="#experience" className="scroll-hint">
          Mina erfarenheter ↓
        </a>
      </section>

      {/* SECTION 3: EXPERIENCE */}
      <section id="experience" className="snap-section experience">
        <div className="experience-grid">
          <div className="experience-column">
            <h3>Utbildning</h3>
            {education.map((education, i) => (
              <div key={i} className="exp-bubble">
                <h4>{education.name} </h4>
                <p>{education.description}</p>
                <b>{education.year}</b>
              </div>
            ))}
          </div>
          <div className="experience-column">
            <h3>Jobb</h3>
            {work.map((work, i) => (
              <div key={i} className="exp-bubble">
                <h4>{work.name}</h4>
                <p>{work.description}</p>
                <b>{work.year}</b>
              </div>
            ))}
          </div>
        </div>
        <a href="#projects" className="scroll-hint">
          Mina projekt ↓
        </a>
      </section>

      {/* SECTION 4: PROJECTS */}
      <section id="projects" className="snap-section projects">
        <h2 className="section-title">Mina Projekt</h2>
        <div className="project-grid">
          {projects.map((project, i) => (
            <div key={i} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
        <a href="#contact" className="scroll-hint">
          Kontakta mig ↓
        </a>
      </section>

      {/* SECTION 5: CONTACT */}
      <section id="contact" className="snap-section contact">
        <h1 className="section-title">Kontakta mig</h1>
        <div className="contact-card">
          <a href="mailto:siennalansky@gmail.com" className="email-link">
            siennalansky@gmail.com
          </a>
          <div className="social-links">
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
