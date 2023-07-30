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
        pergunta: 'Como faço para acessar o curso?',
        resposta:
          'Após a confirmação do pagamento, você receberá um e-mail com o link de acesso ao curso. Caso não receba, entre em contato conosco através do e-mail',
      },
      {
        id: 2,
        pergunta: 'Como faço para acessar o curso?',
        resposta:
          'Após a confirmação do pagamento, você receberá um e-mail com o link de acesso ao curso. Caso não receba, entre em contato conosco através do e-mail',
      },
      {
        id: 3,
        pergunta: 'Como faço para acessar o curso?',
        resposta:
          'Após a confirmação do pagamento, você receberá um e-mail com o link de acesso ao curso. Caso não receba, entre em contato conosco através do e-mail',
      },
    ],
  };
  res.status(200).json(data);
}

