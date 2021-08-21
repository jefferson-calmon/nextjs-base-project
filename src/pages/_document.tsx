import Document, { Head, Html, NextScript, Main, DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
      ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage
    
        try {
          ctx.renderPage = () =>
            originalRenderPage({
              enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
            })
    
          const initialProps = await Document.getInitialProps(ctx)
          return {
            ...initialProps,
            styles: (
              <>
                {initialProps.styles}
                {sheet.getStyleElement()}
              </>
            )
          }
        } finally {
          sheet.seal()
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="theme-color" content="Project theme" />
                    <meta
                        name="description"
                        content="Project description"
                    />
                    <meta name="robots" content="index, follow" />
                    <meta
                        name="author"
                        content="Jefferson Calmon - https://jeffersoncalmon.dev"
                    />
                    <meta
                        name="copyright"
                        content="Project Copyright - https://Project url"
                    />

                    {/* <!-- Open Graph / Facebook --> */}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="Project url" />
                    <meta property="og:title" content="Project title" />
                    <meta
                        property="og:description"
                        content="Project description"
                    />
                    <meta property="og:image" content="assets/open-graph-image.png" />

                    {/* <!-- Icons --> */}
                    <link rel="icon" href="favicon.ico" />
                    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                    <link rel="apple-touch-icon" href="logo.png" />

                    {/* <!-- Twitter --> */}
                    <meta property="twitter:card" content="assets/open-graph-image.png" />
                    <meta property="twitter:url" content="Project url" />
                    <meta property="twitter:title" content="Project title" />
                    <meta
                        property="twitter:description"
                        content="Project description"
                    />
                    <meta property="twitter:image" content="assets/open-graph-image.png" />

                    <link rel="canonical" href="https://Project url" />

                    {/* Fonts */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                    <link
                      href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
                      rel="stylesheet"
                    />

                    {/* Icons */}
                    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
                </Head>

                <body>
                    <Main /> 
                    <NextScript /> 
                </body>
            </Html>
        )
    }
}