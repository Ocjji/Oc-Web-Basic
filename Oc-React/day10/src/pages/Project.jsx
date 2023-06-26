import React from 'react';
import { useParams } from "react-router-dom";

const Project = ({ data }) => {
    const { name } = useParams()
    // const {사용자정의변수와 동일} = useParams()

    return (
        <div className='page'>
            <h2>Project : {name}</h2>
            {
                data.filter(item => item.title === name).map((item, idx) => <div key={idx}>
                    <h3>타이틀 : {item.title}</h3>
                    <h4>설명 : {item.info}</h4>
                </div>)
            }
        </div>
    );
};

export default Project;