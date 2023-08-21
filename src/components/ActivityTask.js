import React from "react";
import Box from "@mui/material/Box";
import "./ActivityArea.css";
import "./DetailsCard.css"
import { ChangeButton } from "./ChangeButton";
import { PhoneIcon } from "./PhoneIcon";
import { DetailCard } from "./DetailCard";



export const ActivityTask = () => {
  return (
    <div className="activity-call">
      <PhoneIcon />
      <div>
        <Box className="card-active">
          <div className="card-active"><DetailCard key="1" value="'hdhhh hj h hj hj hj hj hkhjkhk jhkhkhkh hkhkhkhk kjh kh kh kh hjk
            hkh khkhk'"/></div>
        </Box>
        <ChangeButton />
      </div>
    </div>
  );
};
