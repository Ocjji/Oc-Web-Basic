import styled from 'styled-components'

export const ContentContainer = styled.div`
    &.contents {
        width: 1200px;
  margin: 35px auto 0;
  padding-bottom: 100px;

  h4 {
    /* font-family: 'hh_m'; */
    font-weight: 700;
    font-size: 45px;
    text-align: center;
  }

  .category_menu {
    position: relative;
    margin-top: 40px;
    border-top: 1px solid #e4dcd3;
    border-bottom: 1px solid #e4dcd3;

    > ul {
      font-size: 0;

      > li {
        display: inline-block;
        padding: 0 22px;

        a {
          display: block;
          height: 60px;
          color: #666;
          /* font-family: 'hh_r'; */
          
          font-size: 16px;
          font-weight: 700;
          padding-top: 20px;

          &.on {
            color: #007fa8;
          }

          &:hover {
            color: #007fa8;
          }
        }
      }
    }

    .line {
      position: absolute;
      left: 0;
      top: 57px;
      width: 30px;
      height: 3px;
      background: #007fa8;
      transition: all 0.5s ease-out;
    }

    .btn_search {
      position: absolute;
      right: 0;
      top: 10px;
      width: 90px;
      height: 40px;
      color: #666;
      /* font-family: 'hh_r'; */
      font-size: 16px;
      text-align: left;
      border-radius: 20px;
      padding-left: 44px;
      background: #e4dcd3 url(../images/main/btn_search.png) 18px 50% no-repeat;

      span {
        display: none;
      }

      &.on {
        background: #e4dcd3 url(../images/main/btn_search_close.png) 20px 50% no-repeat;
        font-size: 0;

        span {
          display: block;
          font-size: 16px;
        }
      }
    }

    .search_box {
      display: none;
      z-index: 10;
      position: relative;
      left: 0;
      top: 100%;
      width: 100%;
      font-size: 0;
      text-align: center;
      padding: 45px 0;
      background: #e4dcd3;

      .input_box {
        position: relative;
        display: inline-block;

        input {
          width: 640px;
          height: 60px;
          /* font-family: 'ht_r'; */
          font-size: 21px;
          padding: 0 40px 0 24px;
          outline: 0;
        }

        .btn_clear {
          display: none;
          position: absolute;
          right: 25px;
          top: 50%;
          width: 12px;
          height: 12px;
          font-size: 0;
          margin-top: -6px;
          background: url(../images/main/btn_clear.png) no-repeat;
        }

        .rec_list {
          display: none;
          position: absolute;
          left: -2px;
          right: -2px;
          top: 100%;
          text-align: left;
          border: 2px solid #e4dcd3;
          background: #fff;

          li a {
            display: block;
            width: 100%;
            color: #000;
            /* font-family: 'ht_r'; */
            font-size: 17px;
            padding: 15px 24px 20px;

            &:hover {
              background: #f6f3f2;
            }

            span {
              color: #007fa8;
            }
          }
        }

        .btn_search_result {
          display: inline-block;
          width: 60px;
          height: 60px;
          font-size: 0;
          vertical-align: top;
          background: #007fa8 url(../images/main/btn_search_result.png) center center no-repeat;
        }
      }
    }

    .total_count {
      display: none;
      color: #666;
      /* font-family: 'hh_r'; */
      font-size: 18px;
      padding: 10px 0;
    }
  }

  .contents_list {
    margin-top: 50px;

    ul {
      overflow: hidden;
      font-size: 0;
      margin-left: -24px;

      li {
        overflow: hidden;
        display: inline-block;
        width: 384px;
        height: 384px;
        margin: 0 0 24px 24px;

        img {
          width: 100%;
          min-height: 384px;
        }

        /* a:hover img {
          transform: scale(1.05);
        } */
      }
    }
  }

  .btn_more {
    position: relative;
    display: block;
    width: 50px;
    /* font-family: 'hh_r'; */
    font-size: 16px;
    margin: 40px auto 0;
    padding-top: 40px;

    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      left: 50%;
      top: 0;
    }

    &::before {
      width: 2px;
      height: 32px;
      margin-left: -1px;
      background: #000;
    }

    &::after {
      top: 15px;
      width: 32px;
      height: 2px;
      margin-left: -16px;
      background: #000;
    }
  }

    }
`;