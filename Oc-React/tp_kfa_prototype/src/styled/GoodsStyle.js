import styled from 'styled-components';

export const GoodsNavStyle = styled.nav`
    margin-top: 130px;
    ul {
        width: 300px;
        li {
            cursor: pointer;
            height: 40px;
            font-weight: 600;
            font-size: 16px;
            &.kfaSelect {
                height: 150px;
            }
            &.wearSelect {
                height: 180px;
            }

            ul{  
                margin-top: 5px;              
                li{
                    height: 30px;
                    margin-left: 10px;
                    font-weight: 400;
                    font-size: 14px;
                }
            }
        }
    }
`;
export const CategoryInfoStyle = styled.div`
    margin-top: 100px;
    &.categoryInfo {
        display: flex;
        justify-content:space-between;
    }
`;
export const GoodsListStyle = styled.ul`
    &.goodslist{
        width: 1100px;
        margin: auto;
        /* height: 1250px; */
        border: 1px solid #000;
        display: flex;
        justify-content:space-between;
        flex-wrap: wrap;
    }
    
`;
export const GoodsItemStyle = styled.li`
    &.goodsitem {
        /* border: 1px solid #000; */
        width: 250px;
        height: 430px;        
        div{
            text-align: center;
            img{                
                width: 250px;
                height: 250px;
            }
        }
        p {
            font-weight: 700;
            em {
                display: inline-block;
                margin: 10px 0;
                font-size: 14px;
            }
            strong {
                display: inline-block;
                font-size: 16px;
                margin-bottom: 15px;
                line-height: 1.2;
            }
            span {
                font-size: 14px;
                b {
                    font-size: 20px;
                }
            }
        }
    }
`;

export const PagingStyle = styled.p`
    &.paging {
        margin: 20px 0;
        text-align: center;
        button{
            display: inline-block;
            width: 30px;
            height: 30px;
            font-size: 18px;
            border: none;
            border-radius : 50%;
            margin-right: 10px;
        }
    }
`;