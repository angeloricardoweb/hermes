import NextCors from 'nextjs-cors'

export default async function handler(req, res) {
  const { slug } = req.query;

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  if (slug == 'medicamento-1') {
    const data = {
      error: false,
      message: 'Sem erros',
      results: {
        medicamento: [
          {
            id: 1,
            slug: 'medicamento-1',
            titulo: 'Medicamento 1',
            data: '14-10-2027',
          },
        ],
      },
    }
    res.status(200).json(data)
  } else {
    const data = {
      error: false,
      message: 'Sem erros',
      results: null
    }
    res.status(200).json(data)
  }
}
