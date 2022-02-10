import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-family: Arial, sans-serif;
  }
  body {
    background-color: #dedede;
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
  }
  .card {
    border: 0.5px solid rgba(0, 0, 0, 0.08);
    border-radius: 6px;
    background: #fff;
    overflow: hidden;
  }
  .title {
    font-size: 25px;
    font-weight: 6000;
    margin-bottom: 20px;
    text-align: center;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
