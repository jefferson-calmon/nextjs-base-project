import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        border: none;
        box-sizing: border-box;
        font-family: 'Roboto', Helvetica, Arial, sans-serif;
    }

    :root {
        --color-primary: ${({ theme }) => theme.colors.primary};
        --color-secondary: ${({ theme }) => theme.colors.secondary};

        --color-surface: ${({ theme }) => theme.colors.surface};

        --color-title: ${({ theme }) => theme.colors.title};
        --color-text: ${({ theme }) => theme.colors.text};

        --color-background: ${({ theme }) => theme.colors.background};

        --gradient: var(--color-primary), var(--color-secondary);

        --color-error: #e83f5b;
    }

    ::-webkit-scrollbar {
        width: 6px;
        background: transparent;
        padding-right: 3px;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--color-surface);
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
        color: ${({ theme }) => theme.colors.text};
        background: ${({ theme }) => theme.colors.background};
        -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.title};
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

export const GlobalStyle = globalStyle as unknown as (
	props: Record<string, never>
) => JSX.Element;
