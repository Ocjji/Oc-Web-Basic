import { useSelector , useDispatch } from 'react-redux'
import { addCart, removeCart } from '../store/modules/cartSlice';

const Product = ( {item}) => {
    const { id, image,title, description, price} = item 
    const { carts } = useSelector( state => state.cart )
    const dispatch = useDispatch()
    return (
        <article>
             <div>
                <img src={image} alt=""  />
             </div>
             <h3> {title} </h3>
             <h4> {description} </h4>
             <p> 
                {/* some */}
                {
                    carts.find(  x => x.id === id ) ?
                    <button onClick={ ()  => dispatch(removeCart(id))} className="off"> 주문취소 </button>
                    :
                    <button onClick={ ()  => dispatch(addCart(item))}> 주문하기 </button>
                }
                <span>{price} 원</span>
             </p>
        </article>
    );
};

export default Product;