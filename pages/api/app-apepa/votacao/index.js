import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const { opcaomarcada, datetime } = req.body;

  if (!opcaomarcada || !datetime) {
    res.status(400).json({
      error: true,
      message: 'Marque pelo menos uma opção.',
      results: null,
    });
    return;
  }

  if (opcaomarcada === '' || datetime === '') {
    res.status(401).json({
      error: true,
      message: 'Algumas informações estão inválidas',
      results: null,
    });
    return;
  } else {
    res.status(200).json({
      error: false,
      message: 'Votação realizada com sucesso',
      results: {},
    });
    return;
  }
}
