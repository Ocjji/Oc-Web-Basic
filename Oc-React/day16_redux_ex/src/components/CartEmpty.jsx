import React from 'react';
import { useNavigate } from "react-router-dom";
const CartEmpty = () => {
    const navigate = useNavigate();
    const onGoHome = () => {
        navigate("/");
    }

    return (
        <div className="cart-empty">
            <h2>장바구니 비어있음</h2>
            <a href="" onClick={() => onGoHome()}>쇼핑하러 가기</a>
        </div>
    );
};

export default CartEmpty;