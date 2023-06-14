import React, { useState } from 'react';
import dataList from '../assets/api/tabData';
import './style2.scss';
import TabList from './TabList';
import TabContent from './TabContent';

const Tab = () => {
    const [data, setData] = useState(dataList);
    const [show, setShow] = useState(data[0]);
    const onShow = (id) => {
        // setShow(data[id - 1]);
        setShow(data.find(item => item.id === id));

        // sol 1
        // setData(data.map(item => item.id === id ? { ...item, isShow: true } : { ...item, isShow: false }))

        // sol 2
        setData(data.map(item => {
            if (item.id === id) {
                item.isShow = true;
            } else {
                item.isShow = false;
            }
            return item;
        }))
    }
    return (
        <div className="tabs">
            <TabList data={data} onShow={onShow} />
            <TabContent show={show} />
        </div>
    );
};

export default Tab;