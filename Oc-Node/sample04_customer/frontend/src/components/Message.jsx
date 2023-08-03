import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showMsg } from "../store/modules/customerSlice";

const Message = () => {
    const {  isMsg , msg  } = useSelector( state => state.customerR )
    const dispatch  = useDispatch() 
    //2초후 사라지기 
    useEffect( () => {
        const timer = setTimeout( () => {
            dispatch(showMsg())
        },2000)
        return() => {
            clearTimeout( timer )
        }
    },[msg])
    return (
        <>
         <div className={`message ${ isMsg ? "on":"" }`}>
               메세지 : { msg }    
         </div>   
        </>
    );
};

export default Message;