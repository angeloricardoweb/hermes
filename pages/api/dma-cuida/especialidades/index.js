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
        nome: 'Cardiologia',
      },
      {
        id: uuidv4(),
        nome: 'Clínico Geral',
      },
      {
        id: uuidv4(),
        nome: 'Dermatologia',
      },
      {
        id: uuidv4(),
        nome: 'Endocrinologia',
      },
      {
        id: uuidv4(),
        nome: 'Gastroenterologia',
      },
      {
        id: uuidv4(),
        nome: 'Geriatria',
      },
    ],
  };

  res.status(200).json(data);
}
