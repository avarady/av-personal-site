import React from "react";
import "../css/projects.css";

export interface IProjectItem {
  title: string;
  subtitle?: string;
  imageSrc: string;
  link?: string;
  description: any;
}

const ProjectCard = ({ content } : { content: IProjectItem }) => {
  return (
    <div className="card-wrapper">
      <div className="card-inner">
        <img className="card-img" src={content.imageSrc} alt="" />
      </div>
      <div className="card-banner">
        <div className="card-banner-header p-3">
          {content.title}
        </div>
        <div className="card-banner-content px-4">
          {content.subtitle && (
            <div className="card-subtitle">
              {content.subtitle}
            </div>
          )}
          {content.description}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
