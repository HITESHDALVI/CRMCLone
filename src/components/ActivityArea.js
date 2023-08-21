import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CampignImg from "../images/CampignImg.png";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { ActivityMessage } from "./ActivityMessage";

import { ActivityLogs } from "./ActivityLogs";
const AntTabs = styled(Tabs)({
  width: "100%",
  borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    backgroundColor: "#0238d9",
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.85)",
    fontFamily: ['"Nunito Sans", sans - serif'].join(","),
    "&:hover": {
      color: "#0238d9",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#0238d9",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgb(13, 71, 161)",
    },
  })
);

export const ActivityArea = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box
        sx={{
          width: "999px",
          height: "620px ",
          margin: "10px",
          padding: "10px",
        }}
      >
        <Box sx={{ bgcolor: "#fff", display: "flex", flexDirection: "row" }}>
          <AntTabs
            aria-label="ant example"
            value={value}
            onChange={handleChange}
          >
            <AntTab
              style={{ marginRight: "20px", marginLeft: "20px" }}
              label="Activity"
              value="1"
            />
            <AntTab
              style={{ marginRight: "20px" }}
              label="Campaign Emailers"
              value="2"
            />

            <AntTab style={{ marginRight: "20px" }} label="Logs" value="3" />
          </AntTabs>
        </Box>

        <TabPanel style={{ padding: "0", marginLeft: "12px" }} value="1">
          <ActivityMessage />
        </TabPanel>
        <TabPanel value="2">
          <img
            src={CampignImg}
            alt="edgecrmcontent"
            className="img-css"
          />
        </TabPanel>
        <TabPanel value="3">
          <ActivityLogs />
        </TabPanel>
      </Box>
    </TabContext>
  );
};
