import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";


const CustomerDetail = () => {
    const { customerID } = useParams();
    const { data } = useSelector(state => state.customerR);
    const customerDetail = data.find(item => item.id === Number(customerID));
    const { id, title, content, author, date } = customerDetail;

    const navigate = useNavigate();

    return (
        <div className="inner">
            <h2> {id}번 문의 </h2>
            <div className="customer-con">
                <p> {title} </p>
                <p> {author} </p>
                <p> {content} </p>
                <p> {date} </p>
            </div>
            <p className="customer-btn">
                <button onClick={() => navigate("/customer")}>목록으로</button>
                <button >수정하기</button>
                <button >삭제하기</button>
            </p>
        </div>
    );
};

export default CustomerDetail;