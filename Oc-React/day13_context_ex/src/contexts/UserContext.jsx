import React, { createContext, useContext, useEffect, useMemo, useReducer, useRef } from 'react';
import { UserReducer } from "./UserReducer";
const initialState = {
    text: "",
    data: localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) :
        [
            { id: 1, text: "점심 먹기", isChk: true },
            { id: 2, text: "친구 만나기", isChk: true },
            { id: 3, text: "운동하기", isChk: false },
            { id: 4, text: "산책하기", isChk: false },
            { id: 5, text: "등산하기", isChk: true }
        ]
}
const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);
    const { data, text } = state;
    const no = useRef(data.length + 1);

    // 로컬 스토리지 업데이트
    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(data))
    }, [data])

    // 추가
    const onAdd = (text) => {
        dispatch({ type: "ADD", input_text: text, id: no.current++ });
    }
    // 삭제
    const onDel = (id) => {
        dispatch({ type: "DEL", del_id: id });
    }
    // 토글
    const onToggle = (id) => {
        dispatch({ type: "TOGGLE", toggle_id: id });
    }
    // 수정
    const onEdit = (current) => {
        dispatch({ type: "EDIT", edit_item: current });
    }
    // 텍스트 변경
    const changeInput = (e) => {
        const { value } = e.target;
        dispatch({ type: "CHANGE_INPUT", text: value });
    }

    const value = useMemo(() => ({ data, onToggle, onEdit, onDel, onAdd, changeInput, text }), [data, onToggle, onEdit, onDel, onAdd, changeInput, text])

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};
