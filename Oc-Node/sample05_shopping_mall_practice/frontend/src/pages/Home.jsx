import { useEffect } from "react";
import Header from "../components/Header";
import Product from "../components/Product";
// import { products } from '../assets/api/data'
import './Home.css'
import { useDispatch, useSelector } from "react-redux";
import { getDubot } from "../store/modules/cartSlice";


const Home = () => {
  const { products } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDubot());
  }, [])
  return (
    <div>
      <div className="inner">
        <h2>  디디에두보 베스트 </h2>
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