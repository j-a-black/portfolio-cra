import React from "react";

import Card from "../Card/Card";

import "./Projects.scss";
import { projects } from "../../data.js";

const Projects = () => {
  return (
    <section className="flex-col-center" id="projects">
      <h2 className="heading-sec">
        <span className="heading-sec__title">PROJECTS</span>
        <span className="heading-sec__sub">Things that I made:</span>
      </h2>
      <div className="projects-content">
        {projects.map((project) => (
          <Card
            key={project.title}
            backgroundImage={project.backgroundImage}
            title={project.title}
            description={project.description}
            href={project.href}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
