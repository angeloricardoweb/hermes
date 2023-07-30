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
    assinaturas: [
      {
        id: 1,
        tipo: 'Individual',
        beneficios: [
          'Desconto em consultas',
          'Desconto em exames',
          'Desconto em medicamentos',
        ],
        parcelas: 12,
        preco_por_mes: 25.0,
        total_anual: 300.0,
      },
      {
        id: 2,
        tipo: 'Individual',
        beneficios: [
          'Desconto em consultas',
          'Desconto em exames',
          'Desconto em medicamentos',
        ],
        parcelas: 12,
        preco_por_mes: 25.0,
        total_anual: 300.0,
      },
      {
        id: 3,
        tipo: 'Individual',
        beneficios: [
          'Desconto em consultas',
          'Desconto em exames',
          'Desconto em medicamentos',
        ],
        parcelas: 12,
        preco_por_mes: 25.0,
        total_anual: 300.0,
      },
    ],
  };

  res.status(200).json(data);
}

