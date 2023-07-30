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
        id: 0,
        name: 'Brisa Café',
        link: 'https://aqualand.sitebeta.com.br/cardapio/brisa-cafe.pdf',
        logo: 'https://aqualand.sitebeta.com.br/cardapio/brisa-cafe.png',
      },
      {
        id: 1,
        name: 'Maresia',
        link: 'https://aqualand.sitebeta.com.br/cardapio/maresia.jpg',
        logo: 'https://aqualand.sitebeta.com.br/cardapio/maresia.png',
      },
      {
        id: 3,
        name: 'Massa Mare',
        link: 'https://aqualand.sitebeta.com.br/cardapio/massa-mare.pdf',
        logo: 'https://aqualand.sitebeta.com.br/cardapio/massamare.png',
      },
      {
        id: 4,
        name: 'Nautilus',
        link: 'https://aqualand.sitebeta.com.br/cardapio/nautilus.pdf',
        logo: 'https://aqualand.sitebeta.com.br/cardapio/nautilus.png',
      },
      {
        id: 5,
        name: 'Swell',
        link: 'https://aqualand.sitebeta.com.br/cardapio/swell.pdf',
        logo: 'https://aqualand.sitebeta.com.br/cardapio/swell.png',
      },
      {
        id: 6,
        name: 'Tormenta',
        link: 'https://aqualand.sitebeta.com.br/cardapio/tormenta.pdf',
        logo: 'https://aqualand.sitebeta.com.br/cardapio/bar-tormenta.png',
      },
    ],
  };

  res.status(200).json(data);
}
