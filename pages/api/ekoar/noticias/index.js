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
      noticias: [
        {
          id: 1,
          descricao:
            'Dia Mundial sem Carro: embarque no transporte público será gratuito nesta quinta-feira (22)',
          slug: 'dia-mundial-sem-carro',
          data: '31/08/2022',
        },
        {
          id: 2,
          descricao:
            'Qual a importância do meio ambiente para o futuro: preservação e inovação',
          slug: 'qual-a-importancia-do-meio-ambiente-para-o-futuro',
          data: '31/08/2022',
        },
        {
          id: 3,
          descricao:
            "Governo sanciona diretrizes do orçamento de 2023 e mantém emendas do 'orçamento secreto'",
          slug: 'governo-sanciona-diretrizes-do-orcamento-de-2023',
          data: '31/08/2022',
        },
        {
          id: 4,
          descricao: 'iPad será enviado ao espaço pela NASA para testar Alexa',
          slug: 'ipad-sera-enviado-ao-espaco-pela-nasa-para-testar-alexa',
          data: '31/08/2022',
        },
      ],
    },
  };

  res.status(200).json(data);
}
