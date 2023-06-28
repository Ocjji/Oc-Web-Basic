import React from 'react';
import { MainVisual } from "../Styled/MainVisual";
const Visual = () => {
    return (
        <MainVisual >
            <div className="main_key_visual">
                <div className="main_slider">
                    <div className="items first"><img src="/images/main/main_slider_1.jpg" alt="" /></div>
                    <div className="items"><img src="/images/main/main_slider_2.jpg" alt="" /></div>
                    <div className="items"><img src="/images/main/main_slider_3.jpg" alt="" /></div>
                </div>
                <div className="main_title">
                    <h2>탐라는 전기차</h2><br />
                    <h3>전기차와 함께 제주 여행을 준비하는 당신에게<br />필요한 모든 정보와 꿀팁!</h3>
                </div>
                <span className="arrow"></span>
            </div>
        </MainVisual>
    );
};

export default Visual;