import React from "react";
import "../../css/timeline.css";

export interface ITimelineItem {
  imageSrc?: string;
  link?: string;
  title: string;
  subtitle: string;
  date: string;
  description?: string;
  listItems?: string[];
}

const TimelineSection = ({ content }: { content: ITimelineItem[] }) => {
  return (
    <div className="">
      {content.map((item: ITimelineItem, index: number) => {
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
                  <div className="timeline-subtitle">{item.subtitle}</div>
                  <div className="timeline-date">{item.date}</div>
                </div>
              </div>
            </div>
            <div className="timeline-description mt-2">{item.description}</div>
            <div className="timeline-list mt-2">
              <ul>
                {item.listItems &&
                  item.listItems.map((listItem: string, listIndex: number) => {
                    return (
                      <li
                        className="mt-2"
                        key={"item-" + index + "-listItem-" + listIndex}
                      >
                        {listItem}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TimelineSection;
