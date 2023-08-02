import { useDispatch } from "react-redux";
import { delCustomer, editCustomer } from "../store/modules/customerSlice";


const Itemuser = ({item}) => {
    const { id , name, addr } = item 
    const dispatch  = useDispatch() 

    return (
        <tr>
           <td>{name}</td> 
           <td>{addr} </td> 
           <td>
                <button onClick={ () => dispatch(editCustomer(item) ) }>수정</button>
                <button onClick={() => dispatch(delCustomer(id))}>삭제</button>
            </td> 
        </tr>
    );
};

export default Itemuser;