import React from "react";
import "./ActivityArea.css";
import { AllCard } from "./AllCard";
import { PhoneIcon } from "./PhoneIcon";
import { ChangeButtonNew } from "./ChangeButtonNew";

export const ActivityCall = () => {
  const elements = [
    "'Call to check RESULT'",
    "'JJASDJLAJSLDALSJL JLJL JL JLJL JL L JL J'",
    " 'UDUSAOUOUOUO UOU OUO UO U OUO UO UO'",
    " 'adhgjgjgcgj gjg jg jg j g j gj gj gjg jg j'",
  ];

  return elements.map((value, index) => {
    return (
      <div className="activity-call">
        <PhoneIcon />
        <div>
          <AllCard key={index} value={value} />
          <ChangeButtonNew />
        </div>
      </div>
    );
  });
};
