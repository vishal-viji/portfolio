import React from "react";
import "../Styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Social Media App",
      description:
        "A full-stack social platform where people can build a profile, post photos, and jump into real-time conversations with others.I built the like/comment system and chat feature from scratch, focusing on making the whole thing feel instant and responsive.",
      tech: "Node.js, Express, MongoDB, React",
      link: "https://social-media-delta-inky.vercel.app",
      sourceCode: "https://github.com/vishal-viji/Social-media",
    },
    {
      title: "E-commerce Website",
      description:
        "A shopping site that pulls live product data from an external API, so browsing, filtering, and checking out feels like using a real store rather than a static demo. I spent a lot of time on the cart logic and making sure filtering products by category or price actually feels smooth.",
      tech: "React, python, ",
      tech: "React, python, django, MySQL",
      link: "https://ecomerce-guvi.netlify.app",
      sourceCode: "https://github.com/vishal-viji/Ecommerce-2",
    },
    {
      title: "Youtube Clone",
      description:
        "My take on rebuilding YouTube's core experience — search, an embedded video player, and a related-videos feed that actually makes sense. The tricky part was getting the MySQL queries efficient enough that suggestions load fast instead of feeling like an afterthought.",
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
            <p>
              <strong>Tech Stack:</strong> {p.tech}
            </p>
            <div className="project-links">
              <a href={p.link} target="_blank" rel="noreferrer">
                Live Demo
              </a>
              {" | "}
              <a href={p.sourceCode} target="_blank" rel="noreferrer">
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
