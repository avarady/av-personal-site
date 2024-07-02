import React, { PropsWithChildren } from "react";
import "../../css/resume.css";

const ResumeCard = (props: PropsWithChildren<{ title: string }>) => {
  return (
    <div className="resume-wrapper">
      <div className="section-title">{props.title}</div>
      <div className="mt-2">{props.children}</div>
    </div>
  );
};

export default ResumeCard;
