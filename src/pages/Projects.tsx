import React from "react";
import ProjectCard, { IProjectItem } from "../components/ProjectCard";
import "../css/projects.css";
import { projects } from "../content/projects";

const Projects = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="project-header">Projects</div>
        <div className="mb-4"><i>More projects and more detailed information coming soon.</i></div>
        <div className="project-wrapper d-flex flex-row flex-wrap align-items-center justify-content-between">
          {projects.map((item: IProjectItem, index: number) => {
            return <ProjectCard content={item} />
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
