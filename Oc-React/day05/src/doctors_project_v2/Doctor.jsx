import React, { useState } from 'react';
import './Doctor.scss';
import dataList from "../assets/api/DoctorData";
import drImgList from "../assets/api/DrImgData";
import drInfoMenuList from "../assets/api/DrInfoMenuList";
import DoctorList from "./DoctorList";
import InfoBox from "./InfoBox";

const Doctor = () => {
    const [data, setData] = useState(dataList);
    const [imgdata, setImgData] = useState(drImgList);
    const [drinfomenulist, setInfoMenuList] = useState(drInfoMenuList);

    const [thumnail, setThumNail] = useState(imgdata[0])
    const [viewThumNo, setThumNo] = useState(0);
    const [dr_no, setDrNo] = useState(1);
    const [selected_Dr, setSelectDr] = useState(data[0]);

    const onSelect = (id) => {
        setData(data.map(item => item.id === id ? { ...item, isSelected: true } : { ...item, isSelected: false }));
        setThumNail(imgdata[id - 1]);
        setThumNo(0);
        setSelectDr(data[id - 1]);
        setInfoMenuList(drInfoMenuList);
    }

    const onBigView = (thumNo) => {
        setThumNo(thumNo - 1);
    }
    const onSelectInfo = (infoID) => {
        setInfoMenuList(drinfomenulist.map(item => item.infoID === infoID ? { ...item, isShow: true } : { ...item, isShow: false }));

    }

    return (
        <div className="doctor">
            <div className="content">
                <div className="inner">
                    <h1>'낭만닥터 김사부3'</h1>
                    <DoctorList data={data} onSelect={onSelect} />
                    <InfoBox thumnail={thumnail} onBigView={onBigView} viewThumNo={viewThumNo} drinfomenulist={drinfomenulist} onSelectInfo={onSelectInfo} selected_Dr={selected_Dr} />
                </div>
            </div>
        </div>
    );
};

export default Doctor;