import CartItem from "./CartItem";

const CartList = ({ data, onDel, delAll, onEdit }) => {
    return (
        <div className="con2">
            <p>
                <button className="btn" onClick={() => delAll()}>전체삭제</button>
                <span className="total">
                    총금액 : {data.reduce((acc, item) => acc + item.total, 0)}
                </span>
            </p>
            <ul className="list">
                {data.map(item => <CartItem key={item.id} item={item} onDel={onDel} onEdit={onEdit} />)}
            </ul>
        </div>
    );
};

export default CartList;