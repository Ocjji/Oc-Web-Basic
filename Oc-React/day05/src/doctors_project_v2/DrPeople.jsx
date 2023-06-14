import React from 'react';
import DrPerson from "./DrPerson";

const DrPeople = ({ peopleView, onPerson }) => {
    return (
        <ul className="dr-people">
            {peopleView.map(item => <DrPerson key={item.peoID} item={item} onPerson={onPerson} />)}
        </ul>
    );
};

export default DrPeople;