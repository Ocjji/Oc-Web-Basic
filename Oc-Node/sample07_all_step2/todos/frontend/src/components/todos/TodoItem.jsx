import { useDispatch } from "react-redux";
import { delTodos, getTodos, putTodos } from "../../store/modules/todoSlice";


const TodoItem = ({ item }) => {
    const { id, text, isChk } = item
    const dispatch = useDispatch()
    const handleChk = (e) => {
        dispatch(putTodos({ id, isChk: e.target.checked }));

        setTimeout(() => {
            dispatch(getTodos());
        }, 50)
    }
    return (
        <li style={{ color: isChk ? 'tomato' : '#000' }}>
            <input type="checkbox" checked={isChk} onChange={handleChk} />
            {text}
            <button onClick={() => dispatch(delTodos(id))}>삭제</button>
        </li>
    );
};

export default TodoItem;