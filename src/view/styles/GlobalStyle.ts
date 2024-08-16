import { createGlobalStyle } from 'styled-components';

import { THEME } from './theme';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Open Sans", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
    background-color: ${THEME.colors.darkGray};
  }

  body, button, input, span, p {
    font-family: "Open Sans", sans-serif;
  } 

  button {
    cursor: pointer;
  }
`;
