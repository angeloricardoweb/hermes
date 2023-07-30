import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const id = req.query.id;
  try {
    throw new Error('Erro 1');
  } catch (error) {
    if (id == 1) {
      return res.status(400).json({
        error: true,
        message: 'Ocorreu um erro',
        results: {
          titulo: 'Ocorreu um erro',
          descricao:
            'Ocorreu um erro ao tentar realizar a operação. Tente novamente mais tarde.',
        },
      });
    }
    if (id == 2) {
      return res.status(400).json({
        error: true,
        message: 'Ocorreu um erro',
        results: {
          titulo: 'Ocorreu um erro',
          descricao:
            'Você não possui saldo suficiente',
        },
      });
    }
    if (id == 3) {
      return res.status(400).json({
        error: true,
        message: 'Ocorreu um erro',
        results: {
          titulo: 'Ocorreu um erro',
          descricao:
            'Sistema indisponível no momento. Tente novamente mais tarde.',
        },
      });
    }
    if (id == 4) {
      return res.status(400).json({
        error: true,
        message: 'Ocorreu um erro',
        results: {
          titulo: 'Ocorreu um erro',
          descricao:
            'Chave Inválida',
        },
      });
    }
  }
}
