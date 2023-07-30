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
      especialidades: [
        {
          id: '1',
          icone: 'https://oxus-consultoria-frontend.vercel.app/icons/hands.svg',
          descricao: 'Projetos de criação empresarial',
        },
        {
          id: '2',
          icone: 'Certificações nacionais e internacionais',
          descricao: 'Projetos em reestruturação operacional',
        },
        {
          id: '3',
          icone: 'Certificações nacionais e internacionais',
          descricao: 'Projetos públicos de desenvolvimento sustentável',
        },
        {
          id: '4',
          icone: 'Certificações nacionais e internacionais',
          descricao:
            'Projetos públicos de desenvolvimento econômico do estado / município',
        },
        {
          id: '5',
          icone: 'Certificações nacionais e internacionais',
          descricao: 'Certificações nacionais e internacionais',
        },
      ],
    },
  };
  res.status(200).json(data);
}
