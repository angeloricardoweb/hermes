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
    results: [
      {
        id: 1,
        numero: 41,
        titulo: 'Cidades Transformadoras',
        slug: 'cidades-transformadoras',
        capa: 'https://simineral.org.br/simineralon/img/41/capa-mobile-md.webp',
        resumo:
          'A ação de obrigação de fazer é uma ação de natureza declaratória, que visa a determinar a obrigação de fazer ou deixar de fazer determinada coisa, ou a determinar a obrigação de não fazer ou deixar de fazer determinada coisa.',
        lancamento: '2020/10/01',

      },
      {
        id: 2,
        numero: 42,
        titulo: 'Uma mineração para pessoas',
        slug: 'mineracao-para-pessoas',
        capa: 'https://simineral.org.br/simineralon/img/42/seo.webp',
        resumo:
          'A ação de obrigação de fazer é uma ação de natureza declaratória, que visa a determinar a obrigação de fazer ou deixar de fazer determinada coisa, ou a determinar a obrigação de não fazer ou deixar de fazer determinada coisa.',
        lancamento: '2020/10/01',

      },
      {
        id: 3,
        numero: 43,
        titulo: 'O Reencontro da fé',
        slug: 'o-reencontro-da-fe',
        capa: 'https://simineral.org.br/simineralon/img/43/seo.png',
        resumo:
          'O Círio de Nazaré de 2022 trouxe a renovação dos sentimentos de fé, esperança e amor, contagiando a todos que presenciam o clima mariano. A festa deste ano, já declarada como Patrimônio Cultural da Humanidade pela UNESCO e reconhecida como Patrimônio Cultural Imaterial pelo Iphan (Instituto do Patrimônio Histórico e Artístico Nacional), é a dos reencontros, após dois anos de pandemia da Covid-19, que limitou todo o mundo ao isolamento. A época também expõe a cultura do povo paraense em sua magnitude, expressando na devoção à Virgem de Nazaré as manifestações culturais e tradicionais do período.',
        lancamento: '2020/10/01',

      },
      {
        id: 4,
        numero: 44,
        titulo: 'VEM AÍ, Prêmio simineral de comunicação',
        slug: 'premio-simineral',
        capa: 'https://simineral.org.br/simineralon/img/44/seo.png',
        resumo:
          'A ação de obrigação de fazer é uma ação de natureza declaratória, que visa a determinar a obrigação de fazer ou deixar de fazer determinada coisa, ou a determinar a obrigação de não fazer ou deixar de fazer determinada coisa.',
        lancamento: '2020/10/01',

      },
      {
        id: 4,
        numero: 5,
        titulo: 'Mulher e liderança no mercado de trabalho',
        capa: 'https://simineral.org.br/img/site/simineral-on/simineral-on-05.jpg',
        resumo:
          'A ação de obrigação de fazer é uma ação de natureza declaratória, que visa a determinar a obrigação de fazer ou deixar de fazer determinada coisa, ou a determinar a obrigação de não fazer ou deixar de fazer determinada coisa.',
        lancamento: '2020/10/01',
        arquivo_desktop: "https://simineral.org.br/pdf/simineral-on/simineral-on-05-desktop.pdf?1677166229",
        arquivo_mobile: "https://simineral.org.br/pdf/simineral-on/simineral-on-05-mobile.pdf?1677166229"

      },
      {
        id: 4,
        numero: 6,
        titulo: 'Novos caminhos',
        capa: 'https://simineral.org.br/img/site/simineral-on/simineral-on-06.jpg',
        resumo:
          'A ação de obrigação de fazer é uma ação de natureza declaratória, que visa a determinar a obrigação de fazer ou deixar de fazer determinada coisa, ou a determinar a obrigação de não fazer ou deixar de fazer determinada coisa.',
        lancamento: '2020/10/01',
        arquivo_desktop: "https://simineral.org.br/pdf/simineral-on/simineral-on-06-desktop.pdf?1677166229",
        arquivo_mobile: "https://simineral.org.br/pdf/simineral-on/simineral-on-06-mobile.pdf?1677166229"

      },
    ],
  };

  res.status(200).json(data);
}

