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
      status: [
        {
          id: 1,
          nome: "Esporte",
          slug: "esporte",
        },
        {
          id: 2,
          nome: "Gastronomia",
          slug: "gastronomia",
        },
        {
          id: 3,
          nome: "Futebol",
          slug: "futebol",
        },
      ],
    },
  };

  res.status(200).json(data);
}
