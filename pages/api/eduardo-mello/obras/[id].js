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
    portfolio: [
      {
        title: 'Nome da obra 1',
        image: 'https://eduardo-mello.vercel.app/img/samples/sample-1.jpg',
        is_available: true,
        price: 10000.0,
        width: '1,20m',
        height: '1,40m',
        category: 'sacra',
        technique: 'Acrílico sobre tela',
        series: 'Círio Colorido',
      },
    ],
  }

  res.status(200).json(data)
}
