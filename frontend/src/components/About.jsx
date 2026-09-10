import React from "react";
import "../Styles/About.css";
import profilePhoto from "../assets/vishal.png";
import aboutBg from "../assets/backgrounds/about-bg.jpeg";
import useScrollReveal from "../hooks/useScrollReveal";


function About() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      id="about"
      ref={ref}
      className={`about reveal ${isVisible ? "visible" : ""}`}
      style={{
        backgroundImage: `linear-gradient(rgba(13,17,23,0.88), rgba(13,17,23,0.88)), url(${aboutBg})`,
      }}
    >
      <h2>About Me</h2>
      <img src={profilePhoto} alt="Vishal" className="about-photo" />
      <p className="about-text">
        Hi! I’m Vishal, a passionate Full Stack Developer and a B.Sc. Statistics
        undergraduate at PSG College of Arts & Science, Coimbatore. I love
        transforming ideas into interactive, user-friendly web applications. My
        journey into coding started with curiosity about how websites and apps
        work — and now, I enjoy building them using modern web technologies. I
        specialize in JavaScript, Node.js, React, and Express, and I have
        experience working with MongoDB and REST APIs. I’ve also built projects
        like a Social Media and a Movie Search Website, where I focused
        on seamless UI and efficient backend logic. Beyond coding, I’m
        analytical and data-driven — my statistics background helps me think
        logically and make informed decisions while solving complex problems. I
        enjoy learning new technologies and constantly improving my skills to
        stay updated in the fast-paced tech world. My goal is to become a
        skilled full stack developer who builds scalable, creative, and
        impactful applications that make a real difference.{" "}
      </p>
      <p>
        I love turning ideas into interactive, functional, and visually
        appealing applications.
      </p>
      
    </section>
  );
}

export default About;