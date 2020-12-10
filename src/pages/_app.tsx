import GlobalStyles from 'styles/global';
import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title> Title </title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut" href="favicon.svg" />
        <link rel="apple-touch-icon" href="favicon.svg" />
        <meta name="description" content="A simple" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
