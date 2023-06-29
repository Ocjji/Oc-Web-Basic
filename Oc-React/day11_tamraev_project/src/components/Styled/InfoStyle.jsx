import styled from 'styled-components'

export const InfoContainer = styled.div`
    &.info {
        #container{position: relative;}
        #container::before{content:'';position: relative;width:100%;height:1056px;background:#f6f3f2;display:block;position:absolute;bottom:0;z-index:1;}
        #container .inner{position: relative;width:1200px;color:#fff;z-index:2;margin: 0 auto;}
    }
`;