import NextCors from 'nextjs-cors'

export default async function handler(req, res) {
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
      banner: [
        {
          id: 1,
          title_evento: 'Esporte 2022',
          image: 'https://api-temp.vercel.app/assembleia-paraense/evento-fundo-assembleia-paraense.png',
        }
      ],
    }
  }

  res.status(200).json(data)
}
