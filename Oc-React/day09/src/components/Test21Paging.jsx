import React from 'react';

const Test21Paging = ({ pageNumber, setCurrentPage }) => {
    let pageNum = []
    for (let i = 1; i < pageNumber + 1; i++) {
        pageNum.push(i);
    }
    return (
        <>
            {
                pageNum.map(item => <a key={item} href="#" onClick={e => {
                    e.preventDefault();
                    setCurrentPage(item);
                }}>
                    {item}
                </a>)
            }
        </>
    );
};

export default Test21Paging;