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
      carrossel: [
        {
          id: 1,
          imagem: {
            url: 'https://api-temp.vercel.app/issaa/banner-issaa-v1.jpg',
            alt: 'pessoas apertando as mãos',
          },
          hero_texto: {
            titulo:
              'ISSAA VAI ADMINISTRAR A POLI METROPOLITANA - POLICLÍNICAS DO PARÁ',
            descricao:
              'Um equipe altamente capacitada, com profissionais nos mais diversos tipos de segmentos administrativos',
          },
          link: 'https://www.google.com.br',
        },
        // {
        //   id: 2,
        //   imagem: {
        //     url: 'https://api-temp.vercel.app/issaa/banner-issaa-v2.jpg',
        //     alt: 'pessoas apertando as mãos',
        //   },
        //   hero_texto: {
        //     titulo:
        //       'ISSAA VAI ADMINISTRAR A POLI METROPOLITANA - POLICLÍNICAS DO PARÁ',
        //     descricao:
        //       'Um equipe altamente capacitada, com profissionais nos mais diversos tipos de segmentos administrativos',
        //   },
        //   link: 'https://www.google.com.br',
        // },
      ],
    },
  };

  res.status(200).json(data);
}
