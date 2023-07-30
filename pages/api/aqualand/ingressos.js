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
        quantidade_dias: 1,
        preco_individual: '210,00',
        preco_família: '137,00',
      },
      {
        id: 2,
        quantidade_dias: 2,
        preco_individual: '350,00',

      },
      {
        id: 3,
        quantidade_dias: 3,
        preco_individual: '100,00',
        preco_família: '80,00',
      },
    ],
  };

  res.status(200).json(data);
}
