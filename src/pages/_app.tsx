import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
)
export default MyApp;
