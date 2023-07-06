
import './TodosList.css'
import TodoItem from './TodoItem';
import { useSelector } from "react-redux";

const TodosList = () => {
    const { todoData } = useSelector(state => state.todo);

    return (
        <ul>
            {
                todoData.map(item => <TodoItem key={item.id} item={item} />)
            }
        </ul>
    );
};

export default TodosList;