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
      municipios: [
        {
          id: 1,
          regiao: 'Rio capim',
          imagem: {
            url: 'https://amat-carajas-frontend.vercel.app/cities/city-1.svg',
          },
        },
        {
          id: 2,
          regiao: 'Araguaia',
          imagem: {
            url: 'https://amat-carajas-frontend.vercel.app/cities/city-2.svg',
          },
        },
        {
          id: 3,
          regiao: 'Carajás',
          imagem: {
            url: 'https://amat-carajas-frontend.vercel.app/cities/city-3.svg',
          },
        },
        {
          id: 4,
          regiao: 'Lago de Tucuruí',
          imagem: {
            url: 'https://amat-carajas-frontend.vercel.app/cities/city-4.svg',
          },
        },

        {
          id: 5,
          regiao: 'Xingu',
          imagem: {
            url: 'https://amat-carajas-frontend.vercel.app/cities/city-7.svg',
          },
        },
        {
          id: 6,
          regiao: 'Araguaia',
          imagem: {
            url: 'https://amat-carajas-frontend.vercel.app/cities/city-8.svg',
          },
        },
      ],
    },
  };

  res.status(200).json(data);
}
