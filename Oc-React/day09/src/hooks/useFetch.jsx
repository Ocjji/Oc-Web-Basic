import React, { useEffect, useState } from 'react';

export const useFetch = (url = []) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = async (url) => {
        try {
            const res = await fetch(url);
            if (!res.ok) throw error;
            const json = await res.json();
            setData(json);
            setLoading(true);
            setError(null);
        } catch (e) {
            setData([]);
            setLoading(false);
            setError("에러입니다");
        }
    }

    useEffect(() => {
        getData(url);
    }, [url])

    return { data, loading, error };
};


// error를 제대로 표현할 수 없다
/* export const useFetch = (url = []) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            fetch(url)
                .then(res => res.json())
                .then(json => {
                    setData(json);
                    setLoading(true);
                    setError(null);
                })
        } catch (e) {
            setData([]);
            setLoading(false);
            setError(e);
        }
    }, [url])

    return { data, loading, error };
}; */