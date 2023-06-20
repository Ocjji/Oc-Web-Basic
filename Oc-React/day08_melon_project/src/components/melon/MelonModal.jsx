import React from 'react';
import { MelonModalBox } from "../styled/melonStyle";

const MelonModal = ({ modal, onClose }) => {
    const { title, singer, key } = modal;
    return (
        <MelonModalBox className="Modal">
            <div className="bg">

            </div>
            <div className="popup">
                <h2>{title}</h2>
                <div>
                    <iframe width="1268" height="713" src={`https://www.youtube.com/embed/${key}`} title="YouTube video player"/*  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" */ ></iframe>
                </div>
                <p>{singer}</p>
                <span onClick={onClose}><i className="xi-close"></i></span>
            </div>
        </MelonModalBox>
    );
};

export default MelonModal;