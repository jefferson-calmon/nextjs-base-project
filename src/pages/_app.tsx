import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { PandoraConfig } from 'pandora-tools';

import { app } from 'config/app';
import { ThemeProvider, light } from 'theme';

import { GlobalStyle } from '../styles/global';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
	<ThemeProvider theme={light}>
		<GlobalStyle />
        <PandoraConfig />

        <DefaultSeo title={app.name} />

        <Component {...pageProps} />
	</ThemeProvider>
);

export default MyApp;
