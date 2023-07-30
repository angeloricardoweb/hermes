import NextCors from 'nextjs-cors';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const data = {
    error: false,
    message: 'Sem erros',
    results: [
      {
        id: uuidv4(),
        nome: 'Banco do Brasil',
      },
      {
        id: uuidv4(),
        nome: 'Banco Itaú',
      },
      {
        id: uuidv4(),
        nome: 'Banco Santander',
      },
      {
        id: uuidv4(),
        nome: 'Banco Bradesco',
      },
      {
        id: uuidv4(),
        nome: 'Banco Inter',
      },
    ],
  };

  res.status(200).json(data);
}
