import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'RixInooAriDuriR';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2207-01@1.0/RixInooAriDuriR.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

iframe {
    display: none;
    //axios error disable
}

body {
  margin: 0;
  padding: 0;
  font-family: "Pretendard-Regular", sans-serif;
}

div{
  border: none;
  outline: none;
}

input{
  border:none;
}
`;

export default GlobalStyle;
