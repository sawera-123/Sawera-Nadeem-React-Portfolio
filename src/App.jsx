import Navbar from "./components/Navbar.jsx";
import SectionHeading from "./components/SectionHeading.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import { profile, skillGroups, projects, certifications } from "./data.js";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero section" id="home">
          <div className="hero-glow glow-one"></div>
          <div className="hero-glow glow-two"></div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="availability"><span className="availability-dot"></span> Open to internship opportunities</div>
              <p className="eyebrow">COMPUTER SCIENCE STUDENT · LAHORE, PAKISTAN</p>
              <h1>Hi, I’m <span className="gradient-text">Sawera Nadeem.</span></h1>
              <h2 className="hero-role">Aspiring MERN Stack Developer <span className="role-divider">|</span> React.js · Node.js · MongoDB</h2>
              <p className="hero-description">I’m a Computer Science student who enjoys building for the web, exploring new technologies, and solving problems through code. I’m looking for an opportunity to learn from a team, contribute to real projects, and grow as a developer.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">Explore my projects <Arrow /></a>
                <a className="button button-secondary" href="#contact">Contact me <Arrow /></a>
              </div>
              <a className="cv-link" href="/Sawera_Nadeem_CV.pdf" download>
                <span className="cv-icon" aria-hidden="true">↓</span>
                Download CV <span className="cv-note">(add your PDF to public/)</span>
              </a>
              <div className="hero-socials">
                <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
                <a href={`mailto:${profile.email}`}>Email <Arrow /></a>
                <span>{profile.location}</span>
              </div>
            </div>
            <div className="hero-visual" aria-label="Decorative developer illustration">
              <div className="visual-orbit orbit-one"></div>
              <div className="visual-orbit orbit-two"></div>
              <div className="profile-card">
                <div className="profile-card-top"><span></span><span></span><span></span><small>developer.js</small></div>
                <div className="code-lines" aria-hidden="true">
                  <p><span className="code-muted">01</span> <span className="code-purple">const</span> <span className="code-blue">developer</span> = {"{"}</p>
                  <p><span className="code-muted">02</span> &nbsp; name: <span className="code-green">'Sawera'</span>,</p>
                  <p><span className="code-muted">03</span> &nbsp; focus: <span className="code-green">'Web Dev'</span>,</p>
                  <p><span className="code-muted">04</span> &nbsp; learning: <span className="code-green">'MERN'</span>,</p>
                  <p><span className="code-muted">05</span> &nbsp; mindset: <span className="code-green">'Always grow'</span></p>
                  <p><span className="code-muted">06</span> {"}"};</p>
                  <p className="code-cursor"><span className="code-muted">07</span> <span className="code-purple">console</span>.log(<span className="code-green">'Hello world!'</span>);</p>
                </div>
                <div className="profile-card-bottom"><span className="terminal-dot"></span> curious mind.exe <span className="running">● learning</span></div>
              </div>
              <div className="floating-chip chip-react"><span>⚛</span> React.js</div>
              <div className="floating-chip chip-node"><span>⬡</span> Node.js</div>
              <div className="floating-chip chip-mongo"><span>◈</span> MongoDB</div>
              <div className="visual-caption"><span className="caption-line"></span> Learning. Building. Improving.</div>
            </div>
          </div>
          <div className="container hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line"></span><span>01 / 05</span></div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div className="about-label"><p className="eyebrow">A LITTLE ABOUT ME</p><span className="about-symbol" aria-hidden="true">✳</span></div>
            <div className="about-content">
              <SectionHeading eyebrow="ABOUT ME" title={<>Building my skills, <span className="gradient-text">one project at a time.</span></>} />
              <p className="large-copy">I’m pursuing a <strong>BS in Computer Science at Riphah International University, Lahore</strong>, with a CGPA of 3.55. I’m interested in full-stack web development and enjoy learning how ideas become useful digital products.</p>
              <p className="body-copy">My current focus is strengthening my React, JavaScript, Node.js, and database skills while applying my programming foundations to projects. I value clear communication, curiosity, and steady improvement, and I’m eager to gain hands-on experience in a professional development environment.</p>
              <div className="about-facts">
                <div><span className="fact-number">3.55</span><span className="fact-label">CGPA</span></div>
                <div><span className="fact-number">2023–27</span><span className="fact-label">BS COMPUTER SCIENCE</span></div>
                <div><span className="fact-number">Lahore</span><span className="fact-label">PAKISTAN</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <SectionHeading eyebrow="WHAT I WORK WITH" title={<>My technical <span className="gradient-text">toolkit.</span></>} description="Technologies and tools I’ve studied or worked with through coursework and projects." />
            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <article className={`skill-card ${index === 4 ? "skill-card-wide" : ""}`} key={group.title}>
                  <div className="skill-card-heading"><span className="skill-index">0{index + 1}</span><h3>{group.title}</h3></div>
                  <div className="tag-list">{group.skills.map((skill) => <span className="skill-pill" key={skill}>{skill}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="section-heading-row">
              <SectionHeading eyebrow="SELECTED WORK" title={<>Projects & <span className="gradient-text">practice.</span></>} description="A selection of academic and personal projects that reflect my interests in web, mobile, and game development." />
              <span className="projects-count">03 PROJECTS <span>↘</span></span>
            </div>
            <div className="projects-grid">{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div>
            <p className="projects-note"><span>✦</span> Project links are placeholders until you add your real repository or demo URLs.</p>
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="container education-grid">
            <div>
              <SectionHeading eyebrow="MY BACKGROUND" title={<>Education & <span className="gradient-text">learning.</span></>} description="Building a strong foundation through university study, practical projects, and additional training." />
              <article className="education-card">
                <div className="education-mark">RIU</div>
                <div className="education-details">
                  <span className="timeline-date">2023 — 2027</span>
                  <h3>BS Computer Science</h3>
                  <p>Riphah International University</p>
                  <p className="education-location">Lahore, Pakistan</p>
                </div>
                <div className="cgpa"><strong>3.55</strong><span>CGPA</span></div>
              </article>
            </div>
            <div className="certifications">
              <p className="eyebrow">CERTIFICATIONS & TRAINING</p>
              <div className="cert-list">
                {certifications.map(([year, title]) => <div className="cert-item" key={`${year}-${title}`}><span className="cert-year">{year}</span><span className="cert-bullet"></span><p>{title}</p></div>)}
              </div>
              <p className="cert-note">Add certificate links or issuing organizations where available to help recruiters verify credentials.</p>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-glow"></div>
          <div className="container contact-container">
            <p className="eyebrow">LET’S CONNECT</p>
            <h2>Ready to learn, <span className="gradient-text">build, and contribute.</span></h2>
            <p className="contact-intro">I’m interested in MERN Stack internships, junior developer roles, and entry-level software development opportunities. If you’re looking for a motivated learner who is ready to grow and contribute, I’d be happy to connect.</p>
            <div className="contact-grid">
              <a className="contact-card" href={`mailto:${profile.email}`}><span className="contact-icon">✉</span><span className="contact-meta">EMAIL ME</span><strong>{profile.email}</strong><span className="contact-arrow"><Arrow /></span></a>
              <a className="contact-card" href={`tel:${profile.phone.replaceAll(" ", "")}`}><span className="contact-icon">⌕</span><span className="contact-meta">CALL ME</span><strong>{profile.phone}</strong><span className="contact-arrow"><Arrow /></span></a>
              <a className="contact-card" href={profile.linkedin} target="_blank" rel="noreferrer"><span className="contact-icon">in</span><span className="contact-meta">CONNECT ON</span><strong>LinkedIn Profile</strong><span className="contact-arrow"><Arrow /></span></a>
            </div>
            <p className="location-line"><span>⌖</span> {profile.location}</p>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <a className="brand" href="#home"><span className="brand-mark">S<span>.</span></span><span>Sawera Nadeem</span></a>
          <p>Designed with purpose. Built with React.</p>
          <a className="back-top" href="#home">Back to top ↑</a>
          <span className="copyright">© {new Date().getFullYear()} Sawera Nadeem</span>
        </div>
      </footer>
    </>
  );
}