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
      servico: {
        sistema_redes_marketing: [
          {
            id: '1',
            icone:
              'https://oxus-consultoria-frontend.vercel.app/icons/hands.svg',
            titulo: 'Plano de Redes e Marketing',
            descricao:
              'Equipes de prontidão para lhe ajudar a alavancar seus negócios.',
          },
          {
            id: '2',
            icone:
              'https://oxus-consultoria-frontend.vercel.app/icons/hands.svg',
            titulo: 'Desenvolvimento de Aplicativo',
            descricao: 'Utilizando as melhores tecnologias do mercado.',
          },
          {
            id: '3',
            icone:
              'https://oxus-consultoria-frontend.vercel.app/icons/hands.svg',
            titulo: 'Desenvolvimento de Software',
            descricao:
              'Criamos ferramentas para lhe ajudar nos seus objetivos.',
          },
        ],
        certificacoes_gestao: [
          {
            id: '1',
            icone:
              'https://oxus-consultoria-frontend.vercel.app/icons/hands.svg',
            titulo: 'Gestão Empresarial',
            descricao: 'Sistema de Gestão integrado (SGI).',
          },
          {
            id: '2',
            icone:
              'https://oxus-consultoria-frontend.vercel.app/icons/hands.svg',
            titulo: 'Metodologia 5S',
            descricao:
              'Implantação, Auditoria, Certificação e formação de multiplicadores do programa (metodologia Japão).',
          },
          {
            id: '3',
            icone:
              'https://oxus-consultoria-frontend.vercel.app/icons/hands.svg',
            titulo: 'Certificações Internacionais',
            descricao:
              'Com base na Organização Internacional de Normalização (ISO) em parceria com a certificadora TUV RHEINLAND.',
          },
          {
            id: '4',
            icone:
              'https://oxus-consultoria-frontend.vercel.app/icons/hands.svg',
            titulo: 'Gestão da Qualidade',
            descricao:
              'Através das plataformas gestao.gov com implantação da certificação ISO 37001.',
          },
        ],
        gestao_projetos_negocios: [
          {
            id: '1',
            icone:
              'https://oxus-consultoria-frontend.vercel.app/icons/hands.svg',
            titulo: 'Plano de Negócios de Mercado',
            descricao:
              'A análise de mercado é um dos componentes do plano de negócios que está relacionado ao marketing da organização.',
          },
          {
            id: '2',
            icone:
              'https://oxus-consultoria-frontend.vercel.app/icons/hands.svg',
            titulo: 'Desenvolvimento de Startups',
            descricao: 'Em conjunto com a universidade e centros técnicos.',
          },
          {
            id: '3',
            icone:
              'https://oxus-consultoria-frontend.vercel.app/icons/hands.svg',
            titulo: 'Projeto CDR Brasil',
            descricao:
              ' Atua diretamente nas cadeias produtivas levando a ciência como base para verticalização industrial com agregação de valores em produto e no negócio para o mercado.',
          },
          {
            id: '4',
            icone:
              'https://oxus-consultoria-frontend.vercel.app/icons/hands.svg',
            titulo: 'Programa 5S Familiar',
            descricao:
              'Educação em sustentabilidade, redução de custo, evolução cultural, Gestão de projetos da área pública e privada.',
          },
        ],
        viabilidade_economica_financeira_projetos: [
          {
            id: '1',
            icone:
              'https://oxus-consultoria-frontend.vercel.app/icons/hands.svg',
            titulo: 'Serviço de Viabilidade Econõmica/Financeira',
            descricao:
              ' Reestruturaçãoes empresariais, Industriais, Agro, bionegócios e instituições financeiras (Caixa Econômica, Basa e banpará).',
          },
          {
            id: '2',
            icone:
              'https://oxus-consultoria-frontend.vercel.app/icons/hands.svg',
            titulo: 'Avaliação de Imóveis Rurais e Urbanos',
            descricao:
              'Nossos serviços de avaliação proporcionam várias vantagens aos nossos clientes.',
          },
          {
            id: '3',
            icone:
              'https://oxus-consultoria-frontend.vercel.app/icons/hands.svg',
            titulo: 'Consultoria Jurídica / Contábil',
            descricao:
              'Equipe constituída para melhorar os processos internos.',
          },
          {
            id: '4',
            icone:
              'https://oxus-consultoria-frontend.vercel.app/icons/hands.svg',
            titulo: 'Elaboração de Projetos Arquitetônicos',
            descricao: 'Parte fundamental em qualquer obra ou reforma',
          },
          {
            id: '5',
            icone:
              'https://oxus-consultoria-frontend.vercel.app/icons/hands.svg',
            titulo: 'Elaboração de Projetos de Engenharia Civil',
            descricao:
              'Projeto de prevenção e combate à incêndio, estrutural, arquitetônico e elétrico.',
          },
          {
            id: '6',
            icone:
              'https://oxus-consultoria-frontend.vercel.app/icons/hands.svg',
            titulo: 'Orçamento Analítico de Obras',
            descricao:
              'Avaliação dos custos de obra levando em consideração o levantamento quantitativo de materiais e etc...',
          },
          {
            id: '7',
            icone:
              'https://oxus-consultoria-frontend.vercel.app/icons/hands.svg',
            titulo: 'Consultoria Especializada ',
            descricao:
              'Em Projetos Estruturantes e de Infraestrutura, Soluções personalizadas garantindo o desempenho e a estabilidade.',
          },
        ],
      },
    },
  };
  res.status(200).json(data);
}
