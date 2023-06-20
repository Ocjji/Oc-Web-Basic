import styled from 'styled-components'

export const MelonContainer = styled.div`
    width: 1200px;
    margin: auto;   
    h2 {
        padding: 20px 0; 
        font-size: 16px;
    }
`;


export const MelonFormContainer = styled.form`
    &.MelonForm {
        padding-bottom:20px; 
        margin-bottom: 20px; 
        text-align: center; 
        input { 
            width: 50%; 
            height: 50px;  
            border: 1px solid #dcdcdc; 
            padding:3px 25px
        }
    }
`;


export const MelonListContainer = styled.div`
&.MelonList { 
    table {
        width:100% ;
        .w1{ width: 7% }
        .w2{}
        .w3{ width:25% }
        .w4{ width:10% }
        .w5{ width:10% }
        .w6{ width:10% }

        tr:last-child td {
            border-bottom:1px solid #000
        }
        th , td { 
            border-bottom: 1px solid #dcdcdc;
            vertical-align: middle; 
            text-align: center; 
        }
        th { 
            border-top: 1px solid #000;
            height:50px;
        }
        td { 
            padding:5px ;            
            &:nth-child(2) {text-align: left;}
            &:nth-child(3) {text-align: left;}
            img {
                margin-right:20px; 
                vertical-align: middle;
            }
            i {
                font-size: 20px; 
                vertical-align: middle; 
                cursor: pointer;
            }
            &.like i {margin-right: 5px;}
            &.img  {display: flex}
            &.img p {padding-top: 5px;}
            &.img p span{
                display: block; 
                color:#000
            }
        }
    }
}
`;

export const MelonModalBox = styled.div`
&.Modal { 
    .bg { 
        position: fixed;
        width: 100%; 
        height: 100%; 
        left: 0; 
        top: 0; 
        background-color: #000; 
        opacity: 0.7;
    }
    .popup { 
        position: fixed;
        width: 600px; 
        height: 600px; 
        left: 50%; 
        top: 50%; 
        background-color: #fff; 
        transform: translate(-50%, -50%); 
        padding: 20px;
        h2 { font-size: 25px; font-weight: 600;}
        div { 
            width: 100%; 
            height: 450px;           
            overflow: hidden;
            iframe { width: 100%; height: 450px;}
        }
        p { font-size: 25px; margin-top: 10px;}
        span {
            position: absolute; 
            right: 20px; 
            top: 20px;
            cursor: pointer;
            i {font-size: 35px;}
        }
    }
}
`;