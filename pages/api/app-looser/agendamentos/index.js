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
        titulo: 'Passeio de Jipe',
        img: 'https://images.unsplash.com/photo-1467489904517-075c242c2b4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1318&q=80',
      },
      {
        id: 2,
        titulo: 'Passeio de barco a vela',
        img: 'https://www.arubrasil.com.br/storage/files/products/thumb-dc9b47d56c23befaa901eaa197abe239afd99185.jpeg',
      },
    ],
  };

  res.status(200).json(data);
}
