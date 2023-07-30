import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const { email, password, nome, sobrenome } = req.body;

  if (!email) {
    res.status(400).json({
      error: true,
      message: 'E-mail é obrigatório',
      results: null,
    });
    return;
  }
  if (!password) {
    res.status(400).json({
      error: true,
      message: 'A senha é obrigatória',
      results: null,
    });
    return;
  }
  if (!nome) {
    res.status(400).json({
      error: true,
      message: 'O nome é obrigatório',
      results: null,
    });
    return;
  }
  if (!sobrenome) {
    res.status(400).json({
      error: true,
      message: 'O sobrenome é obrigatório',
      results: null,
    });
    return;
  }

  res.status(200).json({
    error: false,
    message: 'Cadastro efetuado com sucesso',
    results: { },
  });
  return;
}
