import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MegaBoxContainer } from "../styled/megaboxStyle";
import MegaBoxForm from "./MegaBoxForm";
import MegaBoxList from "./MegaBoxList";
import MegaBoxModal from "./MegaBoxModal";



const MegaBox = () => {
    const [popup, setPopup] = useState(false);
    const [data, setData] = useState([]);
    const [dataOrigin, setDataOrigin] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectMenuState, setMenuState] = useState([true, false, false]);
    const [text, setText] = useState('');

    const movieDataURL = 'https://gist.githubusercontent.com/Ocjji/adcdf94e12e43449a5ca363cc25e6495/raw/27c2751afc2858607ffb63bccb4988275579a77f/movieData.json';

    useEffect(() => {
        axios.get(movieDataURL)
            .then(res => {
                setData(res.data)
                setDataOrigin(res.data)
                setLoading(true);
                setError(null);
            })
            .catch(error => {
                setData([]);
                setLoading(false);
                setError('error');
            })
    }, []);

    const onLike = (id) => {
        setData(data.map(item => item.id === id ? { ...item, like: !item.like } : item))
    };
    const onSelect = (selectCase) => {
        switch (selectCase) {
            case 'all':
                setData(dataOrigin);
                setMenuState([true, false, false]);
                break;
            case 'onscreen':
                setData(dataOrigin.filter(item => item.onScreen === true))
                setMenuState([false, true, false]);
                break;
            case 'notscreen':
                setData(dataOrigin.filter(item => item.onScreen === false))
                setMenuState([false, false, true]);
                break;
        }
    }
    const onSubmit = () => { }
    const changeInput = () => { }

    return (
        <MegaBoxContainer>
            <h2>MegaBox 메가박스</h2>

            {popup && <MegaBoxModal />}

            <MegaBoxForm onSubmit={onSubmit} changeInput={changeInput} text={text} />

            <ul className="selectList">
                <li className={selectMenuState[0] ? "selectMenu on" : "selectMenu"} onClick={() => onSelect('all')}>전체</li>
                <li className={selectMenuState[1] ? "selectMenu on" : "selectMenu"} onClick={() => onSelect('onscreen')}>상영중</li>
                <li className={selectMenuState[2] ? "selectMenu on" : "selectMenu"} onClick={() => onSelect('notscreen')}>상영예정</li>
            </ul>
            <MegaBoxList data={data} onLike={onLike} />
        </MegaBoxContainer>
    );
};

export default MegaBox;