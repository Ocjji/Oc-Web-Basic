import React from 'react';

const DoctorItem = ({ item, onSelect }) => {
    const { id, name, image, isSelected } = item;
    return (
        <li className="doctor-item" onClick={() => onSelect(id)}>
            <div className="item-box" data-id={id}>
                <div className={isSelected ? "img-wrap on" : "img-wrap"}>
                    <img src={image} alt={name} />
                </div>
                <p>{name}</p>
            </div>
        </li>
    );
};

export default DoctorItem;