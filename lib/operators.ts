import operators from '../operators.json';

export interface IOperatorNew {
  name: string;
  img: string;
  color: string;
  isCreated?: boolean;
}

export interface IOperator extends IOperatorNew {
  id: number;
}

export const getOperatorsPath = () => {
  return operators.map(({ id }) => {
    return {
      params: {
        operator: String(id),
      },
    };
  });
};

export const getOperator = (queryId: number): IOperator | false => {
  return operators.find(({ id }) => id === queryId) ?? false;
};

export const addOperator = (operatorNew: IOperatorNew) => {
  return operators.push({ ...operatorNew, id: Date.now() });
};

export const getOperators = (): Array<IOperator> => operators;
