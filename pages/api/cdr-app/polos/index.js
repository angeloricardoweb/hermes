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
    results: {
      polos: [
        {
          id: 1,
          municipio: 'Marabá',
        },
        {
          id: 2,
          municipio: 'Breves',
        },
        {
          id: 3,
          municipio: 'Bragança',
        },
        {
          id: 4,
          municipio: 'Castanhal',
        },
        {
          id: 5,
          municipio: 'Redenção',
        },
        {
          id: 6,
          municipio: 'Altamira',
        },
        {
          id: 7,
          municipio: 'Abaetetuba',
        },
        {
          id: 8,
          municipio: 'Tucuruí',
        },
        {
          id: 9,
          municipio: 'Santarém',
        },
        {
          id: 10,
          municipio: 'Paragominas',
        },
      ],
    },
  };

  res.status(200).json(data);
}
