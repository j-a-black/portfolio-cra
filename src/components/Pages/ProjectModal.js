import React from "react";

import "./ProjectModal.scss";

const ProjectModal = ({ project, index }) => {
  return (
    <div key={project.title}>
      <h2>{project.title}</h2>
      <a
        className="project-link"
        href={project.href}
        target="_blank"
        rel="noreferrer"
      >
        View Website
      </a>
      <a
        className="project-link"
        href={project.github}
        target="_blank"
        rel="noreferrer"
      >
        View Code Repository
      </a>
      <div>
        <img src={project.backgroundImage} alt={project.title} />
      </div>
      <div>
        {project.content.map((item, index) => (
          <React.Fragment key={index}>{item}</React.Fragment>
        ))}
        {/* <h3>{project.h2}</h3>
        {project.p2.map((item, index) => (
          <React.Fragment key={index}>{item}</React.Fragment>
        ))} */}
      </div>
    </div>
  );
};

export default ProjectModal;

// className="background-pic"
//         style={{ backgroundImage: `url(${project.backgroundImage})` }}
