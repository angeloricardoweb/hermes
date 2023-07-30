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
        titulo: 'SUSTENTABILIDADE',
        resumo: 'Novos projetos sustentáveis...',
        url_imagem: 'https://www.nomedaimagemtest.com.br/imagemtest.png',
        slug: 'sustentabilidade',
        data: '18/12/2022',
        editoria: "editoria 1",
      },
      {
        id: 2,
        titulo: 'MERCADO',
        resumo: 'Balança Comercial tem alta...',
        url_imagem: 'https://www.nomedaimagemtest.com.br/imagemtest.png',
        slug: 'mercado',
        data: '18/12/2022',
        editoria: "editoria 2",
      },
      {
        id: 3,
        titulo: 'MINERAÇÃO',
        resumo: 'Lucro de 2022 já e o maior da...',
        url_imagem: 'https://www.nomedaimagemtest.com.br/imagemtest.png',
        slug: 'mineracao',
        data: '18/12/2022',
        editoria: "editoria 3",
      },
    ],
  };

  res.status(200).json(data);
}
