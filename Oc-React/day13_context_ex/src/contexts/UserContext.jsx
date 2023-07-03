import React, { createContext, useContext, useMemo, useReducer } from 'react';
import { UserReducer } from "./UserReducer";
const initialState = {
    data: [
        { id: 1, text: "점심 먹기", isChk: true },
        { id: 2, text: "친구 만나기", isChk: true },
        { id: 3, text: "운동하기", isChk: false },
        { id: 4, text: "산책하기", isChk: false },
        { id: 5, text: "등산하기", isChk: true }
    ]
}
const UserContext = createContext();
export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);
    const { data } = state;

    // 추가
    const onAdd = (text) => {
        dispatch({ type: "ADD", playload: text })
    }
    // 삭제
    const onDel = () => { }
    // 토글
    const onToggle = () => { }
    // 수정
    const onEdit = () => { }

    const value = useMemo(() => ({ data, onToggle, onEdit, onDel, onAdd }), [data, onToggle, onEdit, onDel, onAdd])

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;