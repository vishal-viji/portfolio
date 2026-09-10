import React from 'react';
import '../Styles/Hero.css';
import heroBg from '../assets/backgrounds/hero-bg.jpeg';

function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(${heroBg})`,
      }}
    >
      <h1>Hi, I’m <span>Vishal</span></h1>
      <h2>Full Stack Developer | React Developer | MERN Stack Developer</h2>
      <p className='heroclass'>I build responsive web applications using React, Node.js, and MongoDB.</p>
      <div className="hero-buttons">
        <a href="#projects" className="btn">View My Work</a>
        <a href="#contact" className="btn secondary">Contact Me</a>
      </div>
    </section>
  );
}

export default Hero;