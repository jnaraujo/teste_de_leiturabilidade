import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    --merriweather-font: "Merriweather", serif;
    --inter-font: "Inter", sans-serif;

    box-sizing: border-box;
    scroll-behavior: smooth;
    
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-size: 18px;
    @media (max-width: 1280px) {
      font-size: 16px;
    }
    line-height: 1.5;
  }

  * {
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    overflow-x: hidden;
    position: relative;

    font-family: var(--inter-font);
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.3;
  }

  h1 {
    font-size: 2.488rem;
  }
  h2 {
    font-size: 2.074rem;
  }

  h3 {
    font-size: 1.728rem;
  }

  h4 {
    font-size: 1.44rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  h6 {
    font-size: 0.875rem;
  }

  p {
    font-size: 1rem;
  }

`;

export { GlobalStyles };
