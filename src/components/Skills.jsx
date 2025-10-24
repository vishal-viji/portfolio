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
      <ul className="skills-list" align="center">
        <li>React.js</li>
        <li>Node.js & Express</li>
        <li>MongoDB & SQL</li>
        <li>HTML, CSS, JavaScript</li>
        <li>Git, GitHub, Postman</li>
      </ul>

      <div className="skills-logos">
        <img src={htmlLogo} alt="HTML" />
        <img src={cssLogo} alt="CSS" />
        <img src={jsLogo} alt="JavaScript" />
        <img src={reactLogo} alt="React" />
        <img src={nodeLogo} alt="Node.js" />
        <img src={expressLogo} alt="Express" />
        <img src={sqlLogo} alt="SQL" />
        <img src={mysqlLogo} alt="MySQL" />
        <img src={mongoLogo} alt="MongoDB" />
        <img src={reduxLogo} alt="Redux" />
        <img src={pythonLogo} alt="Python" />
        <img src={bootstrapLogo} alt="Bootstrap" />
        <img src={gitLogo} alt="Git" />
        <img src={githubLogo} alt="GitHub" />
        <img src={postmanLogo} alt="Postman" />
      </div>
    </section>
  );
}

export default Skills;  
