import React, { useState } from 'react';
import Test5Popup from './Test5Popup';

const Test5 = () => {
    const [isOpen, setIsOpen] = useState(false)
    const onPopup=()=>{
        setIsOpen(true)
    }
    const offPopup=()=>{
        setIsOpen(false)
    }

    return (
        <div>
            <button onClick={onPopup}>POPUP</button>
            {
                isOpen && <Test5Popup offPopup={offPopup}/>
            }
        </div>
    );
};

export default Test5;