import React from 'react';

export const UserReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                data: []
            }
        case "EDIT":
            return {
                ...state,
                data: []
            }
        case "TOGGLE":
            return {
                ...state,
                data: []
            }
        case "DEL":
            return {
                ...state,
                data: []
            }
        default:
            return state
    }
};
