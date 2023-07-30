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
      ultimo_jogo: {
        adversario: {
          nome: 'São Raimundo-RR',
          escudo:
            'http://psc.sitebeta.com.br/img/site/elements/teams/b.png',
        },
        placar: {
          paysandu: 1,
          adversario: 0,
        },
        link_lances: 'https://www.youtube.com/watch?v=QH2-TGUlwu4',
      },
      proximo_jogo: {
        adversario: {
          nome: 'São Raimundo-RR',
          escudo:
            'http://psc.sitebeta.com.br/img/site/elements/teams/b.png',
        },
        data: 'Sábado, 10/2022',
        hora: '16h00',
        local: 'Estádio Mangueirão',
        descricao: 'Campeonato Brasileiro Série C, 1ª rodada',
        transmissao: 'Premiere, SportTv',
      },
    },
  };

  res.status(200).json(data);
}
