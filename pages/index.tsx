import type { NextPage } from 'next';
import Head from 'next/head';
import { OperatorList } from '../components/OperatorList';
import { Card } from '../components/Card';

const Home: NextPage = () => {
  return (
    <>
      <Card title={'Выберите оператора'}>
        <OperatorList />
      </Card>
    </>
  );
};

export default Home;
