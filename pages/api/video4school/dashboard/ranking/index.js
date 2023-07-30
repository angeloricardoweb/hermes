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
        id: '1',
        name: 'Fabricio Lopes',
        image: {
          url: 'https://api-temp.vercel.app/video4school/imgs/avatarRanking1.png',
        },
        points: '200',
        linkedin: 'https://linkedin.com.br',
        instagram: 'https://www.instagram.com/',
      },
      {
        id: '2',
        name: 'Carlos Alberto',
        image: {
          url: 'https://api-temp.vercel.app/video4school/imgs/avatarRanking2.png',
        },
        points: '100',
        linkedin: 'https://linkedin.com.br',
        instagram: 'https://www.instagram.com/',
      },
      {
        id: '3',
        name: 'Maria Pinho',
        image: {
          url: 'https://api-temp.vercel.app/video4school/imgs/avatarRanking3.png',
        },
        points: '80',
        linkedin: 'https://linkedin.com.br',
        instagram: 'https://www.instagram.com/',
      },
      {
        id: '4',
        name: 'Sandra Lopes',
        image: {
          url: 'https://api-temp.vercel.app/video4school/imgs/avatarRanking4.png',
        },
        points: '60',
        linkedin: 'https://linkedin.com.br',
        instagram: 'https://www.instagram.com/',
      },
      {
        id: '5',
        name: 'Pedro Barros',
        image: {
          url: 'https://api-temp.vercel.app/video4school/imgs/avatarRanking5.png',
        },
        points: '30',
        linkedin: 'https://linkedin.com.br',
        instagram: 'https://www.instagram.com/',
      },
    ],
  };

  res.status(200).json(data);
}
