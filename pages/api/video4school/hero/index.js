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
      images: [
        {
          id: 1,
          imagem: {
            url: 'https://api-temp.vercel.app/video4school/hero.png',
          },
          link: 'https://www.google.com.br',
        },
        {
          id: 2,
          imagem: {
            url: 'https://api-temp.vercel.app/video4school/hero.png',
          },
          link: 'https://www.google.com.br',
        },
      ],
    },
  }

  res.status(200).json(data)
}
