import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const { limite_id, novo_valor } = req.body;

  const data = {
    error: false,
    message: 'Sem erros',
    results: {
      titulo: 'Sucesso!',
      descricao: `Limite atualizado para ${novo_valor}`,
    },
  };

  res.status(200).json(data);
}
