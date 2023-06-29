import React, { useState } from 'react';
import { Header } from '../Styled/HeaderStyle';

const MainHeader = ({ blue, onBoldMenu }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const onMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (

        // <Header className="mainheader total_open">
        // <Header className="mainheader blue">
        <Header className={blue ? `mainheader ${isMenuOpen ? "total_open" : ""} blue` : `mainheader ${isMenuOpen ? "total_open" : ""}`}>
            <div className="inner">
                <h1><a href="/"><img src={`/images/logo${blue ? "_b" : ""}.png`} alt="탐라는 전기차" /></a></h1>
                <button className="btn_total" onClick={() => onMenuOpen()}>메뉴열기<i></i><i></i><i></i></button>
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
                        <li><a href="/" className={onBoldMenu === 1 ? "on" : ""}>HOME</a></li>
                        <li><a href="/info" className={onBoldMenu === 2 ? "on" : ""}>탐라는 전기차</a></li>
                        <li><a href="/electronicList" className={onBoldMenu === 3 ? "on" : ""}>전기차 충전소 위치</a></li>
                        <li><a href="/noticeList" className={onBoldMenu === 4 ? "on" : ""}>JEJU 전기차 관련 소식</a></li>
                    </ul>
                </div>
            </div>
        </Header>
    );
};

export default MainHeader;
