import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const { chave_id } = req.body;

  try {
    if (chave_id) {
      const data = {
        error: false,
        message: 'Sem erros',
        results: {
          titulo: 'Sucesso',
          descricao:
            'Aguarde, você receberá uma mensagem confirmando a exclusão da sua chave. A efetivação da exclusão é realizada durante o horário de funcionamento do DICT.',
        },
      };
      res.status(200).json(data);
    } else {
      throw 'myException'; // gera uma exceção
    }
  } catch (error) {
    const data = {
      error: true,
      message: 'Error',
      results: {
        titulo: 'Ops!',
        descricao:
          'Não foi possível excluir a chave. Tente novamente mais tarde.',
      },
    };
    res.status(403).json(data);
  }
}
