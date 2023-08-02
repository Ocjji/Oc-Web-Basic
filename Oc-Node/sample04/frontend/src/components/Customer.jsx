import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import AddUser from './AddUser';
import EditUser from './EditUser';
import ListUser from './ListUser';
import Message from './Message';


const Customer = () => {
    const { isShow  } = useSelector( state => state.customerR )
    
    return (
        <div className="Customer">
            <Message />
            {
                isShow ?  <EditUser  /> 
                :
                <AddUser  />
            }
            
            <ListUser/>
        </div>
    );
};

export default Customer;