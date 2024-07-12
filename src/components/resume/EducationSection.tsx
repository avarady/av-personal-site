import React from "react";
import "../../css/timeline.css";
import AccordionGroup from "../AccordionGroup";

export interface ICourse {
  number: string;
  title: string;
  link?: string;
}

export interface ICourseSection {
  title: string;
  courses: ICourse[];
}

export interface IEducationItem {
  imageSrc?: string;
  link?: string;
  title: string;
  subtitle: string;
  date: string;
  gpa: number;
  suffix: string;
  description: string;
  courses: ICourseSection[];
}

const EducationSection = ({ content }: { content: IEducationItem[] }) => {
  return (
    <div className="">
      {content.map((item: IEducationItem, index: number) => {
        return (
          <div className="mt-3">
            <div className="d-flex align-items-center">
              {item.imageSrc && item.link ? (
                <a href={item.link} target="_blank" rel="noreferrer">
                  <img
                    className="timeline-img img-link"
                    src={item.imageSrc}
                    alt="logo"
                  />
                </a>
              ) : (
                <img className="timeline-img" src={item.imageSrc} alt="logo" />
              )}
              <div className="w-100">
                <div className="timeline-title">
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noreferrer">
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </div>
                <div className="d-flex flex-wrap justify-content-between w-100">
                  <div className="timeline-subtitle">{item.subtitle} (GPA: {item.gpa})</div>
                  <div className="timeline-date">{item.date}</div>
                </div>
              </div>
            </div>
            <div className="timeline-description mt-2">{item.description}</div>
            <div className="mt-2">Course List (click to view):</div>
            <div className="timeline-list mt-2">
              <AccordionGroup
                suffix={item.suffix}
                content={item.courses.map((section: ICourseSection) => {
                  return ({
                    title: section.title,
                    inner: (<ul>
                      {section.courses.map((course: ICourse) => {
                        if(course.link){
                          return (
                            <li><a href={course.link} target="_blank" rel="noreferrer">{course.number}</a>: {course.title}</li>
                          )
                        }
                        return (
                          <li>{course.number}: {course.title}</li>
                        )
                      })}
                    </ul>),
                  })
                })}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EducationSection;
