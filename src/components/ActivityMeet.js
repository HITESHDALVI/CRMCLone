import React from "react";
import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
import "./ActivityArea.css";
import GroupsIcon from "@mui/icons-material/Groups";
import { ChangeButtonNew } from "./ChangeButtonNew";
import { DetailCard } from "./DetailCard";
import "./DetailsCard.css";

export const ActivityMeet = () => {
  return (
    <div className="activity-call">
      <GroupsIcon className="material-icons" />
      <div>
        <Box className="card-active">
          <div className="card-active"><DetailCard key="1" value="'adhgjgjgcgj gjg jg jg j g j gj gj gjg jg j'" /></div>
        </Box>
        <ChangeButtonNew />
      </div>
    </div>
  );
};
