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
      parceiros: [
        {
          id: randomUUID(),
          title: 'Parceiro Esportivo',
          link: 'https://www.assembleiaparaense.com.br/',
          logo: 'https://api-temp.vercel.app/assembleia-paraense/parceiro-1.png'
        },
        {
          id: randomUUID(),
          title: 'Parceiro de Entretenimento',
          link: 'https://www.assembleiaparaense.com.br/',
          logo: 'https://api-temp.vercel.app/assembleia-paraense/parceiro-2.png'
        },
        {
          id: randomUUID(),
          title: 'Parceiro de Educação',
          link: 'https://www.assembleiaparaense.com.br/',
          logo: 'https://api-temp.vercel.app/assembleia-paraense/parceiro-3.png'
        },
        {
          id: randomUUID(),
          title: 'Parceiro de Segurança',
          link: 'https://www.assembleiaparaense.com.br/',
          logo: 'https://api-temp.vercel.app/assembleia-paraense/parceiro-4.png'
        },
      ],
    },
  };

  res.status(200).json(data);
}
