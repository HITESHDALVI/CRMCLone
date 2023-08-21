import React from 'react'
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_orange.css";

import "./DrawerBox.css"

const CustomInput = ({ value, defaultValue, inputRef, ...props }) => {
    const current = new Date();
    const date = `${current.getDate()}-${current.getMonth() + 1}-${current.getFullYear()}`;
    return (
        <input
            className='input-user'
            type="date"
            disableUnderline
            placeholder={date}
            {...props}
            defaultValue={date}
            ref={inputRef}
        />
    );
};
export const DateInput = () => {
    return (
        <div className='input-fields'>
            <label className='input-label'>Lead Date *</label>

            <Flatpickr

                render={({ defaultValue, value, ...props }, ref) => {
                    return <CustomInput defaultValue={defaultValue} inputRef={ref} />;
                }}
            />
        </div>
    );
};
