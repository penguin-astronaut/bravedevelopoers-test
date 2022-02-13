import operator from '../pages/[operator]';

export interface IOperator {
  name: string;
  linkName: string;
  img: string;
  color: string;
}

export const operators: Array<IOperator> = [
  {
    name: 'МТС',
    img: '/mts.png',
    color: '#f35e5e7a',
    linkName: 'mts',
  },
  {
    name: 'Мегафон',
    img: '/megafon.png',
    color: '#72db917a',
    linkName: 'megafon',
  },
  {
    name: 'Билайн',
    img: '/beeline.png',
    color: '#f3e15b7a',
    linkName: 'beeline',
  },
];

export const getOperatorsLinkName = () => {
  return operators.map(({ linkName }) => {
    return {
      params: {
        operator: linkName,
      },
    };
  });
};

export const getOperator = (param: string) => {
  return operators.find(({ linkName }) => linkName === param);
};
