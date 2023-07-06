import TodosList from './TodosList';
import TodoInput from './TodoInput';
import './Todos.css';

const Todos = () => {  
    return (
        <div className="Todos">
             <h2>WaitingList</h2>
             <TodoInput />
             <TodosList />
        </div>
    );
};

export default Todos;