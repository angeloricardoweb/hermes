import NextCors from 'nextjs-cors';
import { content } from '../../../../utils/content';

export default async function handler(req, res) {
  const { slug } = req.query;
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const data = {
    error: false,
    message: 'Sem erro',
    results: {
      noticia: {
        id: (Math.floor(Math.random() * 100) + 1).toString(),
        banner: content.banner_lg,
        titulo: content.titulo,
        slug: slug,
        fonte_da_noticia: {
          nome: content.fonte.nome,
          link: content.fonte.link,
        },
        data: content.data,
        body: content.body,
        categoria: content.categoria,
        outros_posts: Array.from({ length: 4 }).map((_, i) => {
          {
            return {
              id: (i + 1).toString(),
              banner: content.banner_lg,
              titulo: `Título da notícia ${i}`,
              slug: `titulo-da-noticia-${i}`,
              data: `${i + 1} de junho de 2023`,
              categoria: content.categoria,
            };
          }
        }),
      },
    },
  };
  return res.status(200).json(data);
}
