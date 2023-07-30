import NextCors from 'nextjs-cors'

export default async function handler(req, res) {
  const { slug } = req.query;

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  if (slug == 'janeiro') {
    const data = {
      error: false,
      message: 'Sem erros',
      results: {
        diasfacultativos: [
          {
            id: 1,
            mes: 'Janeiro',
            dias: [
              {
                id: 1,
                dia: '10',
                titulo: 'Ponto Facultado',
                descricao: 'Nam vestibulum, ex ut bibendum pharetra, lacus tortor blandit nisi',
              },
              
            ]
          },
        ],
      },
    }
    return res.status(200).json(data)
  }

  if (slug == 'fevereiro') {
    const data = {
      error: false,
      message: 'Sem erros',
      results: {
        diasfacultativos: [
          {
            id: 1,
            mes: 'Fevereiro',
            dias: [
              {
                id: 1,
                dia: '10',
                titulo: 'Ponto Facultado',
                descricao: 'Nam vestibulum, ex ut bibendum pharetra, lacus tortor blandit nisi',
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


