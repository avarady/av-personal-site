import React from "react";
import Header from "../components/Header";
import TimelineSection from "../components/TimelineSection";
import ResumeCard from "../components/ResumeCard";
//import AccordionGroup from "../components/AccordionGroup";
import { workHistory } from "../content/workHistory";
import { educationHistory } from "../content/educationHistory";
//import { softSkills, hardSkills } from "../content/skills";

const Resume = () => {
  return (
    <div>
      <Header/>
      <div className="container column-wrapper">
        <div className="column">
          <ResumeCard title="Profile">
            Experienced full-stack developer with 8+ years of expertise in a wide array of languages and frameworks. Known for rapid delivery of high-quality, efficient code, emphasizing algorithm optimization and robust error handling. Highly proficient in relational databases, normalization, and advanced querying techniques. Quick learner, passionate about innovative problem-solving and delivering top-tier solutions.
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
            {/*<i>Click to expand</i>
            <AccordionGroup content={hardSkills} suffix="hard" />*/}
            <h5>Languages & Frameworks</h5>
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>C++</li>
              <li>C#</li>
              <li>PHP</li>
              <li>HTML + CSS</li>
              <li>Bootstrap</li>
              <li>
                JS-Related:
                <ul>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>jQuery</li>
                  <li>ReactJS</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                </ul>
              </li>
              <li>Django REST Framework</li>
              <li>.NET Core & .NET Framework</li>
              <li>
                SQL:
                <ul>
                  <li>T-SQL</li>
                  <li>PostgreSQL</li>
                  <li>MySQL</li>
                  <li>SQLite</li>
                </ul>
              </li>
            </ul>
            <h5>Processes & Concepts</h5>
            <ul>
              <li>DevOps + CI/CD</li>
              <li>Git / Version Control</li>
              <li>Agile / Scrum</li>
              <li>Software Development Life Cycle (SDLC)</li>
              <li>Object-Oriented Programming (OOP)</li>
              <li>Relational Databases & Normalization</li>
              <li>Full Stack Development</li>
            </ul>
            <h5>Software & OS</h5>
            <ul className="mb-0">
              <li>Visual Studio</li>
              <li>VS Code</li>
              <li>Unity</li>
              <li>Postman</li>
              <li>SQL Server Management Studio (SSMS)</li>
              <li>pgAdmin</li>
              <li>Microsoft Office (Word, Excel, PowerPoint, OneNote, Teams)</li>
              <li>Adobe CC (Photoshop, Illustrator, Lightroom, Animate, Acrobat)</li>
              <li>Autodesk Maya</li>
              <li>Windows</li>
              <li>Linux</li>
            </ul>
          </ResumeCard>
        </div>
        <div className="column">
          <ResumeCard title="Experience">
            <TimelineSection content={workHistory}/>
          </ResumeCard>
          <ResumeCard title="Education">
            <TimelineSection content={educationHistory}/>
          </ResumeCard>
        </div>
      </div>
    </div>
  );
}

export default Resume;
