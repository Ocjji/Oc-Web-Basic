import React from 'react';
import { MelonFormContainer } from "../styled/melonStyle";

const MelonForm = ({ onSubmit, changeInput, text }) => {
    return (
        <MelonFormContainer className="MelonForm" onSubmit={onSubmit}>
            <input type="text" placeholder="곡명을 입력하세요" value={text} onChange={changeInput} />
        </MelonFormContainer>
    );
};

export default MelonForm;