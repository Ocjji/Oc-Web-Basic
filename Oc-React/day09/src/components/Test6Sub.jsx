/* import React from 'react';

const Test6Sub = ({ text, num }) => {
    console.log(text, num);
    return (
        <div style={{ border: '1px solid #000', margin: 30, padding: 20, fontSize: 25 }}>
            출력 : {text} / {num}
        </div>
    );
};

export default React.memo(Test6Sub); */

// rscm으로 생성
import React, { memo } from 'react';

const Test6Sub = memo(({ text, num }) => {
    console.log(text, num);
    return (
        <div style={{ border: '1px solid #000', margin: 30, padding: 20, fontSize: 25 }}>
            출력 : {text} / {num}
        </div>
    );
});

export default Test6Sub;