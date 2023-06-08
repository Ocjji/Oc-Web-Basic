import React from 'react';

const BusinessItem = ({ item }) => {
    const { id, imgurl, kor, eng, des } = item;
    return (
        <li>
            <a href="#">
                <div><img src={imgurl} alt={kor} /></div>
                <h3>
                    {kor}
                    <span>{eng}</span></h3>
                <p>{des}</p>
            </a>
        </li>
    );
};

export default BusinessItem;