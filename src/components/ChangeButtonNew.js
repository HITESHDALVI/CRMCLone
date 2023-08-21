import React from 'react'
import "./ActivityArea.css";
import { Stack } from "@mui/material";

export const ChangeButtonNew = () => {
    return (
        <Stack spacing={2} direction="row">
            <button variant="text" className="btn-call" type="link">
                View
            </button>
            <button variant="text" className="btn-call" type="link">
                Edit
            </button>
            <button
                type="link"
                variant="text"
                style={{ color: "red" }}
                className="btn-call"
            >
                Delete
            </button>
        </Stack>
    )
}
