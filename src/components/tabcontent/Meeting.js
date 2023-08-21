import React from "react";
import Input from "@mui/material/Input";
// import "antd/dist/antd.css";
// import { DatePicker, Space } from "antd";
import Flatpickr from "react-flatpickr";
import Box from "@mui/material/Box";
import "flatpickr/dist/themes/material_orange.css";
// import ClockPicker from "react-clockpicker";

const ariaLabel = { "aria-label": "description" };

const CustomInput = ({ value, defaultValue, inputRef, ...props }) => {
  return (
    <input
      style={{
        width: "25%",
        fontSize: "14px",
        border: "none",
        outline: "none",
      }}
      type="date"
      disableUnderline
      placeholder="Date"
      {...props}
      defaultValue={defaultValue}
      ref={inputRef}
    />
  );
};
export const Meeting = () => {
  // var ClockPicker = require("react-clockpicker");
  return (
    <form style={{ fontFamily: '"Nunito Sans", sans-serif' }}>
      <Box sx={{ padding: "10px", borderBottom: 1, borderColor: "divider" }}>
        <Input
          style={{ width: "40%", fontSize: "14px" }}
          placeholder="Meeting Subject"
          inputProps={ariaLabel}
          disableUnderline
        />
        {/* <Input
          style={{ width: "25%", fontSize: "14px" }}
          type="date"
          disableUnderline
          placeholder="Date"
          data-date-inline-picker="true"
        /> */}
        <Flatpickr
          render={({ defaultValue, value, ...props }, ref) => {
            return <CustomInput defaultValue={defaultValue} inputRef={ref} />;
          }}
        />

        {/* <ClockPicker
          hours={hours}
          minutes={minutes}
          disabled={false}
          placement="right"
          // addonBefore={...}
          onChange={(hours, minutes) => this.setState({ hours, minutes })}
        /> */}
      </Box>
    </form>
  );
};
