import React from 'react';
import MegaBoxItem from "./MegaBoxItem";
import { MegaBoxListContainer } from "../styled/megaboxStyle";

const MegaBoxList = ({ data, onLike }) => {
    return (
        <MegaBoxListContainer className="MegaBoxList">
            {
                data.map(item => <MegaBoxItem key={item.id} item={item} onLike={onLike} />)
            }
        </MegaBoxListContainer>
    );
};

export default MegaBoxList;