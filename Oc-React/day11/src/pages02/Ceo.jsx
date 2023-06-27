import { Link  } from "react-router-dom";
import data from './data'
 
const Ceo = () => {    
    return (
        <div>
      <ul>
        {
          data.map( item => <li key={item.title}>
            <Link to={ `/ceo/${item.title}` }> {item.title} </Link>
          </li>)
        }
        
      </ul>
        </div>
    );
};

export default Ceo;