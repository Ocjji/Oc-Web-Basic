import React from 'react';
import { ContentContainer } from "../Styled/ContentStyle";
const Contents = () => {
    return (
        <ContentContainer className="contents">
            <h4>전기차 이용법부터 알찬 꿀팁까지 모두 알려드려요!</h4>
            <div className="category_menu">
                <ul>
                    <li><a href="#" className="menu_select on" data-id="ALL" >인기 콘텐츠</a></li>
                    <li><a href="#" className="menu_select" data-id="A">전기차 소개</a></li>
                    <li><a href="#" className="menu_select" data-id="B" >슬기로운 전기차 여행</a></li>
                    <li><a href="#" className="menu_select" data-id="C" >충전 및 문제 대처법</a></li>
                    <li><a href="#" className="menu_select" data-id="D" >FAQ</a></li>
                    <li><a href="#" className="menu_select" data-id="E" >제주 전기차 충전소 찾기</a></li>
                    <li><a href="#" className="menu_select" data-id="F" >제주 전기차 뉴스</a></li>
                </ul>
                <span className="line"></span>
                <button className="btn_search">검색<span>닫기</span></button>
                <div className="search_box">
                    <div className="input_box">
                        <input type="text" id="searchTxt" placeholder="검색어를 입력해주세요." />
                        <button className="btn_clear">검색초기화</button>
                        {/* <ul className="rec_list">
                                <li><a href=""><span>제주</span>도 전기차 운행 팁</a></li>
                                <li><a href=""><span>제주</span>도 전기차 운행 팁</a></li>
                                <li><a href=""><span>제주</span>도 전기차 운행 팁</a></li>
                            </ul> */}
                    </div>
                    <button className="btn_search_result" id="searchButton">검색하기</button>
                </div>
            </div>
            <div className="contents_list">
                {/* <p className="total_count">검색결과 (<span>999</span>)</p> */}
                <ul id="card_list"></ul>
            </div>

            <button className="btn_more">더보기</button>
        </ContentContainer>
    );
};

export default Contents;