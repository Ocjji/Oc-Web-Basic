import React from 'react';
import DoctorItem from "./DoctorItem";

const DoctorList = ({ data }) => {
    return (
        <ul className="doctor-list">
            {data.map(item => <DoctorItem key={item.id} item={item} />)}

        </ul>
    );
};

export default DoctorList;