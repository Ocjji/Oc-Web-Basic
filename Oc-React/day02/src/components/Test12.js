import React, { useState } from 'react';

const Test12 = () => {
    const [txt, setTxt] = useState('');
    const changeInput = (e) => {
        const { value } = e.target
        setTxt(value);
    }
    const css1 = {
        height: 50,
        verticalAlign: "top"
    }
    return (
        <div style={{
            margin: 30
        }}>
            <h2>input의 자리수가 6자리 이상되면 확인 버튼이 활성화된다</h2>
            <p style={css1}>
                <input style={{
                    width: 200,
                    height: 30,
                    marginRight: 20,
                    boxSizing: 'border-box'
                }
                } type="text" onChange={changeInput} />
                <button style={{
                    width: 50,
                    height: 30,
                    boxSizing: 'border-box'
                }
                } disabled={txt.length > 5 ? false : true}>확인</button>
            </p >
            <strong>글자수 : {txt.length}</strong>
        </div >
    );
};

export default Test12;