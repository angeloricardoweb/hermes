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
      diretoria: [
        {
          id: 1,
          nome: 'Jair Lopes Martins',
          avatar:
            'https://amat-carajas-frontend.vercel.app/diretoria/presidente-1.jpeg',
          cargo: 'Presidente',
          descricao:
            'Presidente da AMATCarajás Biênio 2021-2022 ,  Prefeito de Conceição do Araguaia eleito em 2016 e reeleito em 2021',
          email: 'presidencia@amatcarajas.org.br',
          telefone: '(91) 4006-2350',
        },
        {
          id: 2,
          nome: 'Alexandre França Siqueira',
          avatar:
            'https://amat-carajas-frontend.vercel.app/diretoria/vice-1.png',
          cargo: 'Vice-Presidente',
          descricao:
            '1º Vice-Presidente da AMATCarajás Biênio 2021-2022, Prefeito de Tucuruí eleito em 2021',
          // email: 'presidencia@amatcarajas.org.br',
          // telefone: '(91) 4006-2350',
        },
        {
          id: 3,
          nome: 'Maria das Graças Medeiros',
          avatar:
            'https://amat-carajas-frontend.vercel.app/diretoria/vice-2.png',
          cargo: 'Vice-Presidente',
          descricao:
            '2º Vice-Presidente da AMATCarajás Biênio 2021-2022,   Prefeita de Nova Ipixuna eleita em 2016 e reeleita em 2021',
          // email: 'presidencia@amatcarajas.org.br',
          // telefone: '(91) 4006-2350',
        },
        {
          id: 4,
          nome: 'Jardel Rodrigues da Silva',
          avatar:
            'https://amat-carajas-frontend.vercel.app/diretoria/secretario-1.jpg',
          cargo: 'Secretário Executivo',
          // descricao:
          //   'Presidente da AMATCarajás Biênio 2021-2022 ,  Prefeito de Conceição do Araguaia eleito em 2016 e reeleito em 2021',
          email: 'sec.executivo@amatcarajas.org.br',
          telefone: '(91) 4006-2350',
        },
      ],
    },
  };

  res.status(200).json(data);
}
