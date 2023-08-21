import React from 'react'
import "./DrawerBox.css"

import { InfoCircleFilled } from '@ant-design/icons';
import Input from '@mui/material/Input';
import { Select } from 'antd';
const { Option } = Select;


export const DrawerOption = (props) => {
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
            <Select name={props.name}
                defaultValue={props.Opt}
                value={props.value}
                onChange={props.onChange}
                placeholder={placeholder}>
                {
                    props.data.map((ele) => (
                        <Option key={ele.id} value={ele.id}>{ele.value}</Option>
                    )
                    )

                }


            </Select>
            <Error />
        </div>
    )
}
