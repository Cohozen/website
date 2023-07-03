import { createGlobalStyle } from "styled-components";

export const colors = {
    primary: '#2E5266',
    secondary: '#608399',
    text: '#CBF7FF',
    third: '#ED992A',
};

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  html {
    scroll-behavior: smooth;
    height: 100%;
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${colors.primary};
    height: 100%;
  }

  #root {
    height: 100%;
  }

  a {
    text-decoration: none;
  }
`;
