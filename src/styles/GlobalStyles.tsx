import { createGlobalStyle } from "styled-components";
import { myTheme } from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        /* background-color: ${myTheme.colors.grey.dark}; */
        font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    
    a {
      text-decoration: none;
    }

    ul {
      list-style: none;
    }

    button {
      border: none;
      background-color: unset;
    }
`