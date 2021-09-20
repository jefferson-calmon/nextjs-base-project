import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        border: none;
        box-sizing: border-box;
        font-family: 'Roboto', Helvetica, Arial, sans-serif;
    }

    :root {
        --color-primary: ;
        --color-secondary: ;

        --color-error: #d32f2f;
        --color-success: #4BB543;
        --color-warning: #FFAD32;
        
        --color-title: ;
        --color-text: ;
    }

    .content {
        width: 1120px;
        margin: 0 auto;
    }

    html {
        font-size: 10px;
        scroll-behavior: smooth;
    }

    body.active {
        overflow: hidden;
    }

    html, body, #root {
        position: relative;
        min-height: 100vh;
        color: var(--color-text);
        background: var(--color-background);
        -webkit-font-smoothing: antialiased;
    }
    
    h1, h2, h3, h4 {
        color: var(--color-title);
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    
    button {
        cursor: pointer;
    }

    img {
        user-select: none;
        pointer-events: none;
    }

    .shadow {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
    }

    @media (max-width: 1280px) {
        html {
            font-size: 9px;
        }

        .content {
            width: 80%;
        }
    }

    @media (max-width: 1024px) {
        html {
            font-size: 8px;
        }
    }

    @media (max-width: 768px) {
        html {
            font-size: 7px;
        }
        .content {
            width: 90%;
        }
    }
    
    @media (max-width: 425px) {
        html {
            font-size: 6px;
        }
    }
`;
