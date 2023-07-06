import ColorList from './ColorList';
import './ColorList.css';
import ColorListInput from './ColorListInput';


const ColorOutput = () => {
    return (
        <div>
            <h2> 색을 입력하세요 </h2>
            <ColorListInput />
            <ColorList />
        </div>
    );
};

export default ColorOutput;