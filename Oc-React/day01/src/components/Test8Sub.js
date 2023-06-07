import React from 'react';
import PropTypes from 'prop-types';

const Test8Sub = ({ name, age, addr,tel,done,color,bgColor }) => {
    // 비구조할당
    
    return (
        <div style={{
            width : 400,
            padding:15,
            margin: "30px auto",
            // border: "5px solid "+ color,
            border: `5px solid ${color}`,
            backgroundColor: bgColor
        }}>
            <ul>
                <li>이름 : {name}</li>
                <li>나이 : {age}</li>
                <li>주소 : {addr}</li>
                <li>전화 : {tel}</li>
                <li>색상 : {color}</li>
                <li>배경 : {bgColor}</li>
                <li>동의여부 : {(done) ? "동의":"비동의" }</li>
            </ul>
        </div>
    );
};

// 유효성 검증
Test8Sub.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    addr: PropTypes.string,
    tel: PropTypes.string,
    color: PropTypes.string,
    bgColor: PropTypes.string,
    done: PropTypes.bool
};
Test8Sub.defaultProps = {
    name: 'Stranger',
    age: 40,
    addr: "주소미정",
    tel: "전화없음",
    color: "#000",
    bgColor: "tan",
    done: false
};

export default Test8Sub;

/* 

PropTypes는 전달받은 데이터의 유효성을 검증하기 위해서 다양한 유효성 검사기(Validator)를 내보냅니다. 아래 예시에서는 PropTypes.string을 사용하게 될 것입니다. prop에 유효하지 않은 값이 전달 되었을 때, 경고문이 JavaScript 콘솔을 통해 보일 것입니다. propTypes는 성능상의 이유로 개발 모드(Development mode) 에서만 확인될 것입니다.

import PropTypes from 'prop-types';

자신컴포넌트.propTypes = {
  props명: PropTypes.string
};

// props의 초깃값을 정의합니다.
Greeting.defaultProps = {
  name: 'Stranger'
};

*/