import type { NextPage } from 'next';
import Head from 'next/head';
import { OperatorList } from '../components/OperatorList';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Терминал оплаты мобильной связи</title>
      </Head>
      <div className="card">
        <OperatorList />
      </div>
    </>
  );
};

export default Home;
