import NextCors from 'nextjs-cors';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const data = {
    error: false,
    message: 'Sem erros',
    results: [
      {
        id: uuidv4(),
        nome: '1234 **** **** 0001',
        bandeira: 'visa',
        principal: true,
      },
      {
        id: uuidv4(),
        nome: '1234 **** **** 0002',
        bandeira: 'mastercard',
        principal: false,
      },
    ],
  };

  res.status(200).json(data);
}
