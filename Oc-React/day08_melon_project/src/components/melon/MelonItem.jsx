import React from 'react';

import { FcVideoCall, FcLike, FcLikePlaceholder, FcUp, FcDown, FcMinus } from "react-icons/fc";

const MelonItem = ({ item, onLike, onOpen }) => {
    const { id, rank, done, album, like, poster, key, singer, state, title } = item;
    return (
        <tr>
            <td>{rank}</td>
            <td className="img">
                <img src={poster} alt={title} width="60" />
                <p className="img">
                    <span>{title}</span>
                    {singer}
                </p>
            </td>
            <td>
                {album}
            </td>
            <td className="like">
                <i onClick={() => onLike(id)}>
                    {done ? <FcLike /> : <FcLikePlaceholder />}
                </i> / {like.toLocaleString('ko-kr')}
            </td>
            <td>
                <i onClick={() => onOpen(id)}><FcVideoCall /></i>
            </td>
            <td>
                {state === '상승' && <FcUp style={{ color: 'red' }} />}
                {state === '유지' && <FcMinus style={{ color: 'blue' }} />}
                {state === '하강' && <FcDown />}
                <span style={{ marginLeft: 10 }}>{state}</span>
            </td>
        </tr>
    );
};

export default MelonItem;