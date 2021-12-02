import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        border: none;
        box-sizing: border-box;
        font-family: 'Work Sans', Helvetica, Arial, sans-serif;
    }

    :root {
        --color-primary-darkest: ;
        --color-primary-dark: #934515;
        --color-primary: #D17818;
        --color-primary-light: #F0C07D;
        --color-primary-lightest: #FCF0D4;

        --color-secondary-darkest: #07294F;
        --color-secondary-dark: #145077;
        --color-secondary: #2B81A2;
        --color-secondary-light: #7CD8E4;
        --color-secondary-lightest: #D4FAF9;

        --color-gray-1: #F1F3F5;
        --color-gray-2: #DEE2E6;
        --color-gray-3: #ADB5BD;
        --color-gray-4: #515961;
        --color-gray-5: #212529;

        --color-error: #d32f2f;
        --color-success: #4BB543;
        --color-warning: #FFAD32;

        --color-title: var(--color-gray-5);
        --color-text: var(--color-gray-4);
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
        font-family: 'Poppins', sans-serif;
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

    i {
        font-style: normal;
        font-weight: normal !important;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
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
