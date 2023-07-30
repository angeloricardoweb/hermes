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
    payload: req.query,
    results: [
      {
        caixa: {
          id: 51,
          nome: 'TESTE BREDI',
        },
        pasta: {
          id: 116,
          nome: 'FUNCIONARIOS',
        },
        ficha: {
          id: 174,
          nome: 'ANGELO',
        },
        qtd_comentarios: 2,
      },
      {
        caixa: {
          id: 51,
          nome: 'TESTE BREDI',
        },
        pasta: {
          id: 116,
          nome: 'FUNCIONARIOS',
        },
        ficha: {
          id: 175,
          nome: 'VINICIUS',
        },
        qtd_comentarios: 2,
      },
      {
        caixa: {
          id: 51,
          nome: 'TESTE BREDI',
        },
        pasta: {
          id: 116,
          nome: 'FUNCIONARIOS',
        },
        ficha: {
          id: 176,
          nome: 'PITTER',
        },
        qtd_comentarios: 2,
      },
    ],
  };

  res.status(200).json(data);
}
