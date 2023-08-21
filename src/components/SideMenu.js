import React from "react";
import "./SideMenu.css";
import manImg from "../images/manImg.jpg";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import CardTravelOutlinedIcon from "@mui/icons-material/CardTravelOutlined";
import PersonPinOutlinedIcon from "@mui/icons-material/PersonPinOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import TungstenOutlinedIcon from "@mui/icons-material/TungstenOutlined";
import InsightsSharpIcon from "@mui/icons-material/InsightsSharp";




export const SideMenu = () => {
  const icons = [<DashboardOutlinedIcon />, <DateRangeOutlinedIcon />, <CardTravelOutlinedIcon />, <PersonPinOutlinedIcon />, <LocalLibraryOutlinedIcon />, <CampaignOutlinedIcon />, <SupportAgentOutlinedIcon />, <GavelOutlinedIcon />, <TungstenOutlinedIcon />, <InsightsSharpIcon />];


  return (
    <ul className="side-menu-list">
      <li className="sidemenu-items">
        <img className="sidemenu-img" src={manImg} alt="manImg" />
      </li>
      {
        icons.map((ele) => (
          <li className="sidemenu-items">{ele}</li>
        ))
      }

    </ul>
  );
};
