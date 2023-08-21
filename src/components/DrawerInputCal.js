import React from 'react'
import "./DrawerBox.css"
import { InfoCircleFilled } from '@ant-design/icons';
import Input from '@mui/material/Input';

export const DrawerInputCal = (props) => {
    const { placeholder } = props;
    const ariaLabel = { 'aria-label': 'description' };
    const Error = () => {
        if (!props.error) {
        } else {
            return (<div className='error' value={props.error}><Input error inputProps={ariaLabel} disabled className=' error-input' /><InfoCircleFilled className='error-icon' /></div>)
        }
    }

    return (
        <div className='input-fields'>
            <label className='input-label'>{props.label}</label>
            <input placeholder={placeholder}
                onChange={props.onChange}
                value={props.value}
                type={props.type}
                name={props.name}
                className='input-user' />
            <Error />
        </div>
    )
}
