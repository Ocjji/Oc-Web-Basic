import { useDispatch } from "react-redux";
import { changeColor } from "../store/modules/colorPickSlice";

const ColorSquareItem = ({ item }) => {
	const { id, bgColor } = item;
	const dispatch = useDispatch();
	return (
		<div className="Color" style={{ background: bgColor }} onClick={() => dispatch(changeColor(id))}>
		</div>
	);
};

export default ColorSquareItem;