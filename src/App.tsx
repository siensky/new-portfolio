import "./App.css";
import {
  profile,
  about,
  facts,
  projects,
  education,
  work,
  type ExperienceEntry,
} from "./portfolioData";

const pad = (n: number) => String(n).padStart(3, "0");

function ExpItem({ item }: { item: ExperienceEntry }) {
  return (
    <div className="exp-item">
      <p className="exp-head">
        <span className="exp-role">{item.title}</span>
        <span className="exp-at"> @ </span>
        <span className="exp-company">{item.org}</span>
      </p>
      {item.description && <p className="exp-desc">{item.description}</p>}
      <span className="exp-date">{item.year}</span>
    </div>
  );
}

function App() {
  return (
    <div className="portfolio-container">
      {/* HERO */}
      <header className="hero">
        <span className="status">
          <span className="status-dot" aria-hidden="true" />
          {profile.status}
        </span>
        <h1 className="hero-title">
          Sienna <span className="hero-title-last">Lansky.</span>
        </h1>
        <p className="hero-sub">
          <strong>{profile.tagline.lead}</strong>
          {profile.tagline.rest}
        </p>
      </header>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="card">
          <span className="eyebrow eyebrow-accent">About me</span>
          <p className="about-lead">{about.lead}</p>
          <p className="about-body">{about.body}</p>
        </div>

        <div className="card facts-card">
          {facts.map((f) => (
            <div className="fact" key={f.label}>
              <span className="eyebrow">{f.label}</span>
              <span className="fact-value">{f.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="section-head">
          <h2>Selected projects</h2>
          <span className="section-count">
            [{pad(1)} — {pad(projects.length)}]
          </span>
        </div>

        {projects.map((p) => (
          <article className="project" key={p.name}>
            <div className="project-top">
              <span className="project-mark" aria-hidden="true">
                <span className="project-mark-glyph" />
              </span>
              <span className="project-tech">{p.tech.join("  /  ")}</span>
            </div>
            <h3 className="project-name">{p.name}</h3>
            <p className="project-body">{p.description}</p>
            <div className="project-divider" />
            {p.ongoing ? (
              <span className="project-links project-ongoing">Work in progress</span>
            ) : (
              <div className="project-links">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    GitHub ↗
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer">
                    Live ↗
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <div className="section-head">
          <h2>Background</h2>
        </div>

        <div className="exp-group">
          <span className="eyebrow">Education</span>
          {education.map((e) => (
            <ExpItem key={e.org} item={e} />
          ))}
        </div>

        <div className="exp-group">
          <span className="eyebrow">Work</span>
          {work.map((w) => (
            <ExpItem key={w.org} item={w} />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="contact-card">
          <h2>Let's take it further.</h2>
          <p>{profile.contactText}</p>
          <a className="email-btn" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="contact-social">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">© 2026 Sienna Lansky</footer>
    </div>
  );
}

export default App;
