import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "../store/modules/cartSlice";


const Product = ({ item }) => {
    const { id, title, price, description, image } = item;
    const { carts } = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    return (
        <article>
            <div>
                <img src={image} alt={title} />
            </div>
            <h3> {title} </h3>
            <h4> {description} </h4>
            <p>
                {
                    carts.find(sel => sel.id === id) ?
                        <button onClick={() => dispatch(removeCart(item.id))}
                            className="off">주문취소</button>
                        :
                        <button onClick={() => dispatch(addCart(item))}>주문하기</button>
                }
                <span>{price.toLocaleString("kr-KR")}원</span>
            </p>
        </article>
    );
};

export default Product;