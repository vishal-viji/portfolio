import React from 'react';
import '../Styles/Projects.css';

function Projects() {
  const projects = [
    
    {
      title: "Online Bookstore",
      description: "A full-stack bookstore app with authentication and payments.",
      tech: "Node.js, Express, MongoDB, React",
      link: "https://booklibrary-guvi.vercel.app/",
    },
    {
      title: "Weather Dashboard",
      description: "A full-stack bookstore app with authentication and payments.",
      tech: "Node.js, Express, MongoDB, React",
      link: "https://weatherappguvi.vercel.app/",
    },
      {
      title: "Movie Search App",
      description: "A React + Node.js web app to search movies using an external API.",
      tech: "React, Node.js, API Integration",
      link: "https://github.com/vishal/movie-search-app",
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
            <a href={p.link} target="_blank" rel="noreferrer">click  to  redirect</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
