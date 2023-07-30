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
        tipo: 'EMAIL',
        chave: 'teste@email.com',
      },
      {
        id: uuidv4(),
        tipo: 'CPF',
        chave: '000.000.000-00',
      },
      {
        id: uuidv4(),
        tipo: 'CNPJ',
        chave: '00.000.000/0000-00',
      },
    ],
  };

  res.status(200).json(data);
}
