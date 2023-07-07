import Product from "../components/Product";
import { products } from '../assets/api/data';
import './Home.css';


const Home = () => {
  return (
    <div>
      <div className="inner">
        <h2> 짱짱한 티셔츠 파라여 </h2>
        <div className="cart-box">
          {
            products.map(item => <Product key={item.id} item={item} />)
          }
        </div>
      </div>
    </div>
  );
};

export default Home;