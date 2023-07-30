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


  if (slug == 'futebol') {
    const data = {
      error: false,
      message: 'Sem erros',
      lista: {
        areas: [
          {
            id: 1,
            title: 'Protocolo para retomada do campeonato interno',
            slug: 'protocolo'
          },
          // {
          //   id: 2,
          //   title: 'Escolhinha',
          //   slug: 'escolhinha'
          // },
          {
            id: 3,
            title: 'Campeonatos',
            slug: 'campeonatos'
          },
          // {
          //   id: 4,
          //   title: 'Campos',
          //   slug: 'campos'
          // },
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
