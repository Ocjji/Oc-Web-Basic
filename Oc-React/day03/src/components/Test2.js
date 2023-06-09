import React, { useRef } from 'react';

const Test2 = () => {
    const colorRef = useRef(null)
    const onView=()=>{
        const data = {
            color : colorRef.current.value
        }
        console.log(data);
    }

    return (
        <div>
            {/* ref 학습용 */}
            <select ref={colorRef}>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="orange">orange</option>
                <option value="yellow">yellow</option>
            </select>
            <button onClick={onView}>BTN</button>
        </div>
    );
};

export default Test2;