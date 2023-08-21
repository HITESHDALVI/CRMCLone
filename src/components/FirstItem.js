import React from 'react'
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";

export const FirstItem = () => {
    const data = [{ key: "Contact Number 1", value: "Phone No" }, { key: "Contact Number 2", value: "Phone No" }, { key: "Email", value: "nilesgmhase07.tg+1319@gmail.com" }]

    return (
        <>  {
            data.map((elem) => (
                <FormControl
                    fullWidth
                    sx={{ m: 1, width: "350px" }}
                    variant="standard"
                >
                    <InputLabel
                        style={{ fontSize: "16px", paddingLeft: "17px" }}
                        htmlFor="standard-adornment-amount"
                    >
                        {elem.key}
                    </InputLabel>
                    <Input
                        disableUnderline
                        placeholder={elem.value}
                        style={{ fontSize: "15px" }}
                        sx={{
                            m: 1,
                        }}
                        id="standard-adornment-amount"
                        startAdornment={
                            <InputAdornment position="start"></InputAdornment>
                        }
                    />
                </FormControl>
            ))
        }</>
    )
}

