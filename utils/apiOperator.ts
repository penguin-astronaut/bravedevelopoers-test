import { INewOperator, IOperator } from './Types';

const URL = 'https://operator-api.herokuapp.com/';

export const getAll = async (): Promise<Array<IOperator>> => {
  const response = await fetch(URL);
  if (response.ok) {
    return (await response.json()) as Array<IOperator>;
  }

  throw new Error('Ошибка получения операторов');
};

type getBySlugResult = {
  operator: IOperator;
  notFound: boolean;
};

export const getBySlug = async (slug: string): Promise<getBySlugResult> => {
  const response = await fetch(URL + slug);
  if (response.ok) {
    return {
      operator: (await response.json()) as IOperator,
      notFound: false,
    };
  } else if (response.status === 404) {
    return {
      operator: {} as IOperator,
      notFound: true,
    };
  }
  throw new Error('Ошибка получения оператора');
};

export const addNew = async (operator: INewOperator) => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      mode: 'cors',
    },
    body: JSON.stringify({
      ...operator,
      isUserCreated: true,
    }),
  });

  if (response.ok) {
    return (await response.json()) as Array<IOperator>;
  }

  throw new Error('Ошибка обавления оператора');
};
