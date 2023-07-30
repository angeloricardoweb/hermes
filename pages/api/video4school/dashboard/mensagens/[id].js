import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const data = {
    mensagens: [
      {
        autor: 'eu',
        mensagem: 'Olá, tudo bem?',
        hora: '09:00',
      },
      {
        autor: 'outro',
        imagem: 'https://i.pravatar.cc/150?img=1',
        mensagem: 'Tudo ótimo, e você?',
        hora: '10:00',
      },
    ],
  };

  res.status(200).json(data);
}

