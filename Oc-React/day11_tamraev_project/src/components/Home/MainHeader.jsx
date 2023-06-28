import React from 'react';
import { Header } from '../Styled/HeaderStyle';

const MainHeader = () => {
    return (

        <Header className="mainheader total_open">
            {/* <Header className="mainheader"> */}
            <div className="inner">
                <h1><a href="/"><img src="/images/logo_b.png" alt="탐라는 전기차" /></a></h1>
                <a href="" className="btn_total">메뉴열기<i></i><i></i><i></i></a>
            </div>

            <div className="total_menu">
                <div className="gnb_img_slider">
                    <div className="items first"><img src="/images/gnb_slider_1.jpg" alt="" /></div>
                    <div className="items"><img src="/images/gnb_slider_2.jpg" alt="" /></div>
                    <div className="items"><img src="/images/gnb_slider_3.jpg" alt="" /></div>
                    <div className="items"><img src="/images/gnb_slider_4.jpg" alt="" /></div>
                    <div className="items"><img src="/images/gnb_slider_5.jpg" alt="" /></div>
                    <div className="items"><img src="/images/gnb_slider_6.jpg" alt="" /></div>
                </div>
                <div className="gnb_menu">
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/info">탐라는 전기차</a></li>
                        <li><a href="/electronicList">전기차 충전소 위치</a></li>
                        <li><a href="/noticeList">JEJU 전기차 관련 소식</a></li>
                    </ul>
                </div>
            </div>
        </Header>
    );
};

export default MainHeader;
