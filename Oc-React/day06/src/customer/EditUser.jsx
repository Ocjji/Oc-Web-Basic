import React from 'react';

const EditUser = () => {
    return (
        <form>
            <h2>고객명단 수정</h2>
            <p>
                <label>이름</label>
                <input type="text" />
            </p>
            <p>
                <label>주소</label>
                <input type="text" />
            </p>
            <p>
                <button>수정</button>
                <button>취소</button>
            </p>
        </form>
    );
};

export default EditUser;