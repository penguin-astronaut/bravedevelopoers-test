import { HttpError } from '../components/HttpError';

const Page500 = () => {
  return (
    <HttpError code={'505'} message={'В работе приложения произошла ошибка'} />
  );
};

export default Page500;
