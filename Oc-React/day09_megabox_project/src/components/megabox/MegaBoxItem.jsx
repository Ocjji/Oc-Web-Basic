import React from 'react';
import { MegaBoxItemContainer } from "../styled/megaboxStyle";
const MegaBoxItem = ({ item, onLike }) => {
    const { id, age, dolby, imageURL, like, movieNm, rank, openDt, salesShare, audiCnt } = item;
    return (
        <MegaBoxItemContainer className="MegaBoxItem">
            <div className="rankBox">
                {rank}
            </div>
            <img className="poster" src={imageURL} alt={movieNm} />

            <strong className="title">
                <img className="age" src={`../images/${age}.jpg`} alt=""></img>
                {movieNm}
            </strong>
            <p>
                <em>예매율 {salesShare}%</em>
                <em>개봉일 {openDt}</em>
            </p>
            <div>
                <button className="like" onClick={() => onLike(id)}><i className={like ? "xi-heart" : "xi-heart-o"}></i><em>{(audiCnt / 1000).toFixed(1)}k</em></button>

                {!dolby && <button className="notDolby">예매</button>}
                {dolby && <button>예매</button>}
                {dolby && <button>⋈ Dolby<br />CINEMA</button>}

            </div>

        </MegaBoxItemContainer>
    );
};

export default MegaBoxItem;