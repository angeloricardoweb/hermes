import NextCors from 'nextjs-cors'

export default async function handler(req, res) {
  const { id } = req.query;

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  if (id == 1) {
    const data = {
      error: false,
      message: 'Sem erros',
      results: {
        carteira: [
          {
            id: 1,
            nome: 'Maria Lins',
            codigo: 1251410,
            tipo: 'GOLD',
            qr_code: '1251410 (a ser definido)',
            validade: '01/03/2024',
            foto_perfil: 'https://api-temp.vercel.app/app-apepa/user-1.png'
          },
        ],
      },
    }
    return res.status(200).json(data)
  } else {
    const data = {
      error: false,
      message: 'Sem erros',
      results: null
    }
    return res.status(200).json(data)
  }
}
