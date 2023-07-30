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
    post: [
      {
        id: 1,
        title: 'Notícia #3',
        tags: ['tag 1', 'tag 2', 'tag 3', 'tag 4'],
        category: 'sacra',
        created_at: '2020-07-10 15:00:00.000',
        edited_at: '2020-07-10 15:00:000',
        is_published: true,
        content: `Um dos últimos retratos feitos pela pintora mexicana Frida Kahlo bateu
          nesta terça-feira o recorde de preço para obras de um artista latino-americano em
          leilão. O autorretrato Diego e eu, de 1949, foi a estrela da venda desta terça-feira
          na casa Sotheby’s, em Nova York, como parte da temporada do outono boreal no mercado da arte.`,
      },
    ],
  }

  res.status(200).json(data)
}
