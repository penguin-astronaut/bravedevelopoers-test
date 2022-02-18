import * as fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';
import operators from '../../operators.json';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    fs.writeFileSync(
      './../../operators.json',
      JSON.stringify([...operators, { ...req.body, id: Date.now() }])
    );
    return res.status(200).json({ status: 'success' });
  }
}
