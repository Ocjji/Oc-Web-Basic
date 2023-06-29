import styled from 'styled-components';

export const Header = styled.header`
  z-index: 10000;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;

  .inner {
    position: relative;
    left: 50%;
    top: 0;
    width: 1200px;
    color: #fff;
    padding: 34px 0;
    margin-left: -600px;
  }

  h1 {
    font-size: 0;
  }

  .btn_total {
    z-index: 11;
    position: absolute;
    right: 0;
    top: 34px;
    width: 30px;
    height: 21px;
    font-size: 0;

    i {
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 3px;
      background: #fff;
      transition: all 0.3s ease;
    }
  }

  &.blue .btn_total i {
    background: #002c5f;
  }

  .btn_total i:nth-child(2) {
    top: 9px;
  }

  .btn_total i:nth-child(3) {
    top: 18px;
  }

  .total_menu {
    position: absolute;
    left: 0;
    top: -700px;
    width: 100%;
    height: 700px;
    background: #fff;
    transition: all 0.5s ease;

    &::before {
      content: "";
      position: fixed;
      left: 0;
      top: 0;
      display: none;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
    }

    .gnb_img_slider {
      overflow: hidden;
      z-index: 10;
      float: left;
      width: 50%;
      height: 700px;
      background: #fff;

      .items {
        position: relative;
        overflow: hidden;
        display: inline-block;
        width: 100%;
        height: 700px;
        outline: 0;

        img {
          position: absolute;
          left: 50%;
          top: 0;
          margin-left: -480px;
          transition: all 5s ease;
          transform: scale(1.1);
        }
      }

      .items.first img {
        transform: scale(1.1);
        animation: mainSlider 5s forwards ease;
      }

      @keyframes mainSlider {
        from {
          transform: scale(1.1);
        }
        to {
          transform: scale(1);
        }
      }

      .items.slick-active img {
        transform: scale(1);
      }
    }

    .gnb_menu {
      z-index: 10;
      position: relative;
      float: right;
      width: 50%;
      height: 700px;
      padding-top: 87px;
      padding-left: 140px;
      background: #fff;

      ul li {
        width: 460px;
        padding: 40px 0 38px;
        border-top: 1px solid #e5e5e5;

        &:first-child {
          border-top: 0;
        }

        a {
          position: relative;
          color: #000;
          font-size: 40px;
          padding-left: 20px;

          &::before {
            opacity: 0;
            content: '';
            position: absolute;
            left: 0;
            top: 20px;
            display: block;
            width: 10px;
            height: 10px;
            border-radius: 100%;
            background: #007fa8;
            transition: top 0.5s ease-out;
          }

          &.on,
          &:hover {
            font-weight:700;
          }

          &.on::before,
          &:hover::before {
            opacity: 1;
            top: 0px;
          }
        }
      }
    }
  }

  &.total_open {
    .total_menu {
      top: 0;

      &::before {
        display: block;
      }
    }

    .btn_total i {
      background: #000;
    }

    .btn_total i:nth-child(1) {
      top: 50%;
      margin-top: -1.5px;
      transform: rotate(-45deg);
    }

    .btn_total i:nth-child(2) {
      display: none;
    }

    .btn_total i:nth-child(3) {
      top: 50%;
      margin-top: -1.5px;
      transform: rotate(45deg);
    }

    .btn_total:hover i {
      transform: rotate(0);
    }
  }
`;
