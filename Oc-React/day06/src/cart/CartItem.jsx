const CartItem = ({ item, onDel, onEdit }) => {
    const { id, text, price, amount } = item;
    return (
        <li>
            <p><span>품목</span>:<strong>{text}</strong></p>
            <p><span>가격</span>:<strong>{price}</strong></p>
            <p><span>수량</span>:<strong>{amount}</strong></p>
            <p><button onClick={() => onEdit(item)}><i className="xi-pen"></i></button>
                <button onClick={() => onDel(id)}><i className="xi-trash"></i></button></p>
        </li>
    );
};

export default CartItem;