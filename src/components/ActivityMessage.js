import React from "react";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import edgecrmcontent from "../images/edgecrmcontent.png";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./ActivityArea.css";
import "./ActivityLogs.css";
import { ActivityTask } from "./ActivityTask";
import { ActivityAll } from "./ActivityAll";
import { ActivityMeet } from "./ActivityMeet";
import { ActivityCall } from "./ActivityCall";

const TabNew = styled((props) => <Tab disableRipple {...props} />)(
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
      color: " orange",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "orange",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#fff",
    },
    "& .MuiTabs-indicator": {
      borderBottom: "none",
      backgroundColor: "transparent",
    },
  })
);

export const ActivityMessage = () => {
  const [value, setValue] = React.useState("4");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <TabNew
            style={{
              marginRight: "10px",
              marginLeft: "10px",
            }}
            label="All"
            value="4"
          />
          <TabNew style={{ marginRight: "10px" }} label="Meeting" value="5" />
          <TabNew style={{ marginRight: "10px" }} label="Call" value="6" />
          <TabNew style={{ marginRight: "10px" }} label="Task" value="7" />
          <TabNew style={{ marginRight: "10px" }} label="Update" value="8" />
          <TabNew style={{ marginRight: "10px" }} label="Email" value="9" />
        </TabList>
        <TabPanel style={{ padding: "0", marginLeft: "12px" }} value="4">
          <h4 className="past-heading">Past</h4>
          <ActivityAll />
          <button
            variant="text"
            className="showmore-btn" style={{ "color": "#1946a1", }}
            type="link"
          >
            Show More
          </button>
        </TabPanel>
        <TabPanel style={{ padding: "0", marginLeft: "12px" }} value="5">
          <h4 className="past-heading">Past</h4>
          <ActivityMeet />
        </TabPanel>
        <TabPanel style={{ padding: "0", marginLeft: "12px" }} value="6">
          <h4 className="past-heading">Past</h4>
          <ActivityCall />
        </TabPanel>
        <TabPanel style={{ padding: "0", marginLeft: "12px" }} value="7">
          <h4 className="past-heading">Past</h4>
          <ActivityTask />
        </TabPanel>
        <TabPanel value="8">
          <img
            src={edgecrmcontent}
            alt="edgecrmcontent"
            className="edge-content-img"
          />
        </TabPanel>
        <TabPanel value="9">
          <img
            src={edgecrmcontent}
            alt="edgecrmcontent"
            className="edge-content-img"
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
};
