import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap');

    * {

        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: 'Poppins', sans-serif;
        list-style: none;
    }

    body, html, #root {
        height: 100%;
        overflow: hidden;
    }

    button {
        border: none;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }

    .sb-avatar__image {
        object-fit: cover !important;
    }
`;
export default GlobalStyles;
