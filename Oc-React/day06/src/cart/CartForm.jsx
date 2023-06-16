const CartForm = ({ onSubmit, cart, changeInput, isEdit, textRef }) => {
    const { text, price, amount } = cart;
    return (
        <div className="box con1">
            <form onSubmit={onSubmit}>
                <p>
                    <label>품목</label>
                    <input type="text" name="text" value={text} onChange={changeInput} ref={textRef} />
                </p>
                <p>
                    <label>가격</label>
                    <input type="text" name="price" value={price} onChange={changeInput} />
                </p>
                <p>
                    <label>수량</label>
                    <input type="number" name="amount" value={amount} onChange={changeInput} />
                </p>
                <p>
                    <button type="submit">
                        {isEdit ? "수정" : "등록"}
                    </button>
                </p>
            </form>
        </div>
    );
};

export default CartForm;