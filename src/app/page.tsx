"use client";

import { useState } from "react";
import { achievements, certification, githubProjects, githubSignals, profile, projects, stack } from "@/data/portfolio";

const sections = ["about", "skills", "projects", "journey", "contact"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Manu home">M<span>.</span></a>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
          {sections.map((section) => <a key={section} href={`#${section}`} onClick={() => setMenuOpen(false)}>{section}</a>)}
        </nav>
        <a className="header-link" href={profile.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
        <button className="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="hero-name">{profile.fullName}</p>
          <p className="eyebrow">CSE STUDENT <span>·</span> BUILDER</p>
          <h1>Full-stack systems<br /><em>with a reason to exist.</em></h1>
          <p className="hero-intro">{profile.bio}</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">See my work <span>↓</span></a><a className="button button-quiet" href={profile.resume} target="_blank" rel="noreferrer">Resume <span>↗</span></a></div>
          <p className="availability"><i /> Open to learning, collaborating, and internship opportunities</p>
        </div>
        <div className="terminal-card" aria-label="Developer focus terminal">
          <div className="terminal-top"><span className="terminal-dots"><i /><i /><i /></span><span>manu@biet:~</span><span>•••</span></div>
          <div className="terminal-body"><p><span className="prompt">$</span> whoami</p><p className="terminal-answer">{profile.name.toLowerCase()} / {profile.role}</p><p><span className="prompt">$</span> cat current-focus.txt</p><p className="terminal-answer focus-line">full-stack / AI / problem solving</p><p><span className="prompt">$</span> <span className="cursor" /></p></div>
          <div className="terminal-stamp">BUILDING<br />IN PUBLIC</div>
        </div>
      </section>

      <section className="signal-bar section-shell" aria-label="Profile signals"><span className="signal-label">A FEW SIGNALS</span>{githubSignals.map((signal) => <div className="signal" key={signal.label}><strong>{signal.value}</strong><span>{signal.label}</span></div>)}<span className="signal-mark">✦</span></section>

      <section className="content-section section-shell" id="about"><div className="section-heading"><p className="eyebrow">01 / THE PERSON</p><h2>Curious by default.<br /><em>Practical by practice.</em></h2></div><div className="about-grid"><p className="large-copy">I&apos;m a final-year Computer Science &amp; Engineering student at BIET with a 9.22 CGPA. I enjoy turning difficult workflows into clear products, especially where full-stack engineering and applied AI meet.</p><div className="about-note"><span>01</span><p>{profile.focus}</p></div></div></section>

      <section className="content-section skills-section section-shell" id="skills"><div className="section-heading compact"><p className="eyebrow">02 / THE TOOLKIT</p><h2>Tools I reach for.</h2></div><div className="stack-grid">{stack.map((group) => <div className="stack-group" key={group.label}><p>{group.label}</p><div>{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></section>

      <section className="content-section projects-section section-shell" id="projects"><div className="section-heading project-heading"><div><p className="eyebrow">03 / SELECTED WORK</p><h2>Things I&apos;ve built.</h2></div><a className="text-link" href={profile.github} target="_blank" rel="noreferrer">All repositories <span>↗</span></a></div><div className="project-list">{projects.map((project) => <article className="project-card" key={project.name}><div className="project-number">{project.number}</div><div className="project-main"><div className="project-meta"><span>{project.type}</span><span>{project.language}</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="project-tags">{project.highlights.map((item) => <span key={item}>{item}</span>)}</div></div><a className="project-arrow" href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}>↗</a></article>)}</div><div className="github-projects"><div className="section-heading compact"><div><p className="eyebrow">FROM THE REPOSITORIES</p><h3>More experiments and builds.</h3></div><span className="github-count">{githubProjects.length} public projects</span></div><div className="github-project-grid">{githubProjects.map((project) => <a className="github-project" href={project.github} target="_blank" rel="noreferrer" key={project.name}><span>{project.name}</span><small>{project.language}</small><b>↗</b></a>)}</div></div></section>

      <section className="content-section journey-section section-shell" id="journey"><div className="section-heading compact"><p className="eyebrow">04 / THE JOURNEY</p><h2>Still becoming.</h2></div><div className="journey-row"><div className="journey-year">2023—26</div><div><h3>Computer Science &amp; Engineering</h3><p>BIET, Davanagere, Karnataka</p></div><div className="journey-detail">Final-year developer building practical fluency across full-stack systems, AI applications, and problem-solving fundamentals.</div></div><div className="credentials"><div><p className="eyebrow">ACHIEVEMENTS &amp; LEADERSHIP</p>{achievements.map((item) => <p className="credential-item" key={item}>{item}</p>)}</div><div><p className="eyebrow">CERTIFICATION</p><p className="credential-item">{certification}</p></div></div></section>

      <section className="contact-section section-shell" id="contact"><p className="eyebrow">05 / SAY HELLO</p><h2>Let&apos;s build something<br /><em>useful.</em></h2><p className="contact-copy">Open to thoughtful conversations, collaboration, and software engineering opportunities.</p><div className="contact-links"><a href={`mailto:${profile.email}`}>Email <span>↗</span></a><a href={profile.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a><a href={profile.resume} target="_blank" rel="noreferrer" download>Resume <span>↓</span></a></div></section>
      <footer className="site-footer section-shell"><span>© {new Date().getFullYear()} {profile.name}</span><span>Designed &amp; built with intent</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
