import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const {
    pergunta1,
    pergunta2,
    pergunta3,
    pergunta4,
    pergunta5,
    pergunta6,
    pergunta7,
    pergunta8
  } = req.body;

  if (!pergunta1 || !pergunta2 || !pergunta3 || !pergunta4 || !pergunta5 || !pergunta6 || !pergunta7 || !pergunta8) {
    res.status(400).json({
      error: true,
      message: 'Responda todas as perguntas',
      results: null,
    });
    return;
  }

  res.status(200).json({
    error: false,
    message: 'Formulário enviado com sucesso',
    results: {
      pontuacao: 7,
      risco: 'RISCO DISCRETAMENTE AUMENTADO',
    },
  });
  return;

}
