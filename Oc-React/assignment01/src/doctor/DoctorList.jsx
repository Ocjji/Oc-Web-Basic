import React from 'react';
import DoctorItem from './DoctorItem';

const DoctorList = ({ data }) => {
    return (
        <ul>
            {
                data.map(item => <DoctorItem key={item.id} item={item} />)
            }
        </ul>
    );
};

export default DoctorList;