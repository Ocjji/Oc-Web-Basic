import React from 'react';
import { Footer } from '../Styled/FooterStyle';
const FooterLayout = () => {
    return (
        <Footer className="mainfooter">
            <div className="inner">
                <p className="logo"><img src="./images/logo.png" alt="탐라는 전기차" /></p>
                <ul className="footer_menu">
                    <li><a href="/">탐라는 전기차</a></li>
                    <li><a href="/electronicList">전기차 충전소 위치</a></li>
                    <li><a href="/noticeList">JEJU 전기차 관련 소식</a></li>
                    <li><a href="/terms">이용약관</a></li>
                    <li><a href="/privacy">개인정보처리방침</a></li>
                </ul>
                <b className="copyright">COPYRIGHT ⓒ All rights RESERVED.</b>
            </div>
        </Footer>
    );
};

export default FooterLayout;