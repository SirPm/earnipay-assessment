import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Aeonik';
    src: url('../assets/font/Aeonik-Regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Aeonik';
    src: url('../assets/font/Aeonik-Bold.otf') format('opentype');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Aeonik';
    src: url('../assets/font/Aeonik-Light.otf') format('opentype');
    font-weight: 300;
    font-style: normal;
  }
  
  *, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Aeonik', sans-serif;
  }
`;
