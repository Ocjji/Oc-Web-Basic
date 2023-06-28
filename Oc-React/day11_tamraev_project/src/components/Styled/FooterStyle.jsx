import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  text-align: center;
  padding: 60px 0;
  background: #303030;
  .logo {
    opacity: 1;
  }

  .footer_menu {
    position: relative;
    margin-top: 36px;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      display: block;
      width: 100%;
      height: 1px;
      background: #474747;
    }

    li {
      position: relative;
      display: inline-block;
      padding: 0 20px;
      background: #303030;

      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        display: block;
        width: 3px;
        height: 3px;
        margin-top: -2px;
        background: #989898;
      }

      &:first-child:before {
        display: none;
      }

      a {
        opacity: 0.5;
        color: #fff;
        font-size: 18px;
      }
    }
  }

  .copyright {
    display: block;
    color: #707070;
    font-family: 'ht_r';
    font-size: 14px;
    margin-top: 40px;
  }
`;