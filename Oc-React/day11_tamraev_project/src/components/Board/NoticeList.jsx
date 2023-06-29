import React from 'react';
import { BoardContainer } from "../Styled/BoardStyle";
const NoticeList = () => {
    return (
        <BoardContainer id="boardcontainer">
            <div className="inner">
                <h3>JEJU 전기차 관련 소식</h3>
                <p className="sub_tit">제주도의 전기차 관련 정보와 다양한 관광 소식을 확인해보세요.</p>

                <div className="notice_list">
                    <table>
                        <caption>NO, 제목, 작성일, 조회수에 대한 내용</caption>
                        <colgroup>
                            <col style={{ width: "13%" }} />
                            <col />
                            <col style={{ width: "13%" }} />
                            <col style={{ width: "13%" }} />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>NO</th>
                                <th>제목</th>
                                <th>작성일</th>
                                <th>조회수</th>
                            </tr>
                        </thead>
                        <tbody id="board_list"></tbody>
                    </table>
                </div>

                <div className="paginate" id="board_paging"></div>
            </div>
        </BoardContainer>
    );
};

export default NoticeList;