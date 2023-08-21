import React from "react";
import "./Header.css";
import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";
import { DrawerBox } from "./DrawerBox";

export const Header = () => {
  return (
    <div className="main-header" >
      <div>
        <div className="repository-back">
          <KeyboardBackspaceSharpIcon className="icon"
          />
          Repository List
        </div>
        <h3>Peter Petrino</h3>
        <p>Bigham Jewelers </p>
      </div>
      <div className="repository-back">
        <DrawerBox />
        <div className="repository-back-cen">Next</div>
      </div>
    </div>
  );
};
