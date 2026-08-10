import React from "react";
import "../Styles/Skills.css";
import reactLogo from "../assets/react.png";
import nodeLogo from "../assets/node.png";
import expressLogo from "../assets/express.png";
import mongoLogo from "../assets/mongodb.png";
import sqlLogo from "../assets/sql.png";
import mysqlLogo from "../assets/mysql.png";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/javascript.png";
import bootstrapLogo from "../assets/bootstrap.png";
import reduxLogo from "../assets/redux.png";
import pythonLogo from "../assets/py.png";
import gitLogo from "../assets/git.png";
import githubLogo from "../assets/github.png";
import postmanLogo from "../assets/postman.png";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul className="skills-list" align="center"></ul>

      <div className="skills-logos">
        <div className="skill-item">
          <img src={htmlLogo} alt="HTML" />
          <p>HTML</p>
        </div>

        <div className="skill-item">
          <img src={cssLogo} alt="CSS" />
          <p>CSS</p>
        </div>

        <div className="skill-item">
          <img src={jsLogo} alt="JavaScript" />
          <p>JavaScript</p>
        </div>

        <div className="skill-item">
          <img src={reactLogo} alt="React" />
          <p>React</p>
        </div>

        <div className="skill-item">
          <img src={nodeLogo} alt="Node.js" />
          <p>Node.js</p>
        </div>

        <div className="skill-item">
          <img src={expressLogo} alt="Express" />
          <p>Express</p>
        </div>

        <div className="skill-item">
          <img src={sqlLogo} alt="SQL" />
          <p>SQL</p>
        </div>

        <div className="skill-item">
          <img src={mysqlLogo} alt="MySQL" />
          <p>MySQL</p>
        </div>

        <div className="skill-item">
          <img src={mongoLogo} alt="MongoDB" />
          <p>MongoDB</p>
        </div>

        <div className="skill-item">
          <img src={reduxLogo} alt="Redux" />
          <p>Redux</p>
        </div>

        <div className="skill-item">
          <img src={pythonLogo} alt="Python" />
          <p>Python</p>
        </div>

        <div className="skill-item">
          <img src={bootstrapLogo} alt="Bootstrap" />
          <p>Bootstrap</p>
        </div>

        <div className="skill-item">
          <img src={gitLogo} alt="Git" />
          <p>Git</p>
        </div>

        <div className="skill-item">
          <img src={githubLogo} alt="GitHub" />
          <p>GitHub</p>
        </div>

        <div className="skill-item">
          <img src={postmanLogo} alt="Postman" />
          <p>Postman</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
