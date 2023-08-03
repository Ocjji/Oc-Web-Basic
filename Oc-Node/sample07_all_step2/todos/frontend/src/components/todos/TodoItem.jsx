import { useDispatch } from "react-redux";
import {  delTodos, putTodos } from "../../store/modules/todoSlice";


const TodoItem = ({ item }) => {
    const { id, text, isChk } = item 
    const dispatch = useDispatch() 
    return (
        <li style={{ color:isChk?'tomato':'#000'}}>
           <input type="checkbox"  checked={ isChk } onChange={() => dispatch( putTodos(id))}/>
           { text } 
           <button onClick={() => dispatch(delTodos(id))}>삭제</button>
        </li>
    );
};

export default TodoItem;