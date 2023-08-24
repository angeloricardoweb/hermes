import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  if (!req.body.id) {
    return res.status(422).json({
      error: true,
      message: 'ID não informado',
    });
  }

  if (req.method === 'POST') {
    return res.status(200).json({
      error: false,
      message: req.body.id === 1 ? 'Favoritado' : 'Desfavoritado',
    });
  } else {
    return res.status(405).json({
      error: true,
      message: 'Método não suportado',
    });
  }
}
