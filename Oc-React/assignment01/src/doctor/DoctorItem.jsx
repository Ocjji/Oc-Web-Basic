import React from 'react';

const DoctorItem = ({ item }) => {
    const { id, name, position, image, tel } = item;
    return (
        <li>
            <p>
                <img src={image} alt={name} />
            </p>
            <div>
                <strong>{name}</strong>
                <span>{position}</span>
                <span>{tel}</span>
                <button>삭제</button>
            </div>
        </li>
    );
};

export default DoctorItem;