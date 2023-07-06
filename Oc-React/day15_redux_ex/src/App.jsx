import ColorSquare from "./components/ColorSquare";
import Counter from "./components/Counter";
import './assets/css/reset.css'
import ColorOutput from "./components/ColorOutput";
import Todos from "./components/Todos";


const App = () => {
  return (
    <div className="App">
      <Counter />
      <ColorSquare />
      <ColorOutput />
      <Todos />
    </div>
  );
};

export default App;
