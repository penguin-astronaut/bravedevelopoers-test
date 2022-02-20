import { HttpError } from '../components/HttpError';

const Page404 = () => {
  return (
    <HttpError code={'404'} message={'Страница не найден!'} isShowLink={true} />
  );
};

export default Page404;
