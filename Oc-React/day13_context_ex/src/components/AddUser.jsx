import React from 'react';

const AddUser = () => {
    return (
        <>
            <h2>일정을 추가합니다.</h2>
            <form style={{ padding: '20px 0' }}>
                <input type="text" />
                <button type="submit">추가</button>
            </form>
        </>
    );
};

export default AddUser;