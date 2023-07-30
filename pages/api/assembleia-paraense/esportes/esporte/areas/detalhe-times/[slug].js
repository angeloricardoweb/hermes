import NextCors from 'nextjs-cors';
import { randomUUID } from 'node:crypto';
export default async function handler(req, res) {
  const { slug } = req.query;

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  if (slug == 'sub-16') {
    const data = {
      error: false,
      message: 'Sem erros',
      times: [
        {
          id: randomUUID(),
          time: 'Rosario',
          logo: 'https://api-temp.vercel.app/assembleia-paraense/rosario.png',
          jogadores: [
            {
              id: randomUUID(),
              nome: 'Leonardo Soares',
              capitao: true,
              numeroCamisa: 10,
            },
            {
              id: randomUUID(),
              nome: 'Rodrigo Silva',
              capitao: false,
              numeroCamisa: 4,
            }
          ]
        }
      ],
    };
    res.status(200).json(data);
  }
  else {
    const data = {
      error: false,
      message: 'Sem erro',
      data: []
    }
    return res.status(200).json(data)
  }
}
