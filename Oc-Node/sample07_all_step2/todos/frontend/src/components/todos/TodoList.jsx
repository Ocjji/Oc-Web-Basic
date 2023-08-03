import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { useEffect } from "react";
import { getTodos } from "../../store/modules/todoSlice";


const TodoList = () => {
    const { data } = useSelector( state => state.todoR )
    const dispatch  = useDispatch() 

    useEffect( () => {
        dispatch( getTodos() )
    }, [])
    
    return (
        <ul>
           {
            data.map( item => <TodoItem key={item.id} item={item} />)
           } 
        </ul>
    );
};

export default TodoList;