import React, { useCallback, useState } from 'react';

export const useInput = (initialState = []) => {
    const [state, setState] = useState(initialState);

    const changeInput = useCallback((e) => {
        const { value, name } = e.target;
        setState({ ...state, [name]: value });
    }, [state]);

    return { state, changeInput };
};