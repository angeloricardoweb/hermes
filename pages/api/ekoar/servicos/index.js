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
      servicos: [
        {
          id: 1,
          icone: 'qualidade-ar',
          descricao:
            'Amostragem ambiental do ar nas proximidades dos empreendimentos e atividades com potencial poluidor (CONAMA 491/2018)',
          slug: 'Qualidade do ar',
          imagem: {
            url: 'https://hraeng.com.br/wp-content/uploads/2020/03/hidrometria_topobatimetria3.jpg',
            alt: 'Qualidade do ar',
          },
        },
        {
          id: 2,
          icone: 'emissoes',
          descricao:
            'Amostragem dos efluentes gasosos e particulados em dutos e chaminés (Res. CONAMA 382/2006 E 436/2011)',
          slug: 'Emissões atmosféricas',
          imagem: {
            url: 'https://www.sinteseambiental.com.br/wp-content/uploads/2018/10/estudos-ambientais.jpg',
            alt: 'Emissões atmosféricas',
          },
        },
        {
          id: 3,
          icone: 'teste-queima',
          descricao:
            'Para incineradores de resíduos e fornos de clínquer (Conama 316/2002 e 499/2020)',
          slug: 'Teste de queima',
          imagem: {
            url: 'https://www.marinha.mil.br/chm/sites/www.marinha.mil.br.chm/files/styles/large/public/banner/meteorologia.jpg?itok=fi9l--c0',
            alt: 'Teste de queima',
          },
        },
        {
          id: 4,
          icone: 'auditorias',
          descricao:
            'Para as mais diversas atividades industriais, portuárias e indústria de petróleo, gás natural e seus derivados (Conama 306/2002)',
          slug: 'Auditorias ambientais',
          imagem: {
            url: 'https://www.terraanalises.com/doutor/uploads/2/blog/2021/05/capa-qual-a-diferenca-entre-ruido-ambiental-e-ocupacional.jpg',
            alt: 'Auditorias ambientais',
          },
        },
        {
          id: 5,
          icone: 'treinamentos',
          descricao: 'Segurança do Trabalho, Ambiental, Sanitária e Social',
          slug: 'Treinamentos e trabalhos',
          imagem: {
            url: 'https://www.terraanalises.com/doutor/uploads/2/blog/2021/05/capa-qual-a-diferenca-entre-ruido-ambiental-e-ocupacional.jpg',
            alt: 'Treinamentos e trabalhos',
          },
        },
        {
          id: 6,
          icone: 'ar-interno',
          descricao:
            'Avaliação físico-química e microbiológica dos ambientes climatizados de uso público e coletivo (RES. 09/2003 da ANVISA)',
          slug: 'Ar interno climatizado',
          imagem: {
            url: 'https://www.terraanalises.com/doutor/uploads/2/blog/2021/05/capa-qual-a-diferenca-entre-ruido-ambiental-e-ocupacional.jpg',
            alt: 'Ar interno climatizado',
          },
        },
        {
          id: 7,
          icone: 'medicao-ruido',
          descricao:
            'Medição da pressão sonora em ambientes internos e externos, conforme os requisitos da (NBR 10151 e 10152 e suas erratas)',
          slug: 'Medição de ruído ambiental',
          imagem: {
            url: 'https://www.terraanalises.com/doutor/uploads/2/blog/2021/05/capa-qual-a-diferenca-entre-ruido-ambiental-e-ocupacional.jpg',
            alt: 'Medição de ruído ambiental',
          },
        },
        {
          id: 8,
          icone: 'servicos-meteorologicos',
          descricao:
            'Monitoramentos das condições climáticas ambientais com uso de estações meteorológicas',
          slug: 'Serviços meteorológicos',
          imagem: {
            url: 'https://www.terraanalises.com/doutor/uploads/2/blog/2021/05/capa-qual-a-diferenca-entre-ruido-ambiental-e-ocupacional.jpg',
            alt: 'Serviços meteorológicos',
          },
        },
        {
          id: 9,
          icone: 'estudos-ambientais',
          descricao:
            'Avaliação ambiental de áreas contaminadas por substâncias químicas em decorrência de atividades antrópicas. (NBR 10004 e CONAMA 420/2009)',
          slug: 'Estudos ambientais',
          imagem: {
            url: 'https://www.terraanalises.com/doutor/uploads/2/blog/2021/05/capa-qual-a-diferenca-entre-ruido-ambiental-e-ocupacional.jpg',
            alt: 'Estudos ambientais',
          },
        },
        {
          id: 10,
          icone: 'hidrometria',
          descricao:
            'Medição da largura e vazão em corpos hídricos, solicitação da outorga de captação/lançamento. Projetos de ETAs e ETEs. Estações de Tratamento de Água e Esgoto(convencional e sistemas de filtragens: areia, carvão e resinas - catiônicas e aniônicas) para indústria e condomínios.',
          slug: 'Serviços de hidrometria',
          imagem: {
            url: 'https://www.terraanalises.com/doutor/uploads/2/blog/2021/05/capa-qual-a-diferenca-entre-ruido-ambiental-e-ocupacional.jpg',
            alt: 'Serviços de hidrometria',
          },
        },
      ],
    },
  };

  res.status(200).json(data);
}

