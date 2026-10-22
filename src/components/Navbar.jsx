import { useState } from "react";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Sawera Nadeem home">
          <span className="brand-mark">S<span>.</span></span>
          <span>Sawera Nadeem</span>
        </a>
        <button className="menu-toggle" type="button" aria-label="Toggle navigation menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span></span><span></span><span></span>
        </button>
        <div className={`nav-links ${open ? "nav-links-open" : ""}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let’s talk <span aria-hidden="true">↗</span></a>
        </div>
      </nav>
    </header>
  );
}