import React, { useState } from 'react';
import './style3.scss';
import dataList from '../assets/api/AccData';
import AccList from "./AccList";

const Acc = () => {
    const [data, setData] = useState(dataList);

    const onView = (id) => {
        setData(data.map(item => item.id === id ? { ...item, isShow: true } : { ...item, isShow: false }))
    }
    return (
        <div className="wrap">
            <AccList data={data} onView={onView} />
        </div>
    );
};

export default Acc;