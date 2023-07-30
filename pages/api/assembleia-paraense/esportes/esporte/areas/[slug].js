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

  if (slug == 'campeonatos') {
    const data = {
      error: false,
      message: 'Sem erros',
      lista: {
        campeonatos: [
          {
            id: 1,
            title: 'Sub 16',
            slug: 'sub-16'
          },
          {
            id: 2,
            title: 'Sub 20',
            slug: 'sub-20'
          },
          {
            id: 3,
            title: 'Novos',
            slug: 'novos'
          },
          {
            id: 4,
            title: 'Feminino',
            slug: 'feminino'
          },
          {
            id: 5,
            title: 'Master',
            slug: 'master'
          },
          {
            id: 6,
            title: 'Super Master',
            slug: 'super-master'
          },
          {
            id: 7,
            title: 'Sênior',
            slug: 'senior'
          },
          {
            id: 8,
            title: 'Regulamento',
            slug: 'regulamento'
          },
        ],
      },
    };
    return res.status(200).json(data)
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
