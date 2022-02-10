import type { NextPage } from 'next';
import { OperatorList } from '../components/OperatorList';

const Home: NextPage = () => {
  return (
    <div className={'wrapper'}>
      <div className="card">
        <OperatorList />
      </div>
    </div>
  );
};

export default Home;
