import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const data = {
    dispositivos: [
      {
        nome: 'Lenovo ThinkPad X1 Carbon',
        acesso: '18/02/2022',
        ip: '172.29.194.14',
        tipo: 'notebook',
      },
      {
        nome: 'Apple iPhone 13',
        acesso: '22/02/2022',
        ip: '10.152.83.223',
        tipo: 'mobile',
      },
      {
        nome: 'HP EliteDesk 800 G5',
        acesso: '24/02/2022',
        ip: '192.168.0.101',
        tipo: 'desktop',
      },
    ],
  };

  res.status(200).json(data);
}

