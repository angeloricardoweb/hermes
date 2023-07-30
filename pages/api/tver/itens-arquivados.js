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
      caixas: [
        {
          id: 1,
          nome: 'Caixa 1',
          arquivado_por: 'João',
          arquivado_em: '30 de Agosto de 2023 às 15:00',
        },
        {
          id: 2,
          nome: 'Caixa 2',
          arquivado_por: 'Erick',
          arquivado_em: '30 de Agosto de 2023 às 15:00',
        },
      ],
      pastas: [
        {
          id: 1,
          nome: 'Pasta 1',
          arquivado_por: 'Anderson',
          caixa: 'Caixa 1',
          arquivado_em: '30 de Agosto de 2023 às 15:00',
        },
        {
          id: 2,
          nome: 'Pasta 2',
          caixa: 'Caixa 1',
          arquivado_por: 'Cardoso',
          arquivado_em: '30 de Agosto de 2023 às 15:00',
        },
      ],
    },
  };

  res.status(200).json(data);
}
