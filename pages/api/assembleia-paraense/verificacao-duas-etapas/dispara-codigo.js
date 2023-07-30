import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const { matricula, playerid } = req.body;

  if (!matricula || !playerid) {
    res.status(400).json({
      error: true,
      message: 'matricula e senha são obrigatórios',
      results: null,
    });
    return;
  }

  if (matricula != '366600' || playerid != '123456') {
    res.status(401).json({
      error: true,
      message: 'Obtivemos um erro',
      results: null,
    });
    return;
  } else {
    res.status(200).json({
      error: false,
      message: 'Dispositivo cadastrado com sucesso',
      results: {
        playerid: '123456',
        matricula: '366600'
      },
    });
    return;
  }
}
