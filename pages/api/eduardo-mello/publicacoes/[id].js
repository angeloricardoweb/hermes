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
    publicacao: [
      {
        title: 'Nome da publicação 1',
        image: 'https://eduardo-mello.vercel.app/img/samples/sample-1.jpg',
      },
    ],
  }

  res.status(200).json(data)
}
