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
        name: 'Horário 1',
        logo: 'https://aqualand.sitebeta.com.br/horarios/calendario.png'
      }
    ],
  };

  res.status(200).json(data);
}
