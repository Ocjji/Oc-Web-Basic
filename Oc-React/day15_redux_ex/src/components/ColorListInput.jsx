import { useDispatch, useSelector } from "react-redux";
import { addColor, changeInput } from "../store/modules/colorListSlice";

const ColorListInput = () => {
    const { text } = useSelector(state => state.colorList);
    const dispatch = useDispatch();
    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) return
        dispatch(addColor(text));
        dispatch(changeInput(""));
    }
    return (
        <form className="ColorList" onSubmit={onSubmit}>
            <input type="text" placeholder="원하는 색을 입력하세요" value={text} onChange={(e) => dispatch(changeInput(e.target.value))} />
        </form>
    );
};

export default ColorListInput;