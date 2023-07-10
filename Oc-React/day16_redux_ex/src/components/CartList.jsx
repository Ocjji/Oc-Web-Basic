import React from 'react';
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartList = () => {
    const { carts, cartTotal } = useSelector(state => state.cartReducer);
    const navigate = useNavigate();
    const onGoHome = () => {
        navigate("/");
    }
    return (
        <div className="cart-wrap">
            <h2>장바구니</h2>
            <div className="cart-list">
                {
                    carts.map(item => <CartItem key={item.id} item={item} />)
                }
            </div>
            <div className="cart-bottom">
                <p>
                    <strong>총 개수</strong>
                    <span> total : xxx 개</span>
                </p>
                <p>
                    <strong>총 금액</strong>
                    <span> total : {cartTotal} 원</span>
                </p>
            </div>
            <button onClick={() => onGoHome()}>쇼핑하러가기</button>
        </div>
    );
};

export default CartList;