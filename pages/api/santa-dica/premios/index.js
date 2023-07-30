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
        id: 1,
        nome: 'Prêmio de indicação nível 1',
        descricao:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        img: 'https://fastly.picsum.photos/id/0/800/800.jpg?hmac=2CS9dA2EPkSiSrYEH3Fly9TmvHwX7f2bGdW6vsumt6g',
      },
      {
        id: 2,
        nome: 'Prêmio de número de indicações',
        descricao:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        img: 'https://fastly.picsum.photos/id/0/800/800.jpg?hmac=2CS9dA2EPkSiSrYEH3Fly9TmvHwX7f2bGdW6vsumt6g',
      },
    ],
  };

  res.status(200).json(data);
}
