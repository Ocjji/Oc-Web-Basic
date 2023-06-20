import React, { useRef, useState } from 'react';
import styles from './FriendInput.module.css';

const FriendInput = ({onAdd}) => {
    const nameRef = useRef()

    const [form , setForm ] = useState({
        name:'' , age:'' , image:'' 
    })
    const { name , age , image } = form 

    const changeInput = (e) => {
        const { name , value } = e.target 
        setForm({
            ...form ,
            [name] : value 
        })
    }
    const onSubmit = (e) => {
        e.preventDefault() 
        if( !name || !age || !image ) return 
        
        onAdd( form )
        setForm({
            name:'', age:'', image:''
        })
        nameRef.current.focus()
    }

    return (
        <form className={styles.formadd} onSubmit={onSubmit}>
            <p>
                <label>이름</label>
                <input type="text" value={name} name="name"  onChange={ changeInput } ref={nameRef} />
            </p>
            <p>
                <label>나이</label>
                <input type="text" value={age} name="age" onChange={ changeInput }  />
            </p>
            <p>
                <label>사진</label>
                <input type="text" value={image} name="image" onChange={ changeInput } />
            </p>
            <p>
                <button type="submit">추가</button>
            </p>
        </form>
    );
};

export default FriendInput;