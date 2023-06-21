import React from 'react';
import { MegaBoxFormContainer } from "../styled/megaboxStyle";

const MegaBoxForm = ({ onSubmit, changeInput, text }) => {
    return (
        <MegaBoxFormContainer className="MegaBoxForm" onSubmit={onSubmit}>
            <input type="text" placeholder="영화명을 입력하세요" value={text} onChange={changeInput} />
            <button type="Submit">검색</button>
        </MegaBoxFormContainer>
    );
};

export default MegaBoxForm;