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
    parceiros: [
      {
        id: 1,
        nome: 'Hospital São Lucas',
        imagem: 'https://img.freepik.com/icones-gratis/procurar_318-265146.jpg',
      },
      {
        id: 2,
        nome: 'Hospital São Lucas',
        imagem: 'https://img.freepik.com/icones-gratis/procurar_318-265146.jpg',
      },
      {
        id: 3,
        nome: 'Hospital São Lucas',
        imagem: 'https://img.freepik.com/icones-gratis/procurar_318-265146.jpg',
      },
      {
        id: 4,
        nome: 'Hospital São Lucas',
        imagem: 'https://img.freepik.com/icones-gratis/procurar_318-265146.jpg',
      },
      {
        id: 5,
        nome: 'Hospital São Lucas',
        imagem: 'https://img.freepik.com/icones-gratis/procurar_318-265146.jpg',
      },
      {
        id: 6,
        nome: 'Hospital São Lucas',
        imagem: 'https://img.freepik.com/icones-gratis/procurar_318-265146.jpg',
      },
    ],
  };

  res.status(200).json(data);
}

