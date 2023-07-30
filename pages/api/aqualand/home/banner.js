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
        id: '0',
        image: '/img/sample-1.jpg',
        title: 'Ondas de diversão o ano todo!',
        text: 'Conheça o Aqualand',
        link: '#',
      },

      {
        id: '1',
        image: '/img/home-banner.webp',
        title: 'Ondas de diversão o ano todo!',
        text: 'Conheça o Aqualand',
        link: '#',
      },
    ],
  };

  res.status(200).json(data);
}
