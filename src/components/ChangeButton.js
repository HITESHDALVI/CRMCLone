import React from 'react'
import { Stack } from "@mui/material";

export const ChangeButton = () => {
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
            <button variant="text" className="btn-call" type="link">
                Mark as Complete
            </button>
        </Stack>
    )
}
