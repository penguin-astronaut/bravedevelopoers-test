import Head from 'next/head';
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { Layout } from '../components/Layout';

const GlobalStyle = createGlobalStyle`
  :root {
    --mainColor: #00bcd4;
    --errorColor: #e91e63;
    --borderRadius: 6px;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, Arial, sans-serif;
  }
  body {
    background-color: #dedede;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Терминал оплаты</title>
      </Head>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
