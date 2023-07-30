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

      {
        title: 'Nome da publicação 2',
        image: 'https://eduardo-mello.vercel.app/img/samples/sample-2.jpg',
      },

      {
        title: 'Nome da publicação 3',
        image: 'https://eduardo-mello.vercel.app/img/samples/sample-3.jpg',
      },

      {
        title: 'Nome da publicação 4',
        image: 'https://eduardo-mello.vercel.app/img/samples/sample-4.jpg',
      },

      {
        title: 'Nome da publicação 5',
        image: 'https://eduardo-mello.vercel.app/img/samples/sample-5.jpg',
      },

      {
        title: 'Nome da publicação 6',
        image: 'https://eduardo-mello.vercel.app/img/samples/sample-6.jpg',
      },

      {
        title: 'Nome da publicação 7',
        image: 'https://eduardo-mello.vercel.app/img/samples/sample-7.jpg',
      },

      {
        title: 'Nome da publicação 8',
        image: 'https://eduardo-mello.vercel.app/img/samples/sample-8.jpg',
      },

      {
        title: 'Nome da publicação 9',
        image: 'https://eduardo-mello.vercel.app/img/samples/sample-9.jpg',
      },
    ],
  }

  res.status(200).json(data)
}
