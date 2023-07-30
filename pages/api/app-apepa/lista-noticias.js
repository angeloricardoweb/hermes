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
      listanoticias: [
        {
          id: 1,
          nome: 'Quisque volutpat neque nunc, ut ultrices ex maximus quis',
          slug: 'new-1',
          logo: 'https://api-temp.vercel.app/app-apepa/new-1.png',
          resumo: 'Ut volutpat arcu ac neque aliquet finibus. Donec mattis nisl id cursus scelerisque',
          data: '16/05/2023'
        },
        {
          id: 2,
          nome: 'Quisque volutpat neque nunc, ut ultrices ex maximus quis',
          slug: 'new-2',
          logo: 'https://api-temp.vercel.app/app-apepa/new-2.png',
          resumo: 'Ut volutpat arcu ac neque aliquet finibus. Donec mattis nisl id cursus scelerisque',
          data: '05/01/2023'
        },
        {
          id: 3,
          nome: 'Quisque volutpat neque nunc, ut ultrices ex maximus quis',
          slug: 'new-3',
          logo: 'https://api-temp.vercel.app/app-apepa/new-1.png',
          resumo: 'Ut volutpat arcu ac neque aliquet finibus. Donec mattis nisl id cursus scelerisque',
          data: '01/01/2023'
        },
        {
          id: 4,
          nome: 'Quisque volutpat neque nunc, ut ultrices ex maximus quis',
          slug: 'new-4',
          logo: 'https://api-temp.vercel.app/app-apepa/new-2.png',
          resumo: 'Ut volutpat arcu ac neque aliquet finibus. Donec mattis nisl id cursus scelerisque',
          data: '25/12/2022'
        },
      ],
    },
  }
  res.status(200).json(data)

}


