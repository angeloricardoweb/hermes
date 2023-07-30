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
        id: '2',
        image: 'https://api-temp.vercel.app/aqualand/3.jpg',
        alt: 'Imagem de galeria',
      },

      {
        id: '3',
        image: 'https://api-temp.vercel.app/aqualand/4.jpg',
        alt: 'Imagem de galeria',
      },

      {
        id: '4',
        image: 'https://api-temp.vercel.app/aqualand/5.jpg',
        alt: 'Imagem de galeria',
      },

      {
        id: '5',
        image: 'https://api-temp.vercel.app/aqualand/6.jpg',
        alt: 'Imagem de galeria',
      },

      {
        id: '6',
        image: 'https://api-temp.vercel.app/aqualand/7.jpg',
        alt: 'Imagem de galeria',
      },

      {
        id: '7',
        image: 'https://api-temp.vercel.app/aqualand/8.jpg',
        alt: 'Imagem de galeria',
      },

      {
        id: '8',
        image: 'https://api-temp.vercel.app/aqualand/9.jpg',
        alt: 'Imagem de galeria',
      },

      {
        id: '9',
        image: 'https://api-temp.vercel.app/aqualand/10.jpg',
        alt: 'Imagem de galeria',
      },
    ],
  };

  res.status(200).json(data);
}
