import NextCors from 'nextjs-cors'

export default async function handler(req, res) {
  const { slug } = req.query;

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  if (slug == '2023') {
    const data = {
      error: false,
      message: 'Sem erros',
      results: {
        mesesfacultados: [
          {
            id: 1,
            ano: '2023',
            meses: [
              {
                id: 1,
                titulo_mes: 'Janeiro',
                slug: 'janeiro'
              },
              {
                id: 2,
                titulo_mes: 'Fevereiro',
                slug: 'fevereiro'
              },
            ]
          },

        ],
      },
    }
    return res.status(200).json(data)
  }

  if (slug == '2022') {
    const data = {
      error: false,
      message: 'Sem erros',
      results: {
        mesesfacultados: [
          {
            id: 1,
            ano: '2022',
            meses: [
              {
                id: 1,
                titulo_mes: 'Março',
                slug: 'marco'
              },
              {
                id: 2,
                titulo_mes: 'Abril',
                slug: 'abril'
              },
            ]
          },

        ],
      },
    }
    return res.status(200).json(data)
  }

  else {
    const data = {
      error: false,
      message: 'Sem erros',
      results: null
    }
    return res.status(200).json(data)
  }
}


