import NextCors from 'nextjs-cors'

export default async function handler(req, res) {
  const { slug } = req.query;

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  if (slug === 'atas') {
    const data = {
      error: false,
      message: 'Sem erros',
      results: {
        documento: {
          id: 1,
          nome: 'Atas',
          documentos: [
            {
              id: 1,
              titulo: 'Ata da reunião n.º 213-2023',
              nome_arquivo: 'pdf-exemplo-apepa.pdf',
              link_arquivo: 'https://api-temp.vercel.app/app-apepa/pdf-exemplo-apepa.pdf'
            },
            {
              id: 2,
              titulo: 'Ata da reunião extraordinária n.º 23-2023',
              nome_arquivo: 'pdf-exemplo-apepa.pdf',
              link_arquivo: 'https://api-temp.vercel.app/app-apepa/pdf-exemplo-apepa.pdf'
            },
          ]
        },
      },
    }
    return res.status(200).json(data)
  }

  if (slug == 'estatuto') {
    const data = {
      error: false,
      message: 'Sem erros',
      results: {
        documento: [
          {
            id: 2,
            nome: 'Estatuto',
            documentos: [
              {
                id: 1,
                titulo: 'Novo Estatuto - 2023.1',
                nome_arquivo: 'pdf-exemplo-apepa.pdf',
                link_arquivo: 'https://api-temp.vercel.app/app-apepa/pdf-exemplo-apepa.pdf'
              },
              {
                id: 2,
                titulo: 'Retificação do Estatuto - 16/05/2023',
                nome_arquivo: 'pdf-exemplo-apepa.pdf',
                link_arquivo: 'https://api-temp.vercel.app/app-apepa/pdf-exemplo-apepa.pdf'
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


