import React, { useRef, useState } from 'react';
import './TodoForm.css';

const TodoForm = ({ onAdd }) => {
    const [text, setText] = useState('');
    const textRef = useRef(null);
    const changeInput = (e) => {
        const { value } = e.target;
        setText(value);
    }
    const onSubmit = (e) => {
        e.preventDefault()
        // if(text.length === 0) return
        // if(!text) return
        if (text.trim() !== '') {
            onAdd(text);
        }
        setText('');
        textRef.current.focus();
    }
    return (
        // form 태그 성격 때문에 이벤트의 기본값을 해결해줘야함
        // button 이벤트를 onCLick에서 type = "submit"으로 바꿈
        // form 태그에 onSubmit 이벤트 추가
        // onSubmit 함수에 자동 이벤트 방지 설정
        // e.preventDefault()
        <form className='TodoForm' onSubmit={onSubmit}>
            <input type="text" ref={textRef} value={text} onChange={changeInput} />
            <button type='submit'>추가</button>
        </form>
    );
};

export default TodoForm;