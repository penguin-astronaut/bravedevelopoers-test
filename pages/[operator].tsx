import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Payment: NextPage = () => {
  const router = useRouter();
  const { operator } = router.query;
  return <p>Operator: {operator}</p>;
};

export default Payment;
