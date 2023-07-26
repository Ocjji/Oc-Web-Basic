import React from 'react';

const Folio = ({ title, imgURL, desc }) => {
    return (
        <article>
            <h3>{title}</h3>
            <div>
                <img src={imgURL} alt={title} />
            </div>
            <p>{desc}</p>
        </article>
    );
};

export default Folio;