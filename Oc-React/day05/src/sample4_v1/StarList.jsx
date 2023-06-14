import React from 'react';
import StarItem from "./StarItem";

const StarList = ({ data }) => {
    return (
        <ul className="list">
            {data.map(item => <StarItem key={item.id} item={item} />)}
        </ul>
    );
};

export default StarList;