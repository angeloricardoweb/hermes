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
      historico: [
        {
          id: 1,
          nome: 'Qual a sua sugestão de local para a confraternização da APEPA para 2023?',
          voto: 'Salão de Festas da APEPA',
          datatime: '16/05/2023 - 14:43',
        },
        {
          id: 2,
          nome: 'Qual a sua sugestão de local para a confraternização da APEPA para 2023?',
          voto: 'Salão de Festas da APEPA',
          datatime: '05/05/2023 - 20:12',
        },
        {
          id: 3,
          nome: 'Qual a sua sugestão de local para a confraternização da APEPA para 2023?',
          voto: 'Salão de Festas da APEPA',
          datatime: '01/05/2023 - 08:25',
        },
        {
          id: 4,
          nome: 'Qual a sua sugestão de local para a confraternização da APEPA para 2023?',
          voto: 'Salão de Festas da APEPA',
          datatime: '20/02/2023 - 23:14',
        },
      ],
    },
  }
  res.status(200).json(data)

}


