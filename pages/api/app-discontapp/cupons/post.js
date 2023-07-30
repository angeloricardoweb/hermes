import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200,
  });

  const { nome_cupom, validade, resumo, imagem_capa, valor_desconto } = req.body;

  if (!nome_cupom || !validade || !resumo || !imagem_capa || !valor_desconto ) {
    res.status(400).json({
      error: true,
      message: 'Preencha os campos obrigatórios',
      results: null,
    });
    return;
  } else {
    res.status(200).json({
      error: false,
      message: 'Cupom cadastrado com sucesso',
      results: { },
    });
    return;
  }
}
