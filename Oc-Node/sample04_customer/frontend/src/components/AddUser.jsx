import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer } from "../store/modules/customerSlice";

const AddUser = () => {
    const nameRef = useRef()
    const { customerData  } = useSelector( state => state.customerR ) 
    const dispatch  = useDispatch() 
    const [ user , setUser ] = useState({
        name:'' , addr:''
    })
    const { name , addr } = user 

    const changeInput = e => {
        const { name , value } = e.target 
        setUser({
            ...user,
            [name] : value 
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        if( !name || !addr ) return 
        
       dispatch( addCustomer( user ) )
       setUser({name:'', addr:''})
        nameRef.current.focus()
    }

    return (
        <form onSubmit={ onSubmit }>
            <h2> 어쩌다 마주친 그대 추가</h2>
            <p>
                <label> 이름 </label>
                <input type="text" value={name} name="name" onChange={changeInput} ref={nameRef} />
            </p>
            <p>
                <label> 주소 </label>
                <input type="text" value={addr} name="addr" onChange={changeInput}/>
            </p>
            <p>
                <button type="submit"> 추가 </button>
            </p>
        </form>
    );
};

export default AddUser;