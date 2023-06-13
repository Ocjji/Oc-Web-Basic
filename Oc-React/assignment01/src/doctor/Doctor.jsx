import React, { useState } from 'react';
import './Doctor.css';
import dataList from '../assets/api/DoctorData';
import DoctorBtn from './DoctorBtn';
import DoctorList from './DoctorList';

const Doctor = () => {
    const [data, setData] = useState(dataList);
    return (
        <div className='wrap'>
            <h1>돌담병원 의료진 현황</h1>
            <DoctorBtn />
            <DoctorList data={data} />
        </div>
    )
};

export default Doctor;