import { useRef, useState } from 'react';
import styles from './TodoForm.module.scss';

const TodoForm = ({ onAdd }) => {
    const [text, setText] = useState('');
    const textRef = useRef();
    const changeInput = e => {
        const { value } = e.target;
        setText(value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) return;
        onAdd(text);
        setText('');
        textRef.current.focus();
    }

    return (
        <form className={styles.TodoForm} onSubmit={onSubmit}>
            <input type="text" ref={textRef} value={text} onChange={changeInput} />
            <button type="submit">추가</button>
        </form>
    );
};

export default TodoForm;