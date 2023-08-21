import React from "react";
import "./ActivityArea.css";
import { ChangeButton } from "./ChangeButton";
import { AllCard } from "./AllCard";
import { PhoneIcon } from "./PhoneIcon";
import { ChangeButtonNew } from "./ChangeButtonNew";

export const ActivityAll = () => {
  const elements = [
    "'Call to check RESULT'",
    "'hdhhh hj h hj hj hj hj hkhjkhk jhkhkhkh hkhkhkhk kjh kh kh kh hjk hkh khkhk' ",
    "'JJASDJLAJSLDALSJL JLJL JL JLJL JL L JL J'",
    " 'UDUSAOUOUOUO UOU OUO UO U OUO UO UO'",
    " 'adhgjgjgcgj gjg jg jg j g j gj gj gjg jg j'",
  ];

  return elements.map((value, index) => {
    if (index !== 1) {
      return (
        <div className="activity-call">
          <PhoneIcon />
          <div className="main-div">
            <AllCard key={index} value={value} />
            <ChangeButtonNew />
          </div>
        </div>
      );
    } else {
      return (
        <div className="activity-call">
          <PhoneIcon />
          <div className="main-div">
            <AllCard key={index} value={value} />
            <ChangeButton />
          </div>
        </div>
      );
    }
  });
};
