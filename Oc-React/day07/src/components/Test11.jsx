import React, { useEffect, useInsertionEffect, useState } from 'react';
import axios from 'axios';

const Test11 = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/todos';
        axios.get(url)
            .then(res => {// 응답완료
                setData(res.data);
                setLoading(false);
                setError(null)
            })
            .catch(error => {// 응답실패
                setData([]);
                setLoading(true);
                setError('데이터를 불러올 수 없습니다.');
            })
    }, [])

    return (
        <div>
            {
                data && loading ? <h2>로딩중...</h2>
                    :
                    data.map(item => <p key={item.id}>
                        {item.id} / {item.title}
                    </p>)
            }
            <h3>
                {error ? error : null}
            </h3>
        </div>
    );
};

export default Test11;