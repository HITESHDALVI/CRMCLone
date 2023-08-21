import React from "react";
import "./MainArea.css";
import { Accordian } from "./Accordian";
import { ContactMenu } from "./ContactMenu";
import { ActivityArea } from "./ActivityArea";

export const MainArea = () => {
  return (
    <div className="main-area">
      <Accordian />
      <div className="main-activity-box">
        <ContactMenu />
        <ActivityArea />
      </div>
    </div>
  );
};
