import React from 'react';
import GoodsItem from "./GoodsItem";
import { CategoryInfoStyle, GoodsListStyle } from "../../styled/GoodsStyle";
import { useSelector } from "react-redux";
import Paging from "./Paging";

const GoodsList = () => {
    const { goodsData, currentPage } = useSelector(state => state.goodsR);
    const itemPerPage = 12;
    const totalItemCount = goodsData.length;
    console.log(totalItemCount);
    return (
        <div>
            <CategoryInfoStyle className="categoryInfo">
                <span>{totalItemCount} 개의 상품</span>
                <select name="" id="">
                    <option value="">최근 등록순</option>
                    <option value="">낮은 가격순</option>
                    <option value="">높은 가격순</option>
                    {/* <option value="">인기순</option> */}
                </select>
            </CategoryInfoStyle>
            <GoodsListStyle className="goodslist">
                {
                    goodsData.slice(itemPerPage * (currentPage - 1), itemPerPage * currentPage).map(item => <GoodsItem key={item.id} item={item} />)
                }
            </GoodsListStyle>
            <Paging goodsData={goodsData} currentPage={currentPage} totalItemCount={totalItemCount} itemPerPage={itemPerPage} />
        </div>
    );
};

export default GoodsList;