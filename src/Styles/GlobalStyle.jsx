import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
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
