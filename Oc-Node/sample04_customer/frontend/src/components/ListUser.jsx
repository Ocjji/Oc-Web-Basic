import { useDispatch, useSelector } from 'react-redux';
import Itemuser from './Itemuser';
import { useEffect } from 'react';
import { getCustomer } from '../store/modules/customerSlice';

const ListUser = () => {
    const { customerData  } = useSelector( state => state.customerR )
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch( getCustomer() )
    },[])


    return (
        <div>
            <h2 className="users"> 어쩌다 마주친 그대 출연진 </h2>
            <table>
                <colgroup>
                    <col className="w1" />
                    <col className="w2" />
                    <col className="w3" />
                </colgroup>    
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>주소</th>
                        <th>관리</th>
                    </tr>
                </thead>
                <tbody>
                    {
                         customerData.map( item => <Itemuser key={item.id} item={item}   />)
                    }
                </tbody>
            </table>    
            
        </div>
    );
};

export default ListUser;