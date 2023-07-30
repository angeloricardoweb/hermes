import NextCors from 'nextjs-cors'

export default async function handler(req, res) {
  const { slug } = req.query;

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  if (slug == 'new-1') {
    const data = {
      error: false,
      message: 'Sem erros',
      results: {
        detalhenoticia: [
          {
            id: 1,
            titulo: 'Quisque volutpat neque nunc, ut ultrices ex maximus quis',
            data: '16/05/2023',
            imagem: 'https://api-temp.vercel.app/app-apepa/new-1.png',
            texto: 'Vivamus tristique suscipit enim quis pulvinar. Fusce quis nunc ac mi iaculis fermentum vitae quis nulla. Nullam rutrum efficitur luctus. Nullam interdum purus sagittis eros pellentesque, sed pharetra erat elementum. Suspendisse in diam finibus felis convallis venenatis. Curabitur imperdiet semper nunc. Nam vestibulum, ex ut bibendum pharetra, lacus tortor blandit nisi, sollicitudin placerat magna turpis eu sem. Cras euismod purus nulla, at laoreet nisl fermentum quis.',
          },

        ],
      },
    }
    return res.status(200).json(data)
  }

  if (slug == 'new-2') {
    const data = {
      error: false,
      message: 'Sem erros',
      results: {
        detalhenoticia: [
          {
            id: 2,
            titulo: 'Quisque volutpat neque nunc, ut ultrices ex maximus quis',
            data: '16/05/2023',
            imagem: 'https://api-temp.vercel.app/app-apepa/new-2.png',
            texto: 'Vivamus tristique suscipit enim quis pulvinar. Fusce quis nunc ac mi iaculis fermentum vitae quis nulla. Nullam rutrum efficitur luctus. Nullam interdum purus sagittis eros pellentesque, sed pharetra erat elementum. Suspendisse in diam finibus felis convallis venenatis. Curabitur imperdiet semper nunc. Nam vestibulum, ex ut bibendum pharetra, lacus tortor blandit nisi, sollicitudin placerat magna turpis eu sem. Cras euismod purus nulla, at laoreet nisl fermentum quis.',
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


