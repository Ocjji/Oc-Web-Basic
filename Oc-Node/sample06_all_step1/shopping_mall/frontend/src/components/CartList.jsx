import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useEffect } from "react";
import { totalCart } from "../store/modules/cartSlice";
import { useNavigate } from "react-router-dom";


const CartList = () => {
    const { carts, cartTotal } = useSelector( state => state.cart )
    const dispatch = useDispatch()
    const navigate = useNavigate() 

    useEffect( () => {
        dispatch( totalCart() )
    }, [carts])

    const onGo = ()  => {
        navigate('/')
    }

    return (
        <div className="cart-wrap">
            <h2>장바구니</h2>
            <div className="cart-list">
                {
                    carts.map( item => <CartItem key={item.id} item={item} />)
                }
            </div>
            <div className="cart-bottom">
                <p><strong>총개수</strong>
                   <span> total : { carts.length } 개</span> 
                </p>                
                <p><strong>총금액</strong>
                   <span> total : {cartTotal} 원</span> 
                </p>
            </div>
            <button onClick={ onGo }>쇼핑하러가기</button>
        </div>
    );
};

export default CartList;