import React, { useRef, useState } from 'react';

const TodoInput = ({ onAdd }) => {
    const [text, setText] = useState('');
    const focusing = useRef(null);
    const changeInput = e => {
        const { value } = e.target;
        setText(value);
    }
    const add = () => {
        onAdd(text);
        setText("");
        focusing.current.focus();
    }
    return (
        <div>
            <input type="text" onChange={changeInput} value={text} ref={focusing} />
            <button onClick={add}>등록</button>
        </div>
    );
};

const TodoList = ({ data, onDel }) => {
    return (
        <ul>
            {
                data.map(item => <TodoItem key={item.id} item={item} onDel={onDel} />)
            }
        </ul>
    );
};

const TodoItem = ({ item, onDel }) => {
    const { id, text } = item;
    return (
        <li key={id}>
            {id} / {text} <button onClick={() => onDel(id)}>삭제</button>
        </li>
    );
};
const Test8 = () => {
    const [data, setData] = useState([
        { id: 1, text: "퇴근하기" },
        { id: 2, text: "저녁먹기" },
        { id: 3, text: "과제하기" }
    ]);
    const no = useRef(4);
    // {id, text}

    const onAdd = (text) => {
        setData([...data,
        { id: no.current++, text: text }
        ])
    }
    const onDel = (id) => {
        setData(data.filter(item => item.id !== id));
    }

    return (
        <div>
            <TodoInput onAdd={onAdd} />
            <TodoList data={data} onDel={onDel} />
        </div>
    );
};

export default Test8;