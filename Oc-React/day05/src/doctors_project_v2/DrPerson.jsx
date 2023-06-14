import React from 'react';

const DrPerson = ({ item, onPerson }) => {
    const { peoID, person, txt, isView } = item;
    return (
        <li className={isView ? "on" : ""} onClick={() => onPerson(peoID)}>
            <dl>
                <dt>{person}</dt>
                <dd>{txt}</dd>
            </dl>
        </li>
    );
};

export default DrPerson;