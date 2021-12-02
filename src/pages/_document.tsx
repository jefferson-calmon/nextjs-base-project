import Document, {
	Head,
	Html,
	NextScript,
	Main,
	DocumentContext,
	DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render(): JSX.Element {
		return (
			<Html>
				<Head>
					<meta charSet="utf-8" />
					<meta name="theme-color" content="#fff" />
					<meta
						name="description"
						content="Find and create stylish, modern invitation designs for any event, meeting or occasion. Everything in the easiest and easiest way possible."
					/>
					<meta name="robots" content="index, follow" />
					<meta
						name="author"
						content="YOUDevelop - https://youdevelop.app"
					/>
					<meta
						name="copyright"
						content="EasyInvite - https://youdevelop.app"
					/>

					{/* <!-- Open Graph / Facebook --> */}
					<meta property="og:type" content="website" />
					<meta property="og:url" content="youdevelop.app" />
					<meta property="og:title" content="EasyInvite" />
					<meta
						property="og:description"
						content="Find and create stylish, modern invitation designs for any event, meeting or occasion. Everything in the easiest and easiest way possible."
					/>
					<meta
						property="og:image"
						content="assets/open-graph-image.png"
					/>

					{/* <!-- Icons --> */}
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicon-16x16.png"
					/>
					<link rel="manifest" href="/site.webmanifest" />

					{/* <!-- Twitter --> */}
					<meta
						property="twitter:card"
						content="assets/open-graph-image.png"
					/>
					<meta property="twitter:url" content="youdevelop.app" />
					<meta property="twitter:title" content="EasyInvite" />
					<meta
						property="twitter:description"
						content="Find and create stylish, modern invitation designs for any event, meeting or occasion. Everything in the easiest and easiest way possible."
					/>
					<meta
						property="twitter:image"
						content="assets/open-graph-image.png"
					/>

					<link rel="canonical" href="https://youdevelop.app" />

					{/* Fonts */}
					<link
						rel="preconnect"
						href="https://fonts.googleapis.com"
					/>
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin=""
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Work+Sans:wght@300;400;500;600&display=swap"
						rel="stylesheet"
					/>

					{/* Icons */}
					<link
						rel="stylesheet"
						href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
						integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
						crossOrigin="anonymous"
					/>
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
