import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { edit, remove } from "../store/modules/customerSlice";


const CustomerDetail = () => {
    const { customerID } = useParams();
    const { data } = useSelector(state => state.customerR);
    const customerDetail = data.find(item => item.id === Number(customerID));
    const { id, title, content, author, date } = customerDetail;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onGoCustomer = () => {
        navigate("/customer");
    }
    const onDel = () => {
        dispatch(remove(id));
        navigate("/customer");
    }
    const onEdit = () => {
        dispatch(edit(customerDetail))
        navigate("/customer/customeredit");
    }

    return (
        <div className="inner">
            <h2> {id}번 {title} </h2>
            <div className="customer-con">
                <p> {title} </p>
                <p> {author} </p>
                <p> {content} </p>
                <p> {date} </p>
            </div>
            <p className="customer-btn">
                <button onClick={onGoCustomer}>목록으로</button>
                <button onClick={onEdit}>수정하기</button>
                <button onClick={onDel}>삭제하기</button>
            </p>
        </div>
    );
};

export default CustomerDetail;