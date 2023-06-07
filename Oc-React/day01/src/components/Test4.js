import React from 'react';
import './Test4.scss';

const Test4 = () => {
    return (
        <>
         <h2>class는 예약어로 인식 , className</h2>
         {/* div.con-box>article.box.green */}
         <div className="con-box">
            <article className="box red">red</article>
            <article className="box green">green</article>
            <article className="box blue">blue</article>
            <article className="box yellow">yellow</article>
         </div>
        </>
    );
};

export default Test4;