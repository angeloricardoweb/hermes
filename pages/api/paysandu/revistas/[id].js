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
      id: 3,
      titulo: 'Edição 003',
      paginas: [
        'http://paysandu.com.br/data/revista/default/PGINA-01(3).jpg',
        'http://paysandu.com.br/data/revista/default/PGINA-02(3).jpg',
        'http://paysandu.com.br/data/revista/default/PGINA-03(3).jpg',
        'http://paysandu.com.br/data/revista/default/PGINA-04(3).jpg',
        'http://paysandu.com.br/data/revista/default/PGINA-05(3).jpg',
      ],
    },
  };

  res.status(200).json(data);
}
