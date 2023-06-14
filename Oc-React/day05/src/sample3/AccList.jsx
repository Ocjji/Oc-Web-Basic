import React from 'react';
import AccItem from "./AccItem";

const AccList = ({ data, onView }) => {

    return (
        <dl>
            {
                data.map(item => <AccItem key={item.id} item={item} onView={onView} />)
            }
        </dl>
    );
};

export default AccList;