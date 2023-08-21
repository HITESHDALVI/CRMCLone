import React from "react";
import "./ActivityArea.css";
import "./DetailsCard.css"

export const DetailCard = (props) => {
  return (
    <>
      <div
        className="details-card"
        key={props.key}
      >
        <img className="img-style" alt="Edge Consultant"
          src="https://testing.edgecrm.in/files/1c3/83c/d30/b7c/298/ab5/029/3ad/fec/b7b/1c383cd30b7c298ab50293adfecb7b18.jpg"
        />
        <div className="content-card">
          <h5 className="heading" >
            Edge Consultant
          </h5>
          <p className="content-para">
            created a task
            <span
              className="dyn-content"
            >
              {props.value}
            </span>
            dated Apr 21, 2022 .
          </p>
        </div>
      </div>
    </>
  );
};
