import React, { useState } from 'react';
import './Doctor.scss';
import DoctorList from "./DoctorList";
import dataList from "../assets/api/DoctorData";
import drImgList from "../assets/api/DrImgData";
import InfoBox from "./InfoBox";

const Doctor = () => {
    const [data, setData] = useState(dataList);
    const [imgdata, setImgData] = useState(drImgList);
    const [thumnail, setThumNail] = useState(imgdata[0])
    const onSelect = (id) => {
        setData(data.map(item => item.id === id ? { ...item, isSelected: true } : { ...item, isSelected: false }))
    }
    return (
        <div className="doctor">
            <div className="content">
                <div className="inner">
                    <h1>'낭만닥터 김사부3'</h1>
                    <DoctorList data={data} onSelect={onSelect} />
                    <InfoBox thumnail={thumnail} />
                </div>
            </div>
        </div>
    );
};

export default Doctor;