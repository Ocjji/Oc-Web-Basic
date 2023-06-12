import React, { useState } from 'react';

const dataList = [
    { id: 1, name: "강아지" },
    { id: 2, name: "고양이" },
    { id: 3, name: "송아지" },
    { id: 4, name: "호랑이" },
    { id: 5, name: "망아지" },
    { id: 6, name: "부엉이" }
]

const Test2 = () => {
    const [data, setData] = useState(dataList);
    const onDel1 = () => {
        setData(data.filter(item => item.name !== "강아지"));
    }
    const onDel2 = () => {
        setData(data.filter(item => item.id !== 2));
    }
    const onDel3 = () => {
        const newData = data.filter(item => item.id !== 3);
        setData(newData);
    }
    const onDel = (id) => {
        setData(data.filter(item => item.id !== id));
    }
    const onAdd1 = () => {
        setData([
            ...data,
            {
                id: data.length + 1,
                name: '병아리'
            }
        ])
    }
    const onAdd2 = () => {
        setData([
            ...data,
            {
                id: data.length + 1,
                name: '용가리'
            }
        ])
    }
    const onAdd = (name) => {
        setData([
            ...data,
            {
                id: data.length + 1,
                name: name
            }
        ])
    }
    const onMod1 = () => {
        setData(data.map(item => {
            if (item.id === 3) {
                return {
                    ...item,
                    name: '비둘기'
                }
            } else {
                return item;
            }
        }))
    }
    const onMod2 = () => {
        setData(data.map(item => item.id === 4 ? { ...item, name: '기러기' } : item))
    }
    const onMod = (id) => {
        const newData = data.map(item => item.id === id ? { ...item, name: '토깽이' } : item)
        setData(newData);
    }
    return (
        <div>
            <h2>추가 , 삭제 , 수정</h2>
            <p>
                <button onClick={onDel1}>강아지 삭제</button>
                <button onClick={onDel2}>고양이 삭제</button>
                <button onClick={onDel3}>송아지 삭제</button>
                <button onClick={() => onDel(2)}>2번 삭제</button>
                <button onClick={() => onDel(4)}>4번 삭제</button>
            </p>
            <p>
                <button onClick={onAdd1}>병아리 추가</button>
                <button onClick={onAdd2}>용가리 추가</button>
                <button onClick={() => onAdd('원숭이')}>원숭이 추가</button>
                <button onClick={() => onAdd('꺼벙이')}>꺼벙이 추가</button>
            </p>
            <p>
                <button onClick={onMod1}>3번 수정</button>
                <button onClick={onMod2}>4번 수정</button>
                <button onClick={() => onMod(1)}>1번 수정</button>
            </p>
            <hr />
            <ul>
                {data.map(item => <li key={item.id}>{item.id} / {item.name}</li>)}
            </ul>
        </div>
    );
};

export default Test2;   