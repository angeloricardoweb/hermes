import NextCors from 'nextjs-cors';
import { randomUUID } from 'node:crypto';

export default async function handler(req, res) {
  const { type } = req.query;

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const data = {
    error: false,
    message: 'Sem erros',
    type: type,
    results: [
      {
        id: randomUUID(),
        stars: 5,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada nisl nisl, at fringilla lectus posuere et. Nulla non vestibulum quam.',
        user: {
          url: 'https://placeimg.com/192/192/people',
          name: 'Albert Santos',
          school: 'Nome do colégio',
        },
      },
      {
        id: randomUUID(),
        stars: 4,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada nisl nisl, at fringilla lectus posuere et. Nulla non vestibulum quam.',
        user: {
          url: 'https://placeimg.com/192/192/people',
          name: 'Albert Santos',
          school: 'Nome do colégio',
        },
      },
      {
        id: randomUUID(),
        stars: 5,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada nisl nisl, at fringilla lectus posuere et. Nulla non vestibulum quam.',
        user: {
          url: 'https://placeimg.com/192/192/people',
          name: 'Albert Santos',
          school: 'Nome do colégio',
        },
      },
      {
        id: randomUUID(),
        stars: 5,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada nisl nisl, at fringilla lectus posuere et. Nulla non vestibulum quam.',
        user: {
          url: 'https://placeimg.com/192/192/people',
          name: 'Albert Santos',
          school: 'Nome do colégio',
        },
      },
      {
        id: randomUUID(),
        stars: 5,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada nisl nisl, at fringilla lectus posuere et. Nulla non vestibulum quam.',
        user: {
          url: 'https://placeimg.com/192/192/people',
          name: 'Albert Santos',
          school: 'Nome do colégio',
        },
      },
    ],
  };

  res.status(200).json(data);
}
