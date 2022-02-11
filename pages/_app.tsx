import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { OperatorsWrapper } from '../operators.context';
import { Layout } from '../components/Layout';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
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
      <OperatorsWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </OperatorsWrapper>
    </>
  );
}

export default MyApp;
