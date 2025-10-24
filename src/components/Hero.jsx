import React from 'react';
import '../Styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <h1>Hi, I’m <span>Vishal</span>👋</h1>
      <h2>Full Stack Developer | Node.js Enthusiast |Reactr developer</h2>
      <p>I build responsive web applications using React, Node.js, and MongoDB.</p>
      <div className="hero-buttons">
        <a href="#projects" className="btn">View My Work</a>
        <a href="#contact" className="btn secondary">Contact Me</a>
      </div>
    </section>
  );
}

export default Hero;
