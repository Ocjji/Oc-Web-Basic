import React, { useContext } from 'react';
import { PlayContext } from "../../contexts/PlayContext";

const Play = () => {
    const { isChk, dispatch } = useContext(PlayContext);
    return (
        <div>
            <h2>true / false :: {isChk.toString()} / {`${isChk}`}</h2>
            <h2>보이기 / 숨기기 :: {isChk ? "보이기" : "숨기기"}</h2>
            <p>
                <button onClick={() => dispatch({ type: "TRUE" })}>True</button>
                <button onClick={() => dispatch({ type: "FALSE" })}>False</button>
                <button onClick={() => dispatch({ type: "TOGGLE" })}>Toggle</button>
            </p>
        </div>
    );
};

export default Play;