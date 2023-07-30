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
      carrossel: [
        {
          id: 1,
          imagem: {
            url: 'https://amat-carajas-frontend.vercel.app/banners/banner-1.png',
            alt: 'foto da cidade',
          },
          hero_texto: {
            titulo:
              'Parauapebas é uma cidade localizada no sudeste do estado do Pará, no Brasil. É conhecida como a capital do minério de ferro, devido à grande quantidade de minério de ferro presente na região e às atividades de mineração que ocorrem na cidade. ',
          },
          link: 'https://amat-carajas-frontend.vercel.app/',
        },
        {
          id: 2,
          imagem: {
            url: 'https://amat-carajas-frontend.vercel.app/banners/banner-1.svg',
            alt: 'foto da cidade',
          },
          hero_texto: {
            titulo:
              'São Geraldo do Araguaia é uma cidade localizada no sudeste do estado do Pará, no Brasil. Com uma população de cerca de 25.000 habitantes, a cidade é um importante centro urbano da região e tem grande importância econômica e cultural.',
          },
          link: 'https://amat-carajas-frontend.vercel.app/',
        },

        {
          id: 3,
          imagem: {
            url: 'https://amat-carajas-frontend.vercel.app/banners/banner-3.png',
            alt: 'foto da cidade',
          },
          hero_texto: {
            titulo:
              'A cidade Floresta do Araguaia é um município do estado do Pará, localizado na região sudeste do estado, na microrregião de Conceição do Araguaia. Com uma população estimada em cerca de 15 mil habitantes, a cidade é conhecida por suas belezas naturais e por sua forte tradição cultural.',
          },
          link: 'https://amat-carajas-frontend.vercel.app/',
        },
      ],
    },
  };

  res.status(200).json(data);
}
