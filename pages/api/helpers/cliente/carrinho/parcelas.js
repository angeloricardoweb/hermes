import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  const params = req.query;
  // const token = req.headers.authorization;

  // if (!token) {
  //   res.status(401).json({
  //     error: true,
  //     message: 'Token não informado',
  //   });
  //   return;
  // }

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
      parcelas: [
        {
          parcelas: 1,
          valor: 1000,
        },
        {
          parcelas: 2,
          valor: 500,
        },
        {
          parcelas: 3,
          valor: 333,
        },
      ],
    },
  };

  res.status(200).json(data);
}
