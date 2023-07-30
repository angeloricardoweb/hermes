import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const data = {
    navLinks: [
      {
        link: 'Home',
        slug: '/',
      },
      {
        link: 'Sobre nós',
        slug: '/sobre-nos',
      },
      {
        link: 'Empreendimentos',
        slug: '/empreendimentos',
      },
      {
        link: 'Portfólio',
        slug: '/portfolio',
      },
    ],
  };

  res.status(200).json(data);
}

