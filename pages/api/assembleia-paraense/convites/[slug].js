import NextCors from 'nextjs-cors'

export default async function handler(req, res) {
  const { slug } = req.query;

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  if (slug == '339659') {
    const data = {
      error: false,
      message: 'Sem erros',
      results: {
        convite: [
          {
            id: 1,
            slug: '339659',
            number_convite: '339659',
            nome_convidado: 'Leonardo Soares',
            tipo: 'Convite Clube',
            cpf: '999.999.999-99',
            data: '18/11/2022',
            link_convite: '#',
            maior_idade: 'Sim',
            estrangeiro: 'Não'
          },
        ],
      }
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
