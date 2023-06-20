import './assets/css/reset.css'
import { Friend, Todos } from "./components";


const App = () => {
  return (
    <div>
      <Friend />
      <hr />
      <Todos />
    </div>
  );
};

export default App;