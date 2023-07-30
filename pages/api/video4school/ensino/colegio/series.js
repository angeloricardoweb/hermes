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
        id: 1,
        title: '1ª Série',
        serie: 1,
      },
      {
        id: 2,
        title: '2ª Série',
        serie: 2,
      },
      {
        id: 3,
        title: '3ª Série',
        serie: 3,
      },
      {
        id: 4,
        title: '4ª Série',
        serie: 4,
      },
      {
        id: 5,
        title: '5ª Série',
        serie: 5,
      },
    ],
  };

  res.status(200).json(data);
}
