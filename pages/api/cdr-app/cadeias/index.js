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
      cadeias: [
        {
          id: 1,
          cadeia_produtiva: 'Mandioca',
        },
        {
          id: 2,
          cadeia_produtiva: 'Açai',
        },
        {
          id: 3,
          cadeia_produtiva: 'Pimenta-do-reino',
        },
        {
          id: 4,
          cadeia_produtiva: 'Dendê',
        },
        {
          id: 5,
          cadeia_produtiva: 'Soja',
        },

        {
          id: 6,
          cadeia_produtiva: 'Leite e derivados',
        },
        {
          id: 7,
          cadeia_produtiva: 'Cupuaçu',
        },
        {
          id: 8,
          cadeia_produtiva: 'Cacau',
        },
        {
          id: 9,
          cadeia_produtiva: 'Acerola',
        },
        {
          id: 10,
          cadeia_produtiva: 'Pecuária',
        },
        {
          id: 11,
          cadeia_produtiva: 'Palmito',
        },
        {
          id: 12,
          cadeia_produtiva: 'Castanha-do-pará',
        },
        {
          id: 13,
          cadeia_produtiva: 'Horticultura',
        },
      ],
    },
  };

  res.status(200).json(data);
}
