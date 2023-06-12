import React from 'react';

const Test7Sub = ({ item, onDel }) => {
    const { id, poster, title, date, actor, director } = item;
    return (
        <article key={id}>
            <div className="left">
                <img src={poster} alt="" />
            </div>
            <div className="right">
                <h3>제목: {title}</h3>
                <ul>
                    <li>출연진: {actor}</li>
                    <li>감독: {director} </li>
                    <li>개봉일: {date} </li>
                </ul>
                <p> <button onClick={() => onDel(id)}>삭제</button> </p>
            </div>
        </article>
    );
};

export default Test7Sub;