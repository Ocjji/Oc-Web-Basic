import React from 'react';

const Test8Sub = ({ item }) => {
    const { addr, age, done, id, name } = item;
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{addr}</td>
            <td>{done ? "동의" : "비동의"}</td>
        </tr>
    );
};

export default Test8Sub;