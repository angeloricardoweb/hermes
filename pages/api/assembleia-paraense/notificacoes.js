import NextCors from 'nextjs-cors';
import { randomUUID } from 'node:crypto';
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
      notificacoes: [
        {
          id: 1,
          title: 'Titulo da notificação',
          content: 'conteúdo da notificação',
          url: 'https://link.com', // null qnd n houver
        },
        {
          id: 2,
          title: 'Titulo da notificação',
          content: 'conteúdo da notificação',
          url: 'https://link.com', // null qnd n houver
        },
      ],
    },
  };

  res.status(200).json(data);
}
