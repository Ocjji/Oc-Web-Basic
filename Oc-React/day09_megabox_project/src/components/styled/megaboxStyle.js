import styled from 'styled-components'

export const MegaBoxContainer = styled.div`
    width: 1200px;
    margin: auto;
    border: 1px solid #000;
    h2 {
        text-align: center;
        padding: 20px 0; 
        font-size: 24px;
    }
    .selectList {
        margin: 10px;
        width: 400px;
        display: flex;
        justify-content:space-around;
        .selectMenu {
            font-size: 18px;
            text-align: center;
            width: 100px;
            height: 40px;
            line-height: 40px;
            border: 1px solid #503396;
            color: #503396;
            transition:0.2s;
            cursor: pointer;
            &.on {
                background: #503396;
                color:#fff;
            }
            &:hover {
                background: #503396;
                color:#fff;
            }
        }
    }
`;
export const MegaBoxFormContainer = styled.form`
    &.MegaBoxForm {
        padding-bottom:20px; 
        margin-bottom: 20px; 
        text-align: center; 
        vertical-align:middle;
        input { 
            width: 50%; 
            height: 50px;  
            border: 1px solid #dcdcdc; 
            padding:0px 25px;
            line-height: 50px;
            box-sizing: border-box;
        }
        button{
            height: 50px;
            padding:0px 25px;
            margin: 0 10px;
            line-height: 30px;
            border: none;
            color: #fff;
            background: #666;
            box-sizing: border-box;
            font-size: 16px;
            transition:0.3s;
            cursor: pointer;

            &:hover {
                background: #000;
            }
        }
    }
`;
export const MegaBoxListContainer = styled.ul`
    &.MegaBoxList {
        width: 1200px;
        display: flex;
        flex-wrap:wrap;
        justify-content: flex-start;
    }
`;

export const MegaBoxItemContainer = styled.li`
    &.MegaBoxItem {
        position: relative;
        margin:20px 10px;
        padding: 10px;
        width: 280px;
        /* border: 1px solid #000; */
        box-sizing: border-box;
        /* text-align: center; */
        .rankBox{
            display: block;
            text-align: center;
            width: 50px;
            height: 50px;
            line-height:50px;
            font-size: 40px;
            font-style: italic;
            color: #fff;
            position: absolute;
            left: 10px;
            top: 10px;
        }
        .poster{
            display: block;
            margin: auto;
            width: 260px;
            height: 360px;
            cursor: pointer;
        }
        .title{
            width: 260px;
            margin:10px 0;
            display: block;
            font-size:20px;
            line-height: 20px;
            white-space:nowrap;
            overflow: hidden;
            text-overflow:ellipsis;
            .age {
                vertical-align:middle;
                display: inline-block;
                margin:0 10px 4px 0;
                width: 20px;
                height:20px;
            }
        }
        p {
            display: flex;
            justify-content:space-around;
            margin:10px 0;
            em{
                &:first-child::after {
                    content : "";
                    display: inline-block;
                    width:1px;
                    height:14px;
                    background: #000;
                    margin-left:15px;
                }
            }
        }
        div {
            margin:10px 0;
            display: flex;
            justify-content:space-between;
            
            button {
                background: #503396;
                border-radius: 8px;
                color:#fff;
                padding:3px;
                width: 80px;
                cursor: pointer;
                &.like{
                    background: #fff;
                    color:#333;
                    border: 1px solid #999;
                    i {
                        &.xi-heart-o{
                            font-size:20px;
                            vertical-align:middle;
                        }
                        &.xi-heart{
                            color: tomato;
                            font-size:20px;
                            vertical-align:middle;
                        }
                    }
                    em {
                        vertical-align:middle;
                        font-size:16px;
                        margin:0px 5px;
                    }
                }
                &.notDolby {
                    width:170px;
                    line-height:2.4;
                }
            }
        }
    }
`;