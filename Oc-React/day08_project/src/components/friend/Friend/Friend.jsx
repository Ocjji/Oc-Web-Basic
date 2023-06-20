import { useRef, useState } from 'react';
import dataList from '../../../assets/api/friendData'
import FriendInput from '../FirendForm/FriendInput';
import styles from './Friend.module.scss';
import FriendList from '../FriendList/FriendList';

const Friend = () => {
    const [data, setData] = useState(dataList)
    const no = useRef(dataList.length + 1)
    const [isChk, setIsChk] = useState(false)

    //삭제
    const onDel = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    //추가
    const onAdd = (user) => {
        user.id = no.current++
        setData([...data, user])
    }

    const changeInput = (e) => {
        const { checked } = e.target
        setIsChk(checked)
    }

    const onRemove = () => {
        setData([])
    }

    const onReset = () => {
        setData(dataList)
    }

    return (
        <div className={styles.wrap}>
            <h1> 친구들 총인원 : {data.length}</h1>
            <p className={styles.chk}>
                <input type="checkbox" checked={isChk} onChange={changeInput} />
                활성/비활성
            </p>

            <FriendList data={data} onDel={onDel} />

            <p className={styles.btn}>
                <button onClick={onRemove}>모두삭제</button>
                <button onClick={onReset}>초기복구</button>
            </p>

            {
                isChk && <FriendInput onAdd={onAdd} />
            }
        </div>
    );
};

export default Friend;