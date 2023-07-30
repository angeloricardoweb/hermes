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
      usuario: {
        id: 1,
        nome: 'Robson Almeida',
        email: 'robsonalmeida@gmail.com',
        cep: '66000-000',
        celular: '(91) 99999-9999',
        favoritos: [
          {
            id: 1,
            nome: 'MitiGarden',
            logo: 'https://api-temp.vercel.app/santa-dica/fornecedores/teste.png',
          },
          {
            id: 4,
            nome: 'Berinbelo',
            logo: 'https://api-temp.vercel.app/santa-dica/fornecedores/teste.png',
          },
        ]
      }
    },
  };

  res.status(200).json(data);
}