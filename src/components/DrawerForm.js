import React, { useState, useEffect } from 'react'


import { Col, Row } from 'antd';
import { DrawerInputCal } from './DrawerInputCal';
import { DateInput } from './DateInput';
import { DrawerOption } from './DrawerOption';
import data from "../data/drawerOption.json"



export const DrawerForm = (props) => {
    // const [visible, setVisible] = useState(false);
    const [userRegistration, setUserRegistration] = useState({
        leadname: "",
        company: '',
        contactperson: '',
        city: '',
        contactno: '',
        valuation: '',
        email: '',
    });

    const [records, setRecords] = useState({});

    const [errors, setErrors] = useState({});
    // const [optionErrors, setOptionErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleInput = (e) => {
        const { name, value } = e.target;

        setUserRegistration({ ...userRegistration, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(userRegistration));
        // setOptionErrors(validateOption(Opt));

        setIsSubmit(true);
        const newrecord = { ...userRegistration };
        const optionrecord = { ...optionState };

        setRecords({ ...records, ...newrecord, ...optionrecord });
        console.log({ records });

    };
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {

        }
    }, [errors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i;

        if (!values.leadname) {
            errors.leadname = "lead is required";
        }
        if (!values.company) {
            errors.company = "Company name is required";
        }

        if (!values.contactperson) {
            errors.contactperson = "Contact person is required";
        }
        if (!values.contactno) {
            errors.contactno = "Contact number is required";
        }

        if (!values.email) {
            errors.email = "email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "Email not valid";
        }

        return errors;
    };



    const [optionState, setoptionState] = useState({
        source: '',
        designation: '',
        assign: '',
        bussiness: '',
        unit: '',
        industry: '',
        region: ''

    });


    const onChangeComboBox = (e, name, data) => {
        const selectedId = e;

        const selectedoptionState = data.filter((d) => d.id == selectedId)[0];
        setoptionState({ ...optionState, [name]: selectedoptionState.value });

    };
    useEffect(() => {
        setoptionState(optionState);

    }, []);

    // const onClose = () => {
    //     setVisible(false);
    // };



    return (
        <form layout="vertical" action='' onSubmit={handleSubmit} hideRequiredMark className='form'>
            <Row gutter={16}>
                <Col span={8}>
                    <DrawerInputCal onChange={handleInput} label={'Lead Name *'} name={"leadname"} error={errors.leadname}
                        value={userRegistration.leadname} type={"text"} placeholder={'Lead Name'} />
                    <DrawerInputCal label='Contact Person *' onChange={handleInput} name={"contactperson"}
                        value={userRegistration.contactperson} type={"text"} error={errors.contactperson} placeholder='Contact Person' />


                    <DrawerOption label='Lead Source' placeholder="Select Lead Source" name='source'
                        value={optionState.value}
                        onChange={(e) => {
                            onChangeComboBox(e, 'source', data.source);
                        }}
                        // Opt={""}
                        data={data.source} />



                    <DrawerInputCal label='City' onChange={handleInput} name={"city"}
                        value={userRegistration.city} type={"text"} placeholder='Enter City' />
                </Col>


                <Col span={8}>
                    <DateInput />
                    <DrawerOption
                        value={optionState.value}
                        onChange={(e) => {
                            onChangeComboBox(e, 'designation', data.designation);
                        }}
                        label='Designation' placeholder="Select Designation" name="designation" data={data.designation} />
                    <DrawerInputCal onChange={handleInput} name={"contactno"} error={errors.contactno}
                        value={userRegistration.contactno} type={"text"} label='Contact Number *' placeholder='Contact Number' />
                    <DrawerInputCal onChange={handleInput} name={"valuation"}
                        value={userRegistration.valuation} type={"text"} label='Lead Valuation (₹)' placeholder='Lead Valuation' />

                </Col>


                <Col span={8}>
                    <DrawerInputCal label={'Company Name *'} onChange={handleInput} name={'company'}
                        value={userRegistration.company} type={"text"} error={errors.company} placeholder='Company Name' />
                    <DrawerOption
                        value={optionState.value}
                        onChange={(e) => {
                            onChangeComboBox(e, 'assign', data.assign);
                        }}
                        label='Assign to' data={data.assign} name="assign"
                        placeholder="Select Assign to" />
                    <DrawerInputCal label='Email ID' onChange={handleInput} error={errors.email} name={'email'}
                        value={userRegistration.email} type={"text"} placeholder='Enter Email Address' />
                    <DrawerOption
                        value={optionState.value}
                        onChange={(e) => {
                            onChangeComboBox(e, 'region', data.region);
                        }}
                        label='Region' name="region" data={data.region}
                        placeholder="Select Region" />
                </Col>
            </Row>



            <Row gutter={16}>
                <Col span={8}>
                    <DrawerOption
                        value={optionState.value}
                        onChange={(e) => {
                            onChangeComboBox(e, 'industry', data.industry);
                        }}
                        label='Industry Type' name="industry" data={data.industry}
                        placeholder="Select Industry Type" />
                </Col>
                <Col span={8}>
                    <DrawerOption
                        value={optionState.value}
                        onChange={(e) => {
                            onChangeComboBox(e, 'bussiness', data.bussiness);
                        }}
                        label='Line of Business *' name="bussiness" data={data.bussiness}
                        placeholder="Select LOB" />
                </Col>
            </Row>



            <Row gutter={16}>
                <Col span={8}>
                    <DrawerOption
                        value={optionState.value}
                        onChange={(e) => {
                            onChangeComboBox(e, 'unit', data.unit);
                        }}
                        label='Business Unit *' name="unit" placeholder="Select Business Unit" data={data.unit}
                    />
                </Col>
            </Row>
            <button type='submit' onClick={props.onClick} className='save-btn'>Save</button>
        </form>
    )
}
