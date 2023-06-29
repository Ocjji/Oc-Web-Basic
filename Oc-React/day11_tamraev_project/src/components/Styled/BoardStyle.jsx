import styled from "styled-components";

export const BoardContainer = styled.div`
    &#boardcontainer {
    position: relative;

    .inner {
      position: relative;
      width: 1200px;
      margin: 0 auto;
      padding-top: 123px;
      /* min-height: 800px; */
    }

    h3 {
      font-size: 40px;
      line-height: 68px;
      font-weight: 700;
      text-align: center;
    }

    p.sub_tit {
      font-size: 18px;
      line-height: 30px;
      color: #666;
      text-align: center;
    }

    .notice_list {
      margin-top: 45px;
      border-bottom: 1px solid #000;
    }

    .notice_list table {
      table-layout: fixed;
    }

    .notice_list table thead th {
      height: 46px;
      line-height: 46px;
      color: #000;
      font-weight: 700;
      font-size: 16px;
      border-top: 1px solid #000;
      border-bottom: 1px solid #000;
    }

    .notice_list table tbody td {
      color: #626262;
      font-size: 18px;
      text-align: center;
      border-top: 1px solid #d8d5d5;
      padding: 37px 10px 37px;
    }

    .notice_list table tbody td a {
      overflow: hidden;
      display: block;
      width: 100%;
      color: #626262;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: break-all;
    }

    .notice_list table tbody td a:hover {
      /*text-decoration: underline;*/
    }

    .notice_list table tbody td.subject {
      text-align: left;
      letter-spacing: -1px;
    }

    .notice_list table tbody td strong {
      color: #000;
    }

    .notice_list table tbody td strong.noti {
      color: #007fa8;
    }

    .paginate {
      text-align: center;
      margin-top: 41px;
      margin-bottom: 105px;
    }

    .paginate a {
      display: inline-block;
      width: 46px;
      height: 46px;
      font-size: 0;
      vertical-align: middle;
    }

    .paginate ol,
    .paginate ol li {
      display: inline-block;
    }

    .paginate ol a {
      color: #626262;
      font-size: 18px;
      line-height: 46px;
      letter-spacing: 0.015em;
    }

    .paginate a.on {
      color: #007fa8;
      font-family: 'ht_b';
    }

    .paginate .btn_prev {
      background: url('../img/noti/btn_arrow_prev.png') 50% 50% no-repeat;
    }

    .paginate .btn_next {
      background: url('../img/noti/btn_arrow_next.png') 50% 50% no-repeat;
    }

    .paginate .btn_prev_2 {
      background: url('../img/noti/btn_arrow_prev2.png') 50% 50% no-repeat;
    }

    .paginate .btn_next_2 {
      background: url('../img/noti/btn_arrow_next2.png') 50% 50% no-repeat;
    }

    .notice_view {
      border-top: 1px solid #000;
      border-bottom: 1px solid #000;
      padding-top: 30px;
      padding-bottom: 73px;
      margin-top: 65px;
    }

    .notice_view h4 {
      font-family: 'hh_r';
      font-size: 30px;
      line-height: 1;
      text-align: center;
      margin-bottom: 13px;
    }

    .notice_view p.date {
      color: #666;
      font-size: 15px;
      line-height: 1;
      text-align: center;
      padding-bottom: 30px;
      border-bottom: 1px solid #d8d5d5;
    }

    .notice_view p.view_sub {
      text-align: left;
      padding-top: 43px;
      font-size: 18px;
      line-height: 30px;
      color: #666;
    }

    .slide_box {
      overflow: hidden;
      width: 1200px;
      display: block;
      position: relative;
      margin: 0 auto;
      margin-top: 50px;
    }

    .slide_box .items {
      display: inline-block;
      width: 1100px;
      background: #fff;
      margin: 0 25px;
      outline: none;
    }

    .slide_box .items img {
      width: 100%;
    }

    .slide_box button.slick-prev,
    .slide_box button.slick-next {
      width: 50px;
      height: 100%;
      display: block;
      position: absolute;
      top: 0;
      left: 0px;
      background: #fff url('../img/noti/btn_arrow2_prev_on.png') no-repeat;
      background-position: 50%;
      font-size: 0;
      z-index: 1;
      outline: none;
    }

    .slide_box button.slick-next {
      left: auto;
      right: 0px;
      background: #fff url('../img/noti/btn_arrow2_next_on.png') no-repeat;
      background-position: 50%;
    }

    .slide_box button.slick-prev.slick-disabled {
      background: #fff url('../img/noti/btn_arrow2_prev_off.png') no-repeat;
      background-position: 50%;
    }

    .slide_box button.slick-next.slick-disabled {
      background: #fff url('../img/noti/btn_arrow2_next_off.png') no-repeat;
      background-position: 50%;
    }

    .paginate {
      text-align: center;
      margin-top: 50px;
      overflow: hidden;
      margin-bottom: 120px;
    }

    .paginate a {
      display: inline-block;
      width: 46px;
      height: 46px;
      font-size: 0;
      vertical-align: middle;
    }

    .paginate a.btn_prev::before {
      content: '';
      background: url('../img/noti/btn_arrow_prev.png') no-repeat;
      width: 8px;
      height: 13px;
      position: absolute;
      left: 0;
      top: 19px;
    }

    .paginate a.btn_list {
      padding: 0 70px;
      font-size: 18px;
      line-height: 55px;
      height: 55px;
      color: #fff;
      font-family: 'hh_b';
      background: #002c5f;
      display: inline-block;
      width: auto;
    }

    .paginate a.btn_next::after {
      content: '';
      background: url('../img/noti/btn_arrow_next.png') no-repeat;
      width: 8px;
      height: 13px;
      position: absolute;
      right: 0;
      top: 19px;
    }

    .paginate a.btn_prev,
    .paginate a.btn_next {
      font-size: 18px;
      color: #000;
      width: auto;
      font-family: 'hh_r';
      padding-right: 20px;
      position: relative;
      background-image: none;
      padding-top: 14px;
      vertical-align: top;
    }

    .paginate a.btn_prev.off,
    .paginate a.btn_next.off {
      opacity: 0.3;
    }

    .paginate a.btn_prev {
      padding-left: 20px;
      float: left;
      padding-right: 0;
    }

    .paginate a.btn_next {
      float: right;
    }
  }
`;