import { useNavigate, useParams } from "react-router-dom";
import data from './data';

const ProductDetail = () => {
    const { productID } = useParams();
    const navigate = useNavigate();
    const productItem = data.find(item => item.id === Number(productID));
    const onGo = () => {
        navigate('/Products');
    };
    return (
        <div className="item">
            <h1>{productItem.name} 상세페이지</h1>
            <h2>제품명 - 가격 : {productItem.price.toLocaleString('kr-KR')} 원</h2>
            <p>
                <img src={productItem.photo} alt="" />
            </p>
            <p>{productItem.description}</p>
            <button onClick={onGo}>제품목록</button>
        </div>
    );
};

export default ProductDetail;
