import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme["yellow-700"]};
  }

  body {
    background-color: ${(props) => props.theme.background};
    line-height: 130%;
  }

`;
