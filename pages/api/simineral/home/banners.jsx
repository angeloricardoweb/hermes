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
      banners: [
        {
          id: 1,
          nome: 'Banner 1',
          imagem_url: 'https://simineral-frontend-4pdytesh5-bredi-team.vercel.app/img/banner.png',
          link: 'www.google.com.br',
          target: '_blank'
        },
        {
          id: 2,
          nome: 'Banner 2',
          imagem_url: 'https://simineral-frontend-4pdytesh5-bredi-team.vercel.app/img/banner.png',
          link: 'www.google.com.br',
          target: '_blank'
        },
        {
          id: 3,
          nome: 'Banner 3',
          imagem_url: 'https://simineral-frontend-4pdytesh5-bredi-team.vercel.app/img/banner.png',
          link: 'www.google.com.br',
          target: '_self'
        },
      ],
    },
  };

  res.status(200).json(data);
}
