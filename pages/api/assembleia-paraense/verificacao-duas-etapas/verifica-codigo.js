import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const { matricula } = req.body;

  if (!matricula) {
    res.status(400).json({
      error: true,
      message: 'O campo do código é obrigatório.',
      results: null,
    });
    return;
  }

  if (matricula != '1234') {
    res.status(401).json({
      error: true,
      message: 'O código está incorreto.',
      results: null,
    });
    return;
  } else {
    res.status(200).json({
      error: false,
      message: 'Dispositivo validado com sucesso !',
    });
    return;
  }
}
