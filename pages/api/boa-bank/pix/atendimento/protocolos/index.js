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
        protocolo: uuidv4(),
        data_hora: '10 de julho de 2021, 10:00',
      },
      {
        id: uuidv4(),
        protocolo: uuidv4(),
        data_hora: '13 de julho de 2021, 11:30',
      },
      {
        id: uuidv4(),
        protocolo: uuidv4(),
        data_hora: '13 de julho de 2021, 23:00',
      },
    ],
  };

  res.status(200).json(data);
}
