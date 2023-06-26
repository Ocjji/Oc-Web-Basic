import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const useAxios = (url = []) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setData(res.data);
                setLoading(true);
                setError(null);
            })
            .catch(error => {
                setData([]);
                setLoading(false);
                setError("에러입니다");
            })
    }, [url])

    return { data, loading, error };
};