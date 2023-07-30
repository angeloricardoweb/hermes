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
    results: {
      verde: [
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
          comentario: {
            id: 300,
            texto: 'Teste de realce',
          },
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
          comentario: {
            id: 300,
            texto: 'Teste de realce',
          },
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
          comentario: {
            id: 300,
            texto: 'Teste de realce',
          },
        },
      ],
      amarelo: [],
      vermelho: [
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
          comentario: {
            id: 300,
            texto: 'Teste de realce',
          },
        },
      ],
    },
  };

  res.status(200).json(data);
}
