import NextCors from 'nextjs-cors'

export default async function handler(req, res) {
  const { slug } = req.query;

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  const data = {
    error: false,
    message: 'Sem erros',
    results: {
      listadocumento: [
        {
          id: 1,
          nome: 'Atas',
          slug: 'atas',
        },
        {
          id: 2,
          nome: 'Estatuto',
          slug: 'estatuto',
        },      
      ],
    },
  }
  res.status(200).json(data)

}


