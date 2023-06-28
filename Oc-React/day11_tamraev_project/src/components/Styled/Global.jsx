import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* other styles */
  #wrap {overflow:hidden; position:relative; width:100%; min-width:1280px; max-width:1920px; margin:0 auto;}

  .inner {

  }
  body {
    font-size: 16px;
    line-height: 1.6;
    font-family: 'Noto Sans KR', sans-serif;
    color:#333;
  }
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, input, textarea, button, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {margin:0; padding:0; border:0; -webkit-box-sizing:border-box; box-sizing:border-box; -moz-box-sizing:border-box;}
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {display: block}
h1,h2,h3,h4,h5,h6 {font-size:1em; font-weight:normal}
ol, ul {list-style:none}
table {width:100%; border-collapse:collapse; border-spacing:0}
a {text-decoration:none; outline:none;}
a:hover {text-decoration:none}
legend, caption, hr {display:none}
em {font-style:normal}
img {vertical-align:top}
html {height:100%}
body {width:100%; height:100%}
button {border:0; background-color:transparent; cursor:pointer; outline:none;}
input {appearance: none; border-radius:0; -webkit-appearance: none; -webkit-border-radius: 0;}
input[type=text]::-ms-clear {display:none;}
.ir {position:absolute; overflow:hidden; width:0px; height:0px; font-size:0}
`
export default GlobalStyle;