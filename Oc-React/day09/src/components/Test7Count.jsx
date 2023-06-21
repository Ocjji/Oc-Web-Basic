import React, { memo } from 'react';

const Test7Count = memo(({ text, num }) => {
    console.log(text, num);
    return (
        <div>
            <h2>{text} / {num}</h2>
        </div>
    );
});

export default Test7Count;