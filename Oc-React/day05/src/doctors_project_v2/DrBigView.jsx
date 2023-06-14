import React from 'react';

const DrBigView = ({ thumnail, viewThumNo }) => {
    const { thums } = thumnail;

    return (
        <div className="dr-big-view">
            <img src={thums[viewThumNo].img} alt="" />
        </div>
    );
};

export default DrBigView;