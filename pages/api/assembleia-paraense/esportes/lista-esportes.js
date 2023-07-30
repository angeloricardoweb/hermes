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
      esportes: [
        {
          id: 1,
          title: 'Futebol',
          slug: 'futebol',
        },
        {
          id: 2,
          title: 'Corrida',
          slug: 'corrida',
        },
        {
          id: 3,
          title: 'Voleibol',
          slug: 'voleibol',
        },
        {
          id: 4,
          title: 'Futsal',
          slug: 'futsal',
        },
        {
          id: 5,
          title: 'Basquetebol',
          slug: 'basquetebol',
        },
        {
          id: 6,
          title: 'Natação',
          slug: 'natacao',
        },
        {
          id: 7,
          title: 'Tênis de Mesa',
          slug: 'tenis-de-mesa',
        },
        {
          id: 8,
          title: 'Squash',
          slug: 'squash',
        },
        {
          id: 9,
          title: 'Caratê',
          slug: 'carate',
        },
        {
          id: 10,
          title: 'Judô',
          slug: 'judo',
        },
        {
          id: 11,
          title: 'Sinuca',
          slug: 'sinuca',
        },
        {
          id: 12,
          title: 'Peteca',
          slug: 'peteca',
        },
        {
          id: 13,
          title: 'Futevôlei',
          slug: 'futevolei',
        },      
      ],
    },
  };

  res.status(200).json(data);
}
