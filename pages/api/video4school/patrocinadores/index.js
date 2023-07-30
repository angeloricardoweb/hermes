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
      patrocinadores: [
        {
          id: 1,
          imagem: {
            url: 'https://api-temp.vercel.app/video4school/patrocinador.png',
          },
          title: 'santa madre',
        },
        {
          id: 2,
          imagem: {
            url: 'https://api-temp.vercel.app/video4school/patrocinador.png',
          },
          title: 'santa madre',
        },
        {
          id: 3,
          imagem: {
            url: 'https://api-temp.vercel.app/video4school/patrocinador.png',
          },
          title: 'santa madre',
        },
        {
          id: 4,
          imagem: {
            url: 'https://api-temp.vercel.app/video4school/patrocinador.png',
          },
          title: 'santa madre',
        },
        {
          id: 5,
          imagem: {
            url: 'https://api-temp.vercel.app/video4school/patrocinador.png',
          },
          title: 'santa madre',
        },
        {
          id: 6,
          imagem: {
            url: 'https://api-temp.vercel.app/video4school/patrocinador.png',
          },
          title: 'santa madre',
        },
        {
          id: 7,
          imagem: {
            url: 'https://api-temp.vercel.app/video4school/patrocinador.png',
          },
          title: 'santa madre',
        },
      ],
    },
  };

  res.status(200).json(data);
}
