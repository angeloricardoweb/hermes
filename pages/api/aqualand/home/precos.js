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
        id: '0',
        dias: 1,
        individual: {
          preco: 210.0,
        },
        familia: {
          preco: 137.0,
        },
      },

      {
        id: '1',
        dias: 2,
        individual: {
          preco: 350.0,
        },
      },

      // {
      //   id: '2',
      //   dias: 7,
      //   individual: {
      //     preco: 100.0,
      //   },
      //   familia: {
      //     preco: 80.0,
      //   },
      // },
    ],
  };

  res.status(200).json(data);
}
