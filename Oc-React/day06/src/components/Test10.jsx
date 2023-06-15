import React, { useEffect, useRef, useState } from 'react';

const Test10 = () => {
    const [count, setCount] = useState(
        () => JSON.parse(localStorage.getItem('count')) || 0
    );
    const [data, setData] = useState(
        () => JSON.parse(localStorage.getItem('data')) || []
    );
    const [text, setText] = useState('');
    const no = useRef(1);

    const onUp = () => {
        setCount(count + 1);
    }
    const onDown = () => {
        setCount(count - 1);
    }
    const onAdd = () => {
        setData([...data, { id: no.current++, text }]);
    }
    const onDel = (id) => {
        setData(data.filter(item => item.id !== id));
    }
    const changeInput = (e) => {
        setText(e.target.value);
    }
    const onRemove = () => {
        localStorage.clear();
        // 메모리 삭제
    }

    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count));
    }, [count])

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data));
    }, [data])

    return (
        <div>
            <h2>localStorage : {count}</h2>
            <p>
                <button onClick={onUp}>증가</button>
                <button onClick={onDown} >감소</button>
                <button onClick={onRemove}>메모리 삭제</button>
                {/* <button>모두 삭제</button> */}
            </p>
            <hr />
            <p>
                <input type="text" value={text} onChange={changeInput} />
                <button onClick={onAdd}>추가</button>
            </p>
            <ul>
                {
                    data.map(item => <li key={item.id}>{item.text}<button onClick={() => onDel(item.id)}>삭제</button></li>)
                }
            </ul>
        </div>
    );
};

export default Test10;