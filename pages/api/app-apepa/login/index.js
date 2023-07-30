import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      error: true,
      message: 'Email e senha são obrigatórios',
      results: null,
    });
    return;
  }

  if (email != 'teste@teste.com' || password != '123456') {
    res.status(401).json({
      error: true,
      message: 'Email ou senha inválidos',
      results: null,
    });
    return;
  } else {
    res.status(200).json({
      error: false,
      message: 'Login realizado com sucesso',
      results: {
        id: 1,
        nome: 'Teste',
        sobrenome: 'Bredi',
        email: 'teste@teste.com',
        token: '5a2Vfg6NwMxjqGHSXHGWywyVU8QckGi9ERHoaDciX69IDuuGYJj63ada411f10df',
      },
    });
    return;
  }
}
