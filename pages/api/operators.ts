import * as fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();

export interface IOperator {
  id: number;
  name: string;
  img: string;
  color: string;
  isCreated?: boolean;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    fs.writeFileSync(
      `${serverRuntimeConfig.PROJECT_ROOT}/operators.json`,
      JSON.stringify([...getOperators(), { ...req.body, id: Date.now() }])
    );
    return res.status(200).json({ status: 'success' });
  }
}

export const getOperators = (): Array<IOperator> => {
  const json = fs.readFileSync(
    `${serverRuntimeConfig.PROJECT_ROOT}/operators.json`
  );
  return JSON.parse(json.toString());
};

export const getOperatorsPath = () => {
  const operators = getOperators();

  return operators.map(({ id }) => {
    return {
      params: {
        operator: String(id),
      },
    };
  });
};

export const getOperator = (queryId: number): IOperator | false => {
  const operators = getOperators();
  return operators.find(({ id }) => id === queryId) ?? false;
};
