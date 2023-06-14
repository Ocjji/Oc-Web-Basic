import React from 'react';

const DoctorItem = ({ item }) => {
    const { id, name, position, image, tel } = item;
    return (
        <li className="doctor-item">
            <div className="item-box" data-id={id}>
                <div className="img-wrap on">
                    <img src={image} alt={name} />
                </div>
                <p>{name}</p>
            </div>
        </li>
    );
};

export default DoctorItem;