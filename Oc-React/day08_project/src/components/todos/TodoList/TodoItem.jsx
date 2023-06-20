import styles from './TodoList.module.scss';

const TodoItem = ({ item, onDel, onChk }) => {
    const { id, text, isChk } = item
    return (
        <li className={isChk ? styles.on : ""}>
            <span onClick={() => onChk(id)}>✓</span>
            <em>{text}</em>
            <button onClick={() => onDel(id)}>삭제</button>
        </li>
    );
};

export default TodoItem;