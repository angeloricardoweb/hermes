import NextCors from 'nextjs-cors'

export default async function handler(req, res) {
  const { slug } = req.query;

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
      listalegislacao: [
        {
          id: 1,
          titulo: 'Lei 9.120/99',
          nome_arquivo: 'lei-9120-99.pdf',
          link_arquivo: 'https://api-temp.vercel.app/app-apepa/pdf-exemplo-apepa.pdf',
        },
        {
          id: 2,
          titulo: 'Lei 11.300/97',
          nome_arquivo: 'lei-11300-99.pdf',
          link_arquivo: 'https://api-temp.vercel.app/app-apepa/pdf-exemplo-apepa.pdf',
        },
        {
          id: 3,
          titulo: 'Lei 8.300/96',
          nome_arquivo: 'lei-8300-99.pdf',
          link_arquivo: 'https://api-temp.vercel.app/app-apepa/pdf-exemplo-apepa.pdf',
        },
        {
          id: 4,
          titulo: 'Lei 7.400/94',
          nome_arquivo: 'lei-7400-99.pdf',
          link_arquivo: 'https://api-temp.vercel.app/app-apepa/pdf-exemplo-apepa.pdf',
        },
        {
          id: 5,
          titulo: 'Lei 9.990/99',
          nome_arquivo: 'lei-9900-99.pdf',
          link_arquivo: 'https://api-temp.vercel.app/app-apepa/pdf-exemplo-apepa.pdf',
        },
      ],
    },
  }
  res.status(200).json(data)

}


