import NextCors from 'nextjs-cors';

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
        date: '2023-01-25T00:00:00',
        eventName: 'Indisponível',
      },
      {
        date: '2023-02-27T00:00:00',
        eventName: 'Indisponível',
      },
      {
        date: '2023-01-28T00:00:00',
        eventName: 'Indisponível',
      },
    ],
  };
  res.status(200).json(data);
}
