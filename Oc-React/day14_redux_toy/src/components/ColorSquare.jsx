import { useSelector } from "react-redux";
import './ColorSquare.css';
import ColorSquareItem from "./ColorSquareItem";

const ColorSquare = () => {
	const { data } = useSelector(state => state.colorPicker);

	return (
		<div className="ColorSquare">
			{
				data.map(item => <ColorSquareItem key={item.id} item={item} />)
			}
		</div>
	);
};

export default ColorSquare;

