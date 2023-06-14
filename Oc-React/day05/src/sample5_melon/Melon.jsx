import React from 'react';
import './Melon.scss';
import MelonForm from "./MelonForm";
import MelonList from "./MelonList";

const Melon = () => {
    return (
        <div className="Melon">
            <h2>Melon 2021.4.19 인기차트</h2>
            <MelonForm />
            <MelonList />
        </div>
    );
};

export default Melon;