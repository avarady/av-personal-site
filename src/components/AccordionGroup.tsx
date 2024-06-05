import React from "react";
import "../css/accordion.css";

export interface IAccordionItem {
    title: string;
    inner: any;
}

const AccordionGroup = ({ content, suffix = "1" } : { content: IAccordionItem[]; suffix?: string; }) => {
    return (
        <div className={"panel-group"} id={"accordion-" + suffix}>
            {content.map((item: IAccordionItem, index: number) => {
                return (
                    <div className="panel panel-default mt-2">
                        <div className="panel-heading-wrapper">
                            <a data-toggle="collapse" href={"#collapse-" + suffix + "-" + index}>
                                {item.title}
                            </a>
                        </div>
                        <div id={"collapse-" + suffix + "-" + index} data-parent={"#accordion-" + suffix} className="panel-collapse collapse in">
                            <div className="panel-collapse-inner">
                                {item.inner}
                            </div>
                        </div>
                    </div>
                );
            })}
      </div> 
    );
}

export default AccordionGroup