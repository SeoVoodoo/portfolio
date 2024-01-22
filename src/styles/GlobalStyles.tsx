import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({theme}) => theme.bg};
        font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        //transition: all 0.25s linear;
        font-weight: 400;
        line-height: 120%;
        font-style: normal;
        font-size: 16px;
    }

    section {
      padding: 60px 0 90px;
    }

     
    
    a {
      text-decoration: none;
      color: ${({theme}) => theme.colors.link};
      transition: color 0.25s linear;
    }

    ul {
      list-style: none;
    }

    button {
      border: none;
      background-color: unset;
    }
`