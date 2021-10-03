import React from "react";

import ProjectModal from "./ProjectModal";
import "./ProjectPage.scss";

const ProjectPage = ({ selected, onSelectedChange, projects, active }) => {
  return (
    <div className="page-container flex-col-center">
      <div className="navbar-projects">
        {projects.map((project) => (
          <span
            key={project.title}
            onClick={onSelectedChange}
            className={active && selected === project.title ? "active" : ""}
          >
            {project.title}
          </span>
        ))}
      </div>
      <div className="project-window">
        {projects.map((project, index) => {
          return selected === project.title ? (
            <ProjectModal key={project.title} project={project} index={index} />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default ProjectPage;
