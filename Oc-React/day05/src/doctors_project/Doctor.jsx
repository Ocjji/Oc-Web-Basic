import React, { useState } from 'react';
import './Doctor.scss';
import DoctorList from "./DoctorList";
import dataList from "../assets/api/DoctorData";

const Doctor = () => {
    const [data, setData] = useState(dataList);
    return (
        <div className="doctor">
            <div className="content">
                <div className="inner">
                    <h1>'낭만닥터 김사부3'</h1>
                    <DoctorList data={data} />
                </div>
            </div>
        </div>
    );
};

export default Doctor;