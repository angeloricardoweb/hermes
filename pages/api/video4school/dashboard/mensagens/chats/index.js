import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const data = {
    chats: [
      {
        id: '1',
        nome: 'Roberta',
        img: 'https://i.pravatar.cc/150?img=1',
        ultimaMensagem: 'Olá, tudo bem?',
        data: '2021-05-01',
      },
      {
        id: '2',
        nome: 'Maria',
        img: 'https://i.pravatar.cc/150?img=5',
        ultimaMensagem: 'Olá, tudo bem?',
        data: '2021-05-01',
      },
      {
        id: '3',
        nome: 'José',
        img: 'https://i.pravatar.cc/150?img=3',
        ultimaMensagem: 'Olá, tudo bem?',
        data: '2021-05-01',
      },
      {
        id: '4',
        nome: 'Ricardo',
        img: 'https://i.pravatar.cc/150?img=4',
        ultimaMensagem: 'Olá, tudo bem?',
        data: '2021-05-01',
      },
      {
        id: '5',
        nome: 'Pedro',
        img: 'https://i.pravatar.cc/150?img=2',
        ultimaMensagem: 'Olá, tudo bem?',
        data: '2021-05-01',
      },
    ],
  };

  res.status(200).json(data);
}

