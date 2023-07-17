import React from 'react';
import GoodsList from "./GoodsList";
import GoodsNav from "./GoodsNav";

const GoodsLayout = () => {
    return (
        <div className="inner">
            <div className="goodslayout" style={{ display: "flex" }}>
                <GoodsNav />
                <GoodsList />
            </div>
        </div>

    );
};

export default GoodsLayout;