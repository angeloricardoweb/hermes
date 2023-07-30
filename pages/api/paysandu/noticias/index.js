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
      noticias: Array.from({ length: 12 }).map((_, i) => {
        {
          return {
            id: (i + 1).toString(),
            banner:
              'http://psc.sitebeta.com.br/img/site/elements/articles/campeao-copa-dos-campeoes-2002-paysandu.jpg',
            titulo: `Título da notícia ${i}`,
            slug: `titulo-da-noticia-${i}`,
            data: `${i + 1} de junho de 2023`,
            categoria: 'Futebol',
          };
        }
      }),
    },
  };

  res.status(200).json(data);
}
