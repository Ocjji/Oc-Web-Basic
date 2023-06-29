import styled from 'styled-components'

export const MainVisual = styled.div`

.main_key_visual {
    position: relative;
}

.main_key_visual .main_slider {
    overflow: hidden;
    position: relative;
    left: 50%;
    width: 1920px;
    height: 510px;
    margin-left: -960px
}

.main_key_visual .main_slider .items {
    position: absolute;
    left: 0;
    top: 0;
    display: inline-block;
    width: 100%;
    height: 510px;
}

.main_key_visual .main_slider .items:first-child {
    z-index: 10
}

.main_key_visual .main_slider .slick-list .items.first img {
    transform: scale(1.2);
    animation: mainSlider 7s forwards ease;
}

@keyframes mainSlider {
    from {
        transform: scale(1.2);
    }

    to {
        transform: scale(1);
    }
}

.main_key_visual .main_slider .items img {
    transition: all 10s ease;
    transform: scale(1.2);
}

.main_key_visual .main_slider .items.slick-active img {
    transform: scale(1);
}

.main_key_visual .main_slider .slick-dots {
    z-index: 9999;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: 580px;
    transform: translateY(-50%)
}

.main_key_visual .main_slider .slick-dots li {
    position: relative;
}

.main_key_visual .main_slider .slick-dots li button {
    position: relative;
    width: 10px;
    height: 10px;
    font-size: 0;
    border-radius: 100%;
    margin: 15px 0;
    background: #fff;
    outline: 0;
}

.main_key_visual .main_slider .slick-dots li:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    display: block;
    width: 30px;
    height: 30px;
    margin: -16px 0 0 -16px;
    border-radius: 100%;
    border: 1px solid #fff;
    transition: all 0.5s ease;
    transform: scale(0);
    opacity: 0;
}

.main_key_visual .main_slider .slick-dots li.slick-active:before {
    transform: scale(1);
    opacity: 1;
}

.main_key_visual .main_title {
    z-index: 9999;
    display: inline-block;
    position: absolute;
    pointer-events: none;
    left: 50%;
    top: 180px;
    width: 500px;
    margin-left: -600px;
}

.main_key_visual .main_title h2 {
    display: inline-block;
    color: #fff;
    font-weight: 700;
    font-size: 56px;
}

.main_key_visual .main_title h3 {
    display: inline-block;
    color: #fff;
    /* font-family: 'ht_m'; */
    font-size: 21px;
    line-height: 35px;
    margin-top: 20px
}

.main_key_visual .arrow {
    z-index: 9999;
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 32px;
    height: 20px;
    margin-left: -16px;
    background: url(../images/main/main_slider_arrow.png) no-repeat
}

.main_key_visual .arrow:before, .main_key_visual .arrow:after {
    content: '';
    position: absolute;
    left: 100%;
    bottom: 0;
    display: block;
    width: 1920px;
    height: 20px;
    background: #fff
}

.main_key_visual .arrow:after {
    left: auto;
    right: 100%;
}
`; 