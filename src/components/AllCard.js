import React from 'react'
import Box from "@mui/material/Box";
import { DetailCard } from "./DetailCard";
import "./ActivityArea.css";

export const AllCard = (props) => {
    return (
        <Box className="card-active">
            <div className='card-active'>
                <DetailCard key={props.index} value={props.value} />
            </div>
        </Box>

    )
}
