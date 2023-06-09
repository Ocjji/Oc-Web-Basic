import React from 'react';
import img0 from '../assets/images/img0.jpg';
import img1 from '../assets/images/img1.jpg';

const Test9 = () => {
    return (
        <div>
            <h2>이미지처리</h2>
            <p>
                src에 있는 이미지 불러오기<br />
                import 참조변수 from './이미지경로'<br />
                img = &#123;참조변수&#125;
            </p>
            <img src={img0} width="300" alt="" />
            <img src={img1} width="300" alt="" />
            <hr />
            <img src="./images/img0.jpg" width="300" alt="" />
            <img src="./images/img1.jpg" width="300" alt="" />
        </div>
    );
};

export default Test9;