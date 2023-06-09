import React from 'react';

const Test5Popup = ({offPopup}) => {
    return (
        <>
            <div className="bg" onClick={offPopup}></div>
            <div className="popup">
                <p className="closex">
                    <i className="xi-close-circle-o" onClick={offPopup}></i>
                </p>
                <h2>POPUP</h2>
            </div>
        </>
    );
};

export default Test5Popup;