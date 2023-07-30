import NextCors from 'nextjs-cors';
import { randomUUID } from 'node:crypto';
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
    results: {
      areas: [
        {
          id: randomUUID(),
          title: 'Esporte',
        },
        {
          id: randomUUID(),
          title: 'Entretenimento',
        },
        {
          id: randomUUID(),
          title: 'Educação',
        },
      ],
    },
  };

  res.status(200).json(data);
}
