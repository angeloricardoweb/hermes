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
        tipo: 'PHONE',
        chave: '(61) 9 9999-9999',
      },
      {
        id: uuidv4(),
        tipo: 'EVP',
        chave: uuidv4(),
      },
    ],
  };

  res.status(200).json(data);
}
