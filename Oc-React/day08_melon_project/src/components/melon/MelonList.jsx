import React from 'react';
import { MelonListContainer } from "../styled/melonStyle";
import MelonItem from "./MelonItem";

const MelonList = ({ data, onLike, onOpen }) => {
    return (
        <MelonListContainer className="MelonList">
            <table>
                <colgroup>
                    <col className="w1" />
                    <col className="w2" />
                    <col className="w3" />
                    <col className="w4" />
                    <col className="w5" />
                    <col className="w6" />
                </colgroup>
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>곡(가수)</th>
                        <th>앨범</th>
                        <th>좋아요</th>
                        <th>동영상</th>
                        <th>상승/하락</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => <MelonItem key={item.id} item={item} onLike={onLike} onOpen={onOpen} />)
                    }

                </tbody>
            </table>
        </MelonListContainer>
    );
};

export default MelonList;