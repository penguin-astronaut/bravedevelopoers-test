import React, { ReactNode, useContext, createContext } from 'react';

export interface IOperator {
  name: string;
  linkName: string;
  img: string;
  color: string;
}

type PropsType = {
  children: ReactNode;
};

const OperatorsContext = createContext<Array<IOperator> | null>(null);

export const OperatorsWrapper = ({ children }: PropsType) => {
  const operators: Array<IOperator> = [
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

  return (
    <OperatorsContext.Provider value={operators}>
      {children}
    </OperatorsContext.Provider>
  );
};

export const useOperatorContext = () => useContext(OperatorsContext);
