import React from 'react';
import '../Styles/Projects.css';

function Projects() {
  const projects = [
    {
      title: "Social Media App",
      description: "Users can create profiles, share posts with images, like and comment on posts, and chat with other users in real time.",
      tech: "Node.js, Express, MongoDB, React",
      link: "https://social-media-delta-inky.vercel.app",
      sourceCode: "https://github.com/vishal-viji/Social-media",
    },
    {
      title: "E-commerce Website",
      description: "Users can search and filter products, view detailed product pages, add items to a cart, and simulate checkout using data pulled from an external product API.",
      tech: "React, Node.js, API Integration",
      link: "https://ecomerce-guvi.netlify.app",
      sourceCode: "https://github.com/vishal-viji/Ecommerce-2",
    },
    {
      title: "Youtube Clone",
      description: "Users can search for videos, watch them in an embedded player, and browse related video suggestions similar to the real YouTube experience.",
      tech: "Node.js, Express, MySQL, React",
      link: "https://y-tubeclon.netlify.app",
      sourceCode: "https://github.com/vishal-viji/Youtube-Clone",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p><strong>Tech Stack:</strong> {p.tech}</p>
            <div className="project-links">
              <a href={p.link} target="_blank" rel="noreferrer">Live Demo</a>
              {" | "}
              <a href={p.sourceCode} target="_blank" rel="noreferrer">Source Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;