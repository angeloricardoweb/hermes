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
    results: {
      conquistas: [
        {
          id: '1',
          nome: 'Campeonato Paraense',
          titulos: 49,
          foto: 'https://i.imgur.com/aZFgmVO.png',
          periodo: '1920 - 2021',
        },
        {
          id: '2',
          nome: 'Brasileiro Série B',
          titulos: 2,
          foto: 'http://psc.sitebeta.com.br/img/site/elements/trophy/campeonato-brasileiro-serie-b.png',
          periodo: '1991 - 2001',
        },
        {
          id: '3',
          nome: 'Copa Verde',
          titulos: 3,
          foto: 'https://i.imgur.com/oI6u6QX.png',
          periodo: '2016 - 2018 - 2022',
        },
        {
          id: '4',
          nome: 'Copa dos Campeões',
          titulos: 1,
          foto: 'http://psc.sitebeta.com.br/img/site/elements/trophy/copa-dos-campeoes.png',
          periodo: '2002',
        },
        {
          id: '5',
          nome: 'Copa Norte',
          titulos: 1,
          foto: 'http://psc.sitebeta.com.br/img/site/elements/trophy/copa-norte.png',
          periodo: '2002',
        },
      ],
    },
  };
  res.status(200).json(data);
}
