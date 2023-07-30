import NextCors from 'nextjs-cors'

export default async function handler(req, res) {
  const { slug } = req.query;

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  if (slug == '325299') {
    const data = {
      error: false,
      message: 'Sem erros',
      results: {
        depedente: [
          {
            id: 1,
            slug: '325299',
            nome_depedente: 'André Marcos Santos',
            data_emissao: '18/11/2022',
            data_validade: '18/11/2023',
            tipo: 'Depedente',
            link_foto: 'https://i.pravatar.cc/300',
            qrcode: 'https://api-temp.vercel.app/assembleia-paraense/matricula-depedente-1.png',
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
