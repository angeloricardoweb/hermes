import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const data = {
    tutoriais: [
      {
        titulo: 'Como Criar um Vídeo?',
        videos: [
          {
            titulo: 'Criando videos no Video4School',
            url: 'https://vimeo.com/265900469',
            avaliacao: 5,
            autor: 'Roberto Silva',
            imagem:
              'https://api-temp.vercel.app/video4school/imgs/imgcurso00.png',
          },
        ],
      },
      {
        titulo: 'Como Editar um Vídeo no Adobe Premiere Pro?',
        videos: [
          {
            titulo: 'Introdução ao Adobe Premiere Pro',
            url: 'https://vimeo.com/114376662',
            avaliacao: 3,
            autor: 'Arnaldo Santos',
            imagem:
              'https://api-temp.vercel.app/video4school/imgs/imgcurso00.png',
          },
          {
            titulo: 'Edição Básica de Vídeo no Adobe Premiere Pro',
            url: 'https://vimeo.com/114376663',
            avaliacao: 5,
            autor: 'Arnaldo Santos',
            imagem:
              'https://api-temp.vercel.app/video4school/imgs/imgcurso00.png',
          },
          {
            titulo: 'Transições no Adobe Premiere Pro',
            url: 'https://vimeo.com/114376664',
            avaliacao: 3,
            autor: 'Arnaldo Santos',
            imagem:
              'https://api-temp.vercel.app/video4school/imgs/imgcurso00.png',
          },
        ],
      },
      {
        titulo: 'Como Fazer Animações Simples no After Effects?',
        videos: [
          {
            titulo: 'Introdução ao After Effects',
            url: 'https://vimeo.com/114376666',
            avaliacao: 5,
            autor: 'Luiz Roberto',
            imagem:
              'https://api-temp.vercel.app/video4school/imgs/imgcurso00.png',
          },
          {
            titulo: 'Animação de Texto no After Effects',
            url: 'https://vimeo.com/114376667',
            avaliacao: 5,
            autor: 'Luiz Roberto',
            imagem:
              'https://api-temp.vercel.app/video4school/imgs/imgcurso00.png',
          },
          {
            titulo: 'Animação de Imagem no After Effects',
            url: 'https://vimeo.com/114376668',
            avaliacao: 5,
            autor: 'Luiz Roberto',
            imagem:
              'https://api-temp.vercel.app/video4school/imgs/imgcurso00.png',
          },
        ],
      },
    ],
  };

  res.status(200).json(data);
}

