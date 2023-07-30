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
      carrossel: [{
          id: '1',
          imagem_url: 'http://psc.sitebeta.com.br/img/site/banner/1.jpg',
          titulo: 'Bi Campeão da Copa Verde!',
          descricao: 'Paysandu é o maior campeão do Norte',
          abrir_em_nova_aba: true,
          link: 'https://www.google.com.br',
        },
        {
          id: '2',
          imagem_url: 'https://s2.glbimg.com/whS904buRWm-dBOaS63d5ZbhEXg=/0x0:5254x3503/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/w/C/0VbXWMQrGaKEZeM2njnw/48856689148-46597b7dc1-o.jpg',
          titulo: 'Copa do Brasil 2023',
          descricao: 'Paysandu anuncia contratação de ex-Remo, do meia Leandrinho e retorno de Léo Baiano',
          abrir_em_nova_aba: false,
          link: 'https://ge.globo.com/pa/futebol/times/paysandu/noticia/2023/04/13/paysandu-anuncia-contratacao-de-ex-remo-do-meia-leandrinho-e-retorno-de-leo-baiano.ghtml',
        },
      ],
    },
  };

  res.status(200).json(data);
}
