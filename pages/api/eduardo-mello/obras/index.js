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
    obras: [
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

      {
        title: 'Nome da obra 2',
        image: 'https://eduardo-mello.vercel.app/img/samples/sample-2.jpg',
        is_available: false,
        price: 10000.0,
        width: '1,20m',
        height: '1,40m',
        category: 'abstrato',
        technique: 'Acrílico sobre tela',
        series: 'Círio Colorido',
      },

      {
        title: 'Nome da obra 3',
        image: 'https://eduardo-mello.vercel.app/img/samples/sample-3.jpg',
        is_available: false,
        price: 10000.0,
        width: '1,20m',
        height: '1,40m',
        category: 'sacra',
        technique: 'Acrílico sobre tela',
        series: 'Círio Colorido',
      },

      {
        title: 'Nome da obra 4',
        image: 'https://eduardo-mello.vercel.app/img/samples/sample-4.jpg',
        is_available: true,
        price: 10000.0,
        width: '1,20m',
        height: '1,40m',
        category: 'natureza',
        technique: 'Acrílico sobre tela',
        series: 'Círio Colorido',
      },

      {
        title: 'Nome da obra 5',
        image: 'https://eduardo-mello.vercel.app/img/samples/sample-5.jpg',
        is_available: false,
        price: 10000.0,
        width: '1,20m',
        height: '1,40m',
        category: 'paisagem',
        technique: 'Acrílico sobre tela',
        series: 'Círio Colorido',
      },

      {
        title: 'Nome da obra 6',
        image: 'https://eduardo-mello.vercel.app/img/samples/sample-6.jpg',
        is_available: true,
        price: 10000.0,
        width: '1,20m',
        height: '1,40m',
        category: 'sacra',
        technique: 'Acrílico sobre tela',
        series: 'Círio Colorido',
      },

      {
        title: 'Nome da obra 7',
        image: 'https://eduardo-mello.vercel.app/img/samples/sample-7.jpg',
        is_available: false,
        price: 10000.0,
        width: '1,20m',
        height: '1,40m',
        category: 'natureza',
        technique: 'Acrílico sobre tela',
        series: 'Círio Colorido',
      },

      {
        title: 'Nome da obra 8',
        image: 'https://eduardo-mello.vercel.app/img/samples/sample-8.jpg',
        is_available: true,
        price: 10000.0,
        width: '1,20m',
        height: '1,40m',
        category: 'sacra',
        technique: 'Acrílico sobre tela',
        series: 'Círio Colorido',
      },

      {
        title: 'Nome da obra 9',
        image: 'https://eduardo-mello.vercel.app/img/samples/sample-9.jpg',
        is_available: false,
        price: 10000.0,
        width: '1,20m',
        height: '1,40m',
        category: 'abstrato',
        technique: 'Acrílico sobre tela',
        series: 'Círio Colorido',
      },
    ],
  }

  res.status(200).json(data)
}
