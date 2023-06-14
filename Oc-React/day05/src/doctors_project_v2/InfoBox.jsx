import React from 'react';
import './infoBox.scss';
import DrGallery from "./DrGallery";
import DoctorInfo from "./DoctorInfo";

const InfoBox = (thumnail) => {
    return (
        <div className="infoBox">
            <DrGallery thumnail={thumnail} />
            <DoctorInfo />
        </div>
    );
};

export default InfoBox;