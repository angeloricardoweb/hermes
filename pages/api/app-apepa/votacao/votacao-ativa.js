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
      listavotacaoativa: [
        {
          id: 1,
          status: true,
          tituloVotacao: 'Qual a sua sugestão de local para a confraternização da APEPA para 2023?',
          opcoes: [
            {
              id: 1,
              label: 'Salão de Festas da APEPA',
            },
            {
              id: 2,
              label: 'Óticas Diniz',
            },
            {
              id: 3,
              label: 'Smart Fit',
            },
            {
              id: 4,
              label: 'Pague Menos',
            },
          ]
        },
      ],
    },
  }
  res.status(200).json(data)

}


