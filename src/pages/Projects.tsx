import React, { useState } from "react";
import ProjectCard from "../components/projects/ProjectCard";
import "../css/projects.css";
import { IProjectItem, projects } from "../content/projects";
import ProjectDetailModal from "../components/projects/ProjectDetailModal";

const Projects = () => {
  const [detailContent, setDetailContent] = useState<IProjectItem | null>();
  const showDetails = (e: any, item: IProjectItem) => {
    console.log(e);
    setDetailContent(item);
  };
  return (
    <>
      <div className="container mb-5">
        <div className="project-header">Project Highlights</div>
        <div className="project-wrapper d-flex flex-row flex-wrap align-items-center justify-content-between">
          {projects.map((item: IProjectItem, index: number) => {
            return (
              <div
                className="card-wrapper"
                onClick={(e) => showDetails(e, item)}
              >
                <ProjectCard content={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={"blackout" + (detailContent ? " blackout-shown" : "")}
        onClick={() => setDetailContent(null)}
      ></div>
      <div
        className={
          "detail-modal d-flex flex-column" +
          (detailContent ? " detail-modal-shown" : "")
        }
      >
        {detailContent && (
          <>
            <div className="d-flex justify-content-between">
              <div className="detail-title">{detailContent?.title}</div>
              <button
                className="btn btn-x"
                onClick={() => setDetailContent(null)}
              >
                <i className="fa-solid fa-x"></i>
              </button>
            </div>
            <ProjectDetailModal content={detailContent} />
          </>
        )}
      </div>
    </>
  );
};

export default Projects;
