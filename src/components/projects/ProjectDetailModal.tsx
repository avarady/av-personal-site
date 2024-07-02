import React from "react";
import "../../css/projectDetail.css";
import { IProjectItem } from "../../content/projects";
import EmblaCarousel from "../EmblaCarousel";

const ProjectDetailModal = ({
  content,
}: {
  content: IProjectItem | null | undefined;
}) => {
  return content ? (
    <div className="h-100 overflow-y-scroll pb-5">
      <div className="mt-4 detail-header">Overview</div>
      <div className="mt-2 detail-inner">{content.description}</div>
      <div className="mt-4 detail-header">Skills Used</div>
      <div className="detail-skills mt-2 detail-inner d-flex flex-wrap gap-2 align-items-center justify-content-center">
        {content.skills.front?.map((skill) => (
          <span className="skill-bubble skill-bubble-front">{skill}</span>
        ))}
        {content.skills.back?.map((skill) => (
          <span className="skill-bubble skill-bubble-back">{skill}</span>
        ))}
        {content.skills.other?.map((skill) => (
          <span className="skill-bubble skill-bubble-other">{skill}</span>
        ))}
      </div>
      <div className="mt-4 gallery">
        <EmblaCarousel slides={content.images} />
      </div>
      <div className="mt-4 mb-2 detail-header">Personal Achievements</div>
      {content.achievements.map((item) => (
        <div className="achievement-item detail-inner">
          <div className="achievement-title">{item.title}</div>
          <div className="mt-2">{item.description}</div>
        </div>
      ))}
    </div>
  ) : null;
};

export default ProjectDetailModal;
