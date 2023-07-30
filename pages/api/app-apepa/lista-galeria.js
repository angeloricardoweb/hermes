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
      galeria: [
        {
          id: 1,
          titulo: 'Entrega de Premiação do Evento Esportivo APEPA 2023',
          imagem: 'https://api-temp.vercel.app/app-apepa/galeria-1.png',
        },
        {
          id: 2,
          titulo: 'Entrega de Premiação do Evento Esportivo APEPA 2023',
          imagem: 'https://api-temp.vercel.app/app-apepa/galeria-2.png',
        },
        {
          id: 3,
          titulo: 'Entrega de Premiação do Evento Esportivo APEPA 2023',
          imagem: 'https://api-temp.vercel.app/app-apepa/galeria-1.png',
        },
      ],
    },
  }
  res.status(200).json(data)

}


