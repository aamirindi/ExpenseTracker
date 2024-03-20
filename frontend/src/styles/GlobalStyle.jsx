import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    :root {
        --primary-color: #222260;
        --primart-color2: rgba(34, 34, 96, 0.6);
        --primart-color3: rgba(34, 34, 96, 0.4);
        --primart-color4: rgba(34, 34, 96, 1);
        --bg-color: rgba(252, 246, 249, 0.78);
        --color-green: #42ad00;
        --color-grey: #aaa;
        --color-accent: #f56692;
        --color-delete: #ff0000;
    }

    body {
        font-family: 'Poppins', sans-serif;
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        overflow: hidden;
        color: rgba(34, 34, 96, .6);
    }
`;
