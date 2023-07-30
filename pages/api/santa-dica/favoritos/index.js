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
      favoritos: [
        {
          id: 1,
          nome: 'MitiGarden',
          logo: 'https://api-temp.vercel.app/santa-dica/fornecedores/teste.png',
        },
        {
          id: 2,
          nome: 'Berinbelo',
          logo: 'https://api-temp.vercel.app/santa-dica/fornecedores/teste.png',
        },
      ]
    },
  };

  res.status(200).json(data);
}