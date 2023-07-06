import { useSelector } from "react-redux";
import './ColorSquare.css';
import ColorSquareItem from './ColorSquareItem';

const ColorSquare = () => {
	const { colors } = useSelector(state => state.counter);
	return (
		<ul className="ColorSquare">
			{
				colors.map(item => <ColorSquareItem key={item} item={item} />)
			}
		</ul>
	);
};

export default ColorSquare;

