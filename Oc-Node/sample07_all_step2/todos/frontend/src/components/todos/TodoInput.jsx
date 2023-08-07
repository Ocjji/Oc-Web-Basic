import { useDispatch, useSelector } from "react-redux";
import { changeInput, getTodos, postTodos } from "../../store/modules/todoSlice";
import { useEffect } from "react";

const TodoInput = () => {
    const { text } = useSelector(state => state.todoR)
    const dispatch = useDispatch()
    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) return
        dispatch(postTodos(text))
        dispatch(changeInput(''))
    }
    useEffect(() => {
        dispatch(getTodos());
        console.log("test");
    }, [text])

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={text}
                    onChange={e => dispatch(changeInput(e.target.value))} />
            </form>
        </div>
    );
};

export default TodoInput;