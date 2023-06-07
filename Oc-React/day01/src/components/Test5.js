import React from 'react';

const Test5 = () => {
    // jsx => && , || , 삼항 밖에 안된다
    // (조건) && '참'에 대한 결과 ( 자주 사용 80% )
    // (조건) && '거짓'에 대한 결과 ( 20% 사용 )
    // (조건) ? 참 : 거짓
    const boolean_True = true;
    const boolean_False = false;
    const undefined_value = undefined;

    return (
        <div>
            <h2> JSX에서 연산자 && , || , 삼항 , 같다 === , 다르다 !==</h2>
            <p>
                {boolean_True === true ? <button>확인</button> : <button>취소</button>}
            </p>
            <p>
                {
                    boolean_True && <span>참의 결과</span>
                }
            </p>
            <p>
                {
                    boolean_False || <span>거짓의 결과</span>
                }
            </p>
            <p>
                {
                    undefined_value || <b>값이 존재 X</b>
                }
            </p>
        </div>
    );
};

export default Test5;