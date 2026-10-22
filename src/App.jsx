
import { useState } from "react";
import { motion } from "motion/react";
import "./App.css";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git & GitHub",
  "C++",
  "Python",
];

const projects = [
  {
    number: "01",
    title: "CareScout",
    category: "Final Year Project · MERN Stack",
    description:
      "A platform concept to help parents discover schools, daycare centers, and caretakers in one place.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "",
  },
  {
    number: "02",
    title: "Student Analytics",
    category: "Data Analysis · Python",
    description:
      "A student performance analysis project exploring academic data and identifying useful patterns.",
    tech: ["Python", "Pandas", "Machine Learning"],
    link: "",
  },
  {
    number: "03",
    title: "Personal Portfolio",
    category: "Frontend Development",
    description:
      "A responsive personal website to present my skills, projects, and journey as a developer.",
    tech: ["React", "CSS", "Motion"],
    link: "",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="portfolio">
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <header className="navbar">
        <a className="logo" href="#home" onClick={closeMenu}>
          SN<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}
          <a className="nav-resume" href="#contact" onClick={closeMenu}>
            Let's Talk <span>↗</span>
          </a>
        </nav>
      </header>

      <section className="hero section-container" id="home">
        <div className="hero-content">
          <motion.div
            className="availability"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="availability-dot" />
            OPEN TO INTERNSHIP OPPORTUNITIES
          </motion.div>

          <motion.p
            className="eyebrow hero-eyebrow"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            HELLO, I'M
          </motion.p>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 45, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
          >
            Sawera
            <br />
            <span className="name-highlight">
              Nadeem<span className="name-dot">.</span>
            </span>
          </motion.h1>

          <motion.div
            className="hero-role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="role-prefix">I'm a </span>
            <span className="typing-text">MERN Stack Developer</span>
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            I create modern, responsive web experiences and enjoy turning ideas
            into real projects. I'm building my skills in React, Node.js, and
            full-stack development, one project at a time.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.15 }}
          >
            <motion.a
              href="#projects"
              className="button button-primary"
              whileHover={{ scale: 1.04, y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore My Work <span>↗</span>
            </motion.a>

            <motion.a
              href="#contact"
              className="button button-secondary"
              whileHover={{ scale: 1.04, y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <span className="social-divider">/</span>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <motion.div
            className="profile-card"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="card-top">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="card-file">sawera.jsx</span>
              <span className="card-menu">•••</span>
            </div>

            <div className="code-area">
              <p>
                <span className="code-purple">const</span>{" "}
                <span className="code-blue">developer</span> = {"{"}
              </p>
              <p className="code-indent">
                <span className="code-pink">name</span>:{" "}
                <span className="code-green">"Sawera Nadeem"</span>,
              </p>
              <p className="code-indent">
                <span className="code-pink">role</span>:{" "}
                <span className="code-green">"Web Developer"</span>,
              </p>
              <p className="code-indent">
                <span className="code-pink">passion</span>:{" "}
                <span className="code-green">"Building"</span>,
              </p>
              <p className="code-indent">
                <span className="code-pink">learning</span>: [
              </p>
              <p className="code-indent code-more">
                <span className="code-yellow">"React"</span>,
              </p>
              <p className="code-indent code-more">
                <span className="code-yellow">"Node.js"</span>
              </p>
              <p className="code-indent">],</p>
              <p>{"}"}</p>
              <div className="code-status">
                <span className="availability-dot" /> Always learning
              </div>
            </div>
          </motion.div>

          <motion.div
            className="floating-badge badge-react"
            animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="badge-symbol">⚛</span>
            React.js
          </motion.div>

          <motion.div
            className="floating-badge badge-code"
            animate={{ y: [0, 8, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
          >
            <span className="badge-symbol">&lt;/&gt;</span>
            Clean Code
          </motion.div>

          <div className="visual-caption">
            <span className="caption-line" />
            <span>TURNING IDEAS INTO CODE</span>
          </div>
        </motion.div>

        <a className="scroll-indicator" href="#about">
          <span className="scroll-line" />
          SCROLL TO EXPLORE
        </a>
      </section>

      <section className="section-container about-section" id="about">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="eyebrow">01 / ABOUT ME</p>
          <h2 className="section-title">
            Curious mind.
            <br />
            <span className="gradient-text">Creative developer.</span>
          </h2>
          <p className="section-description">
            I'm a Computer Science student passionate about web development and
            building useful digital experiences. I enjoy learning new
            technologies, solving problems, and improving my projects through
            practice.
          </p>
          <p className="section-description">
            My current focus is strengthening my React and MERN Stack skills
            while preparing for an internship where I can learn from a team and
            contribute to real-world projects.
          </p>
        </motion.div>

        <motion.div
          className="about-stat-card"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="stat-icon">✳</span>
          <h3>Always learning</h3>
          <p>Growing through projects, practice, and new challenges.</p>
          <div className="stat-tags">
            <span>Problem solving</span>
            <span>Teamwork</span>
            <span>Curiosity</span>
          </div>
        </motion.div>
      </section>

      <section className="section-container skills-section" id="skills">
        <motion.div
          className="section-heading"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="eyebrow">02 / MY TOOLKIT</p>
          <h2 className="section-title">
            Skills I'm <span className="gradient-text">building with.</span>
          </h2>
          <p className="section-description">
            Technologies I use in my learning and development projects.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={skill}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <span className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="skill-name">{skill}</span>
              <span className="skill-arrow">↗</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-container projects-section" id="projects">
        <motion.div
          className="section-heading"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="eyebrow">03 / SELECTED WORK</p>
          <h2 className="section-title">
            Projects with <span className="gradient-text">purpose.</span>
          </h2>
          <p className="section-description">
            A selection of projects and learning work. Open a project link once
            you have added its live demo or repository URL.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className={`project-card project-card-${index + 1}`}
              key={project.number}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -8 }}
            >
              <div className="project-art">
                <span className="project-art-number">{project.number}</span>
                <span className="project-art-symbol">
                  {index === 0 ? "⌘" : index === 1 ? "◈" : "✳"}
                </span>
                <span className="project-art-label">PROJECT / 0{index + 1}</span>
              </div>

              <div className="project-content">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {project.link ? (
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project ↗
                  </a>
                ) : (
                  <span className="project-link project-link-muted">
                    Add project URL in App.jsx ↗
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-container contact-section" id="contact">
        <motion.div
          className="contact-card"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="eyebrow">04 / LET'S CONNECT</p>
          <h2 className="section-title">
            Have an opportunity?
            <br />
            <span className="gradient-text">Let's talk.</span>
          </h2>
          <p className="section-description">
            I'm interested in MERN Stack internships and junior developer
            opportunities. I'd love to connect, learn, and build something
            meaningful.
          </p>

          <motion.a
            className="button button-primary contact-button"
            href="mailto:YOUR_EMAIL@example.com"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            Send Me an Email <span>↗</span>
          </motion.a>

          <p className="contact-note">
            Replace YOUR_EMAIL@example.com with your real email address.
          </p>
        </motion.div>
      </section>

      <footer className="footer section-container">
        <a className="logo" href="#home">
          SN<span>.</span>
        </a>
        <p>Designed & built with React by Sawera Nadeem.</p>
        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </footer>
    </main>
  );
}

export default App;
