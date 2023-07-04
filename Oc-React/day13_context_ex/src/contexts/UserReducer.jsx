import React from 'react';

export const UserReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                data: [...state.data,
                {
                    id: action.id,
                    text: action.input_text,
                    isChk: false
                }
                ],
                text: ""
            }
        case "CHANGE_INPUT":
            return {
                ...state,
                text: action.text
            }
        case "EDIT":
            return {
                ...state,
                data: state.data.map(item => item.id === action.edit_item.id ? action.edit_item : item)
            }
        case "TOGGLE":
            return {
                ...state,
                data: state.data.map(item => item.id === action.toggle_id ? { ...item, isChk: !item.isChk } : item)
            }
        case "DEL":
            return {
                ...state,
                data: state.data.filter(item => item.id !== action.del_id)
            }
        default:
            return state
    }
};
