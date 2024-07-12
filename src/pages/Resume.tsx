import React from "react";
import Header from "../components/resume/Header";
import WorkHistorySection from "../components/resume/WorkHistorySection";
import ResumeCard from "../components/resume/ResumeCard";
import AccordionGroup from "../components/AccordionGroup";
import { workHistory } from "../content/workHistory";
import { educationHistory } from "../content/educationHistory";
import EducationSection from "../components/resume/EducationSection";
import { softSkills, hardSkills } from "../content/skills";

const Resume = () => {
  return (
    <div>
      <Header />
      <div className="column-wrapper">
        <div className="column">
          <ResumeCard title="Profile">
            Experienced full-stack developer with 8+ years of expertise in a
            wide array of languages and frameworks. Known for rapid delivery of
            high-quality, efficient code, emphasizing algorithm optimization and
            robust error handling. Highly proficient in relational databases,
            normalization, and advanced querying techniques. Quick learner,
            passionate about innovative problem-solving and delivering top-tier
            solutions.
          </ResumeCard>
          <ResumeCard title="Soft Skills">
            {/*<i>Click to expand</i>
            <AccordionGroup content={softSkills} suffix="soft" />*/}
            <ul>
              <li>Problem Solving & Critical Thinking</li>
              <li>Time Management & Organization</li>
              <li>Attention to Detail</li>
              <li>Professional Communication</li>
              <li>Adaptability</li>
              <li>Patience & Resourcefulness</li>
            </ul>
          </ResumeCard>
          <ResumeCard title="Hard Skills">
            <i>Click to expand</i>
            <AccordionGroup content={hardSkills} suffix="hard" />
          </ResumeCard>
          <ResumeCard title="Languages">
            <ul>
              <li>English (native)</li>
              <li>Korean (proficient)</li>
              <li>Spanish (proficient)</li>
            </ul>
          </ResumeCard>
        </div>
        <div className="column">
          <ResumeCard title="Experience">
            <WorkHistorySection content={workHistory} />
          </ResumeCard>
          <ResumeCard title="Education">
            <EducationSection content={educationHistory} />
          </ResumeCard>
        </div>
      </div>
    </div>
  );
};

export default Resume;
