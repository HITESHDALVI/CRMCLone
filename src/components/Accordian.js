import React from "react";
import "./Accordian.css";
import "bootstrap";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { AccordianItem } from "./AccordianItem";
import { FirstItem } from "./FirstItem";

export const Accordian = () => {
  return (
    <div className="accordian ">
      <div className="accordian-1-item">
        <div className="acc-1">
          <div className="accordian-name">Contact information</div>
          <KeyboardArrowDownOutlinedIcon
            style={{ fontSize: "29px", fontWeight: "700" }}
          />
        </div>
        <div style={{ boxSizing: "border-box" }}>
          <FirstItem />
        </div>
      </div>
      <AccordianItem />
    </div>
  );
};
