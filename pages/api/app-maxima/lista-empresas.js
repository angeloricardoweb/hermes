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
        id: 1,
        label: 'Belém',
        value: '05.687.034/0001-10'
      },
      {
        id: 2,
        label: 'Ananindeua',
        value: '14.163.818/0001-30'
      },
      {
        id: 3,
        label: 'Mosqueiro',
        value: '14.295.098/0001-66'
      },
      {
        id: 4,
        label: 'Castanhal',
        value: '14.572.418/0002-69'
      },
      {
        id: 5,
        label: 'Salinas',
        value: '14.572.418/0001-88'
      },
      {
        id: 6,
        label: 'Mps-Melo',
        value: '48.976.305/0001-60'
      },
    ]
  };

  return res.status(200).json(data);
}