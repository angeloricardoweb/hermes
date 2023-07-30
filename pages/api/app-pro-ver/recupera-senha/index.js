import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const { email } = req.body;

  if (!email) {
    res.status(400).json({
      error: true,
      message: 'E-mail e senha são obrigatórios',
      results: null,
    });
    return;
  }

  if (email != 'teste@teste.com') {
    res.status(401).json({
      error: true,
      message: 'E-mail inválido',
      results: null,
    });
    return;
  } else {
    res.status(200).json({
      error: false,
      message: 'E-mail de recuperação de senha enviado com sucesso',
      results: { },
    });
    return;
  }
}
