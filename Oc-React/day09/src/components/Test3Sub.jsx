import React from 'react';

const getColor = (color) => { }
const getFood = (food) => { }

const Test3Sub = ({ color, food }) => {
    const colorInfo = getColor(color);
    const foodInfo = getFood(food);


    return (
        <div>
            <hr />
            <h3>선택한 색 : {color}</h3>
            <h3>색 설명 : {colorInfo}</h3>
            <hr />
            <h3>선택한 음식 : {food}</h3>
            <h3>음식 설명 : {foodInfo}</h3>
        </div>
    );
};

export default Test3Sub;