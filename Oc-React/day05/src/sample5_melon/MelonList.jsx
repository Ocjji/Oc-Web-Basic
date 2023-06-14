import React from 'react';
import './MelonList.scss';

const MelonList = () => {
    return (
        <div className="MelonList">
            <table>
                <caption>
                    <strong>멜론 2021년 4월 19일 인기차트</strong>
                    <p>멜론 2021년 4월 19일 인기차트 순위입니다</p>
                </caption>
                <colgroup>
                    <col className="w1" />
                    <col className="w2" />
                    <col className="w3" />
                    <col className="w4" />
                    <col className="w5" />
                    <col className="w6" />
                </colgroup>
            </table>
        </div>
    );
};

export default MelonList;