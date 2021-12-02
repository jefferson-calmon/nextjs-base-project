import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
)
export default MyApp;
