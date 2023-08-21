import React from "react";
import "./ActivityLogs.css";
import Box from "@mui/material/Box";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import AwmImg from "../images/AwmImg.png"


export function ActivityLogs() {

  const content = ["adhgjgjgcgj gjg jg jg j g j gj gj gjg jg j", "adhgjgjgcgj gjg jg jg j g j gj gj gjg jg j", "UDUSAOUOUOUO UOU OUO UO U OUO UO UO", "JJASDJLAJSLDALSJL JLJL JL JLJL JL L JL J"];
  return (
    <div className="navtabsection">
      <div>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <div className="navcard">
            <AssignmentOutlinedIcon className="material-icons" />
            <div>


              <div class="navcard-body">
                <div
                  className="navcard-leftsection"
                >
                  <img
                    className="img-style"
                    alt="Edge Consultant"
                    src={AwmImg}
                  />
                </div>
                <div className="navcard-rightsection">
                  <p className="heading-nav">
                    A Wanda Maximoff<span>02-May-2022 12:53</span>
                  </p>
                  <p className="nav-subtitile">
                    A Wanda Maximoff has updated the call : test
                  </p>
                </div>
              </div>

            </div>
          </div>
          {content.map((ele) =>
            <div className="navcard">
              <AssignmentOutlinedIcon className="material-icons" />
              <div>

                <div class="navcard-body">
                  <div className="navcard-leftsection">
                    <img
                      className="img-style"
                      alt="Edge Consultant"
                      src="https://testing.edgecrm.in/files/1c3/83c/d30/b7c/298/ab5/029/3ad/fec/b7b/1c383cd30b7c298ab50293adfecb7b18.jpg"
                    />
                  </div>
                  <div className="navcard-rightsection">
                    <p className="heading-nav">
                      Edge Consultant <span>04-May-2022 01:12</span>
                    </p>
                    <p className="nav-subtitile">
                      Edge Consultant has updated the meeting : {ele}
                    </p>
                  </div>
                </div>
              </div>
            </div>)}
          <button variant="text" className="showmore-btn" type="link" >
            Show More
          </button>
        </Box>
      </div>
    </div>
  );
}
