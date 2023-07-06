import { useDispatch } from "react-redux";
import { changeColor } from "../store/modules/counterSlice";

const ColorSquareItem = ({ item }) => {
	const dispatch = useDispatch();

	return (
		<li className="Color" style={{ background: item }} onClick={() => dispatch(changeColor(item))}>
			{item}
		</li>
	);
};

export default ColorSquareItem;