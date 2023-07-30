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
        pergunta: 'Pergunta 1',
        alternativas: [
          {
            id: 1,
            nome: 'Abaixo de 45 anos',
          },
          {
            id: 2,
            nome: 'Abaixo de 30 anos',
          },
        ],
      },
      {
        id: 2,
        pergunta: 'Pergunta 2',
        alternativas: [
          {
            id: 1,
            nome: '30 kg',
          },
          {
            id: 2,
            nome: '55 gk',
          },
          {
            id: 3,
            nome: '90 kg',
          }
        ],
      },
      {
        id: 3,
        pergunta: 'Pergunta 3',
        alternativas: [
          {
            id: 1,
            nome: 'resposta A',
          },
          {
            id: 2,
            nome: 'resposta B',
          }
        ],
      },
      {
        id: 4,
        pergunta: 'Pergunta 4',
        alternativas: [
          {
            id: 1,
            nome: 'resposta A',
          },
          {
            id: 2,
            nome: 'resposta B',
          },
          {
            id: 3,
            nome: 'resposta C',
          },
          {
            id: 4,
            nome: 'resposta D',
          }
        ],
      },
    ],
  };
  res.status(200).json(data);
}
