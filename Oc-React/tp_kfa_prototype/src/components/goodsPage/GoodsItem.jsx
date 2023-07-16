import React from 'react';
import { GoodsItemStyle } from "../../styled/GoodsStyle";

const GoodsItem = ({ item }) => {
    const { id, img, brand, name, price, extension, discount } = item
    return (
        <GoodsItemStyle className="goodsitem">
            <div>
                <img src={`./images/goods/${img}.${extension}`} alt={name} />
            </div>
            <p>
                <em className="goodsbrand">{brand}</em><br />
                <strong className="goodsName">{name}</strong><br />
                <span className="goodsPrice">
                    {
                        discount && <b style={{ color: "red", marginRight: 5 }}>{discount}%</b>
                    }
                    <b>{(price * (1 - (discount / 100))).toLocaleString("kr-KR")}</b>
                    원</span>
                {
                    discount && <b style={{ color: "gray", marginLeft: 5, textDecoration: "line-through" }}>{price.toLocaleString("kr-KR")}원</b>
                }
            </p>
        </GoodsItemStyle>
    );
};

export default GoodsItem;