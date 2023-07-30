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
      listapontosfacultativos: [
        {
          id: 1,
          nome: '2023',
          slug: '2023',
        },
        {
          id: 2,
          nome: '2022',
          slug: '2022',
        },      
      ],
    },
  }
  res.status(200).json(data)

}


