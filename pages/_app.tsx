import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { Layout } from '../components/Layout';

const GlobalStyle = createGlobalStyle`
  :root {
    --mainColor: #00bcd4;
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
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
