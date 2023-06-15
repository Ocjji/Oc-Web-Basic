import React, { useState } from 'react';

const dataList = [
    { id: 1, name: 'chk1', text: "연령( 만 14세 이상 ) 확인 ( 필수 )", isChk: true },
    { id: 2, name: 'chk2', text: "증권플러스 이용약관 ( 필수 )", isChk: false },
    { id: 3, name: 'chk3', text: "개인정보 수집 및 이용에 대한 동의 ( 필수 )", isChk: false },
    { id: 4, name: 'chk4', text: "이벤트 우대혜택 동의 안내 ( 선택 )", isChk: false },
]

const Test1 = () => {
    const [data, setData] = useState(dataList);
    const changeInput = (e) => {
        const { name, checked } = e.target;

        if (name === "all") {
            setData(data.map(item => {
                return {
                    ...item,
                    isChk: checked
                }
            }))
        } else {
            setData(data.map(item => item.name === name ? { ...item, isChk: checked } : item))
        }

    }
    return (
        <div style={{ margin: 30 }}>
            <p>
                <input type="checkbox" name="all" onChange={changeInput} checked={data.filter(item => item.isChk !== true).length < 1} />
                <label htmlFor=""> 전체동의</label>
            </p>
            <hr />
            {
                data.map(item => <p key={item.id}>
                    <input type="checkbox" name={item.name} checked={item.isChk} onChange={changeInput} />
                    <label htmlFor=""> {item.text}</label>
                </p>)
            }
            <hr />
        </div>
    );
};

export default Test1;