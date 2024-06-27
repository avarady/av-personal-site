import React from "react";
import "../css/projects.css";
import { IProjectItem } from "../content/projects";

const ProjectCard = ({ content } : { content: IProjectItem; }) => {

  return (
    <>
      <div className="card-inner">
        <img className="card-img" src={content.images[0].src} alt="" />
      </div>
      <div className="card-banner">
        <div className="p-3">
          {content.title}
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
