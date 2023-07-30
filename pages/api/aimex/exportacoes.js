import NextCors from 'nextjs-cors';

export default async function handler(req, res) {

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const data = {
    error: false,
    message: 'Sem erros',
    data: [
      {
        id: 4,
        titulo: "EXPORTAÇÕES DE MADEIRAS DO ESTADO DO PARÁ",
        ano: 2018-2019,
        arquivo: "https://aimex.sitebeta.com.br/exportacoes/download/4"
      },
      {
        id: 3,
        titulo: "EXPORTAÇÕES DE MADEIRAS DO ESTADO DO PARÁ",
        ano: 2017-2018,
        arquivo: "https://aimex.sitebeta.com.br/exportacoes/download/3"
      },
      {
        id: 2,
        titulo: "EXPORTAÇÕES DE MADEIRAS DO ESTADO DO PARÁ",
        ano: 2016-2017,
        arquivo: "https://aimex.sitebeta.com.br/exportacoes/download/2"
      },
      {
        id: 1,
        titulo: "EXPORTAÇÕES DE MADEIRAS DO ESTADO DO PARÁ",
        ano: 2015-2016,
        arquivo: "https://aimex.sitebeta.com.br/exportacoes/download/1"
      }
    ]
  }

  res.status(200).json(data)
}