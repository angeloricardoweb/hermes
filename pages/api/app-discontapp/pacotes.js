import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    origin: '*',
    optionsSuccessStatus: 200, 
  });

  const data = {
    error: false,
    message: 'Sem erros',
    results: [
      {
        id: 1,
        status: 1,
        titulo: 'Iniciante',
        valor: 'Grátis',
        descrica_completa: 'Grátis',
        iclusoes_plano: [
          {
            id: 1,
            titulo: '03 cupons'
          },
          {
            id: 2,
            titulo: 'Validade de  7 dias'
          },
        ]
      },
      {
        id: 2,
        status: 1,
        titulo: 'Básico',
        valor: 'R$ 20,00',
        descrica_completa: 'Grátis',
        iclusoes_plano: [
          {
            id: 1,
            titulo: '03 cupons'
          },
          {
            id: 2,
            titulo: 'Validade de  7 dias'
          },
        ]
      },
    ]
  };

  return res.status(200).json(data);
}