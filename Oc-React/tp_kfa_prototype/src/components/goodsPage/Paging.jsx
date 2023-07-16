import React from 'react';
import { PagingStyle } from "../../styled/GoodsStyle";

const Paging = ({ goodsData, currentPage, totalItemCount, itemPerPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItemCount / itemPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <>
            <PagingStyle className="paging">
                {
                    pageNumbers.map(page => (
                        <button key={page}>
                            {page}
                        </button>
                    ))
                }
            </PagingStyle>
        </>
    );
};

export default Paging;