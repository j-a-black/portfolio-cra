import React from "react";

import ProjectModal from "../Pages/ProjectModal";

import "./ProjectMenu.scss";

const ProjectMenu = ({ selected, onSelectedChange, projects }) => {
  return (
    <div>
      <div className="navbar-projects">
        {projects.map((project) => (
          <span
            key={project.title}
            onClick={(e) => onSelectedChange(e.target.innerText)}
          >
            {project.title}
          </span>
        ))}
      </div>
      <section>
        <div className="project-info">
          {projects.map((project) => {
            return selected === project.title ? (
              <ProjectModal key={project.description} project={project} />
            ) : null;
          })}
        </div>
      </section>
    </div>
  );
};

export default ProjectMenu;
