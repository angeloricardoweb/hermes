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
        Empreendimentos: [
          {
            title: 'Quadra Braz Corporate',
            slug: 'https://quadra.com.vc/empreendimentos/quadra-braz-corporate',
          },
          {
            title: 'II Palágio',
            slug: 'https://quadra.com.vc/empreendimentos/il-palagio',
          },
          {
            title: 'Life Spa Gym',
            slug: 'https://quadra.com.vc/empreendimentos/life-spa-gym',
          },
          {
            title: 'Gardenia Studios',
            slug: 'https://quadra.com.vc/empreendimentos/gardenia-studios',
          },
          {
            title: 'Liris Residence',
            slug: 'http://quadra.com.vc/empreendimentos/liris-residence',
          },
          {
            title: 'Piazza',
            slug: 'https://quadra.com.vc/piazza-by-quadra',
          },
          {
            title: 'Living',
            slug: 'https://quadra.com.vc/lux-design-living',
          },
          {
            title: 'ART',
            slug: 'https://quadra.com.vc/empreendimentos/art',
          },
          {
            title: 'Concept',
            slug: 'https://quadra.com.vc/lux-design-concept',
          },
        ],
      },
      {
        Links: [
          {
            title: 'Home',
            slug: 'https://quadra.com.vc/',
          },
          {
            title: 'Sobre nós',
            slug: 'https://quadra.com.vc/sobre-nos',
          },
          {
            title: 'Empreendimentos',
            slug: 'https://quadra.com.vc/empreendimentos',
          },
          {
            title: 'Portifólio',
            slug: 'https://quadra.com.vc/portfolio',
          },
          {
            title: 'Trabalhe conosco (Em breve)',
            slug: 'https://quadra.com.vc/',
          },
        ],
      },
    ],
  };

  res.status(200).json(data);
}

