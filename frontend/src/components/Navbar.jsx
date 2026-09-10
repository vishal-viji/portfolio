import React, { useState } from 'react';
import '../Styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <h1 className="logo">Vishal</h1>

      <button
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        <li className="mobile-resume">
          <a
            href="/Vishal-Resume.pdf"
            download="Vishal-Resume.pdf"
            className="resume-btn"
            onClick={closeMenu}
          >
            Download Resume
          </a>
        </li>
      </ul>

      <a
        href="/Vishal-Resume.pdf"
        download="Vishal-Resume.pdf"
        className="resume-btn desktop-resume"
      >
        Download Resume
      </a>
    </nav>
  );
}

export default Navbar;