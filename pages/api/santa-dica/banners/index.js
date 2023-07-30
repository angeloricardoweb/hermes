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
        nome: 'Teste 1',
        img: 'https://fastly.picsum.photos/id/866/720/300.jpg?hmac=z5FlnREEbzuCm2viFBwz3Gx3g46GClujk3VaYuPgkcA',
        categorias: [
          { id: 24, titulo: 'Beleza' },
          { id: 27, titulo: 'Casa' },
        ],
      },
      {
        id: 2,
        nome: 'Teste 2',
        img: 'https://fastly.picsum.photos/id/0/720/300.jpg?hmac=XzZXd-TQNQzYiLE2eF_S40tzMIEGzXwnfou7CFXZm10',
        categorias: [
          { id: 24, titulo: 'Beleza' },
          { id: 27, titulo: 'Casa' },
          { id: 17, titulo: 'Saúde' },
        ],
      },
      {
        id: 3,
        nome: 'Teste 3',
        img: 'https://fastly.picsum.photos/id/128/720/300.jpg?hmac=6PMcpv7EozLFg4bMjqEvwCtN4OllCuB3W70LSpynzH0',
        categorias: [
          { id: 24, titulo: 'Beleza' },
          { id: 27, titulo: 'Casa' },
          { id: 17, titulo: 'Saúde' },
          { id: 21, titulo: 'Festa' },
        ],
      },
    ],
  };

  res.status(200).json(data);
}
