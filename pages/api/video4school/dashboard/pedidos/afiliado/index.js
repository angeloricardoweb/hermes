import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const data = {
    pedidos: [
      {
        titulo: 'Segunda Guerra Mundial',
        id: 1,
        preco: 4.5,
        comissao: 4.3,
        status: 'resgatado',
      },
      {
        titulo: 'Quimica - 1º ano',
        id: 2,
        preco: 35.9,
        comissao: 30.9,
        status: 'pendente',
      },
      {
        titulo: 'Quimica - 2º ano',
        id: 3,
        preco: 35.9,
        comissao: 30.9,
        status: 'liberado',
      },
      {
        titulo: 'Quimica - 3º ano',
        id: 4,
        preco: 35.9,
        comissao: 30.9,
        status: 'liberado',
      },
    ],
  };

  res.status(200).json(data);
}

