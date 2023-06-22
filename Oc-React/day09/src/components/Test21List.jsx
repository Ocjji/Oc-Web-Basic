import React from 'react';

const Test21List = ({ currentPosts, loading }) => {

    return (
        <>
            {
                currentPosts.map(item => <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                </tr>)
            }
        </>
    );
};

export default Test21List;