import { useRef, useState } from "react";
import './cart.scss'
import CartForm from './CartForm';
import CartList from './CartList';

const Cart = () => {
    const [data, setData] = useState(
        [
            { id: 1, text: "아메리카노", price: "2000", amount: 3, total: 6000 },
            { id: 2, text: "아이스티", price: "3000", amount: 1, total: 3000 }
        ]
    )
    const [isEdit, setIsEdit] = useState(false);
    const no = useRef(3);
    const textRef = useRef(null);

    const [cart, setCart] = useState({
        text: '', price: '', amount: ''
    })
    const changeInput = (e) => {
        const { name, value } = e.target;
        setCart({
            ...cart,
            [name]: value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (!cart.text && cart.amount < 1 && cart.price < 1) return
        if (isEdit) {
            // 수정
            cart.total = Number(cart.price * cart.amount);
            setData(data.map(item => item.id === cart.id ? cart : item));

            setCart({
                text: '', price: '', amount: ''
            })
            textRef.current.focus();
            setIsEdit(false);
        } else {
            // 추가
            cart.id = no.current++
            cart.total = Number(cart.price * cart.amount);
            setData([
                ...data,
                cart
            ])
            setCart({
                text: '', price: '', amount: ''
            })
            textRef.current.focus();
        }
    }

    // 삭제
    const onDel = (id) => {
        setData(data.filter(item => item.id !== id));
    }

    // 전체 삭제
    const delAll = () => {
        setData([]);
    }

    // 수정버튼 클릭
    const onEdit = (item) => {
        setIsEdit(true);
        const { text, price, amount } = item;
        setCart({
            ...item,
            text: text, price: price, amount: amount
        })
    }
    return (
        <>
            <div className="con-box">
                <CartForm cart={cart} onSubmit={onSubmit} changeInput={changeInput} isEdit={isEdit} textRef={textRef} />
                <CartList data={data} onDel={onDel} delAll={delAll} onEdit={onEdit} />
            </div>
        </>
    );
};

export default Cart;