import React, { useState } from 'react';
import './Test8.scss';
import '../assets/css/reset.css';
import Test8Sub from './Test8Sub';
import dataList from '../assets/api/Test8Data';

/* const dataList = [
    { id: 1, name: '진기주', age: 20, addr: '서울', done: true },
    { id: 2, name: '김동욱', age: 22, addr: '제주', done: true },
    { id: 3, name: '서지혜', age: 25, addr: '경기', done: false },
    { id: 4, name: '이원정', age: 21, addr: '부산', done: true },
    { id: 5, name: '지혜원', age: 26, addr: '울산', done: false },
    { id: 6, name: '김예지', age: 25, addr: '전주', done: false },
] */

const Test8 = () => {
    const [data, setData] = useState(dataList);
    return (
        <div>
            <table className='list'>
                <caption>어쩌다 마주친,그대</caption>
                <colgroup>
                    <col className="num" />
                    <col className="name" />
                    <col className="age" />
                    <col className="addr" />
                    <col className="consent" />
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>나이</th>
                        <th>주소</th>
                        <th>동의여부</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => <Test8Sub key={item.id} item={item} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Test8;