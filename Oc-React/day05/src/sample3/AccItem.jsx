import React from 'react';

const AccItem = ({ item, onView }) => {
    const { id, title, des, isShow } = item;
    const { txt, msg } = des;
    return (
        <>
            <dt className={isShow ? "on" : ""} onClick={() => onView(id)}>
                {title}
            </dt>
            <dd className={isShow ? "on" : ""}>
                <h3>{txt}</h3>
                <p>{msg}</p>
            </dd>
        </>
    );
};

export default AccItem;