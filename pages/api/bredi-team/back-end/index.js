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
    results: [
      {
        id: 1,
        cargo: 'back-end',
        name: 'Ilvini Pitter',
        avatar: 'https://github.com/Ilvini.png',
        github: 'Ilvini',
      },
      {
        id: 2,
        cargo: 'back-end',
        name: 'Vinicius lee',
        avatar: 'https://github.com/Viniciusli.png',
        github: 'Viniciusli',
      },
    ],
  }

  res.status(200).json(data)
}
