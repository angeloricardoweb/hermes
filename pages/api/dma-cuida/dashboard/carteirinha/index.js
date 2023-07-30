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
    carteirinha: {
      foto: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      nome: 'Maria da Silva',
      numero: '018752052112-20',
      assinatura: 'individual',
      vencimento: '2022-12-31',
    },
  };

  res.status(200).json(data);
}

