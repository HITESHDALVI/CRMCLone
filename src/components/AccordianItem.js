import React from 'react'
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import "./Accordian.css";

export const AccordianItem = () => {

    const items = ["About Peter Petrino", "Contact Address", "Peter Petrino Leads(0)", "Files"]

    return (<>
        {
            items.map((elem) => (
                <div className="accordian-item">
                    <div className="accordian-name">{elem}</div>
                    <ArrowForwardIosOutlinedIcon
                        style={{ fontSize: "17px", fontWeight: "700" }}
                    />
                </div>
            ))

        }</>

    )
}
