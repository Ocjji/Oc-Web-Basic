import React from 'react';
import './infoBox.scss';
import DrGallery from "./DrGallery";
import DoctorInfo from "./DoctorInfo";

const InfoBox = ({ thumnail, onBigView, viewThumNo, drinfomenulist, onSelectInfo, selected_Dr }) => {
    return (
        <div className="infoBox">
            <DrGallery thumnail={thumnail} onBigView={onBigView} viewThumNo={viewThumNo} />
            <DoctorInfo drinfomenulist={drinfomenulist} onSelectInfo={onSelectInfo} selected_Dr={selected_Dr} />
        </div>
    );
};

export default InfoBox;