import React, { useEffect, useState } from 'react';
import axios from 'axios';

import MelonForm from "./MelonForm";
import MelonList from "./MelonList";
import { MelonContainer } from "../styled/melonStyle";
import MelonModal from "./MelonModal";

const Melon = () => {
    const [data, setData] = useState([]);
    const [dataList, setDataList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [text, setText] = useState('');
    const [modal, setModal] = useState({});

    useEffect(() => {
        axios.get("https://gist.githubusercontent.com/Ocjji/08e3a2be9bc7f9d3400f7b0b2a676c71/raw/190f19d63c3f89acb8dd8d359eb8baf5ac24f03c/musicData.json")
            .then(res => {
                setData(res.data);
                setDataList(res.data);
                setLoading(true);
                setError(null);
            })
            .catch(error => {
                setData(null);
                setLoading(false);
                setError('error');
            })
    }, [])

    const getDate = () => {
        const now = new Date();
        const y = now.getFullYear();
        const m = now.getMonth();
        const d = now.getDate();
        return `${y}년 ${m}월 ${d}일`
    }

    const changeInput = (e) => {
        const { value } = e.target;
        setText(value);
        // onSearch(value);
        // onSearch(text);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        onSearch(text);
    }

    // 실시간 검색
    useEffect(() => {
        onSearch(text);
    }, [text])

    const onSearch = (text) => {
        setData(dataList.filter(item => item.title.toLowerCase().indexOf(text.toLowerCase()) !== -1))
    }

    const onLike = (id) => {
        setData(data.map(item => item.id === id ? item.done ? { ...item, done: false, like: item.like - 1 } : { ...item, done: true, like: item.like + 1 } : item))
    }
    const onOpen = (id) => {
        setIsOpen(true);
        setModal(data.find(item => item.id === id))
    }
    const onClose = () => {
        setIsOpen(false);
        setModal({});
    }

    return (
        <MelonContainer>
            <h2>Melon {getDate()} 인기차트</h2>
            {isOpen && <MelonModal onClose={onClose} modal={modal} />}
            <MelonForm onSearch={onSearch} onSubmit={onSubmit} changeInput={changeInput} text={text} />
            <MelonList data={data} onLike={onLike} onOpen={onOpen} />
        </MelonContainer >
    );
};

export default Melon;