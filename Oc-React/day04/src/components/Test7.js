import React, { useState } from 'react';
import Test7Sub from './Test7Sub';
import '../assets/css/reset.css';
import './Test7.scss';
import dataList from '../assets/api/movies';

const Test7 = () => {
    const [data, setData] = useState(dataList);

    const onDel = (id) => {
        setData(data.filter(item => item.id !== id));
    }

    return (
        <div className='wrap'>
            {
                data.map(item => <Test7Sub key={item.id} item={item} onDel={onDel} />)
            }
        </div>
    );
};

export default Test7;