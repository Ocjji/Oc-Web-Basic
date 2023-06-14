import React from 'react';
import DoctorItem from "./DoctorItem";

const DoctorList = ({ data, onSelect }) => {
    return (
        <ul className="doctor-list">
            {data.map(item => <DoctorItem key={item.id} item={item} onSelect={onSelect} />)}

        </ul>
    );
};

export default DoctorList;