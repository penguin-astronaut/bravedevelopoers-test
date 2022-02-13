import type { NextPage } from 'next';
import { OperatorList } from '../components/OperatorList';
import { Card } from '../components/Card';
import { IOperator, operators } from '../lib/operators';

type HomePageProps = {
  operators: Array<IOperator>;
};

const Home: NextPage<HomePageProps> = ({ operators }) => {
  return (
    <>
      <Card title={'Выберите оператора'}>
        <OperatorList operators={operators} />
      </Card>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      operators,
    },
  };
}
