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
        titulo: '10 Dicas de como viajar em grupo',
        img: 'https://plus.unsplash.com/premium_photo-1661270517324-f98477133f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
        dia: '29-03',
      },
      {
        id: 2,
        titulo: '10 Pontos turísticos para visitar',
        img: 'https://images.unsplash.com/photo-1447117219916-d8cb5f373434?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80',
        dia: '18-03',
      },
      {
        id: 3,
        titulo: 'Como economizar em hospedagem',
        img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        dia: '30-04',
      },
    ],
  };

  res.status(200).json(data);
}
