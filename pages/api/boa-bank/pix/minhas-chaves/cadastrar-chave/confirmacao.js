import NextCors from 'nextjs-cors';
import { v4 as uuidv4 } from 'uuid';
export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const { tipo, chave } = req.body;

  let data = {
    error: false,
    message: 'Sem erros',
    results: {
      message:
        'Ao registrar essa chave, os pagadores visualizarão os seguintes dados de quem vai receber:\n- Angelo Ricardo \n- **.777.888-** \n- Instituição XYZ\nAlém disso, qualquer usuário com acesso ao seu e-mail e/ou número de telefone que você usar como chave PIX, poderá saber que você usou essa chave PIX.',
      transacao_id: uuidv4(),
    },
  };

  if (chave === '(99) 99999-9991') {
    data = {
      error: false,
      message: 'Sem erros',
      results: {
        titulo: 'Ops!',
        descricao:
          'Essa chave já pertence a um outro usuário, deseja iniciar um processo de reinvidicação?',
        transacao_id: uuidv4(),
        reivindicacao: true,
      },
    };
  }

  if (chave === '(99) 99999-9990') {
    data = {
      error: false,
      message: 'Sem erros',
      results: {
        titulo: 'Ops!',
        descricao:
          'Essa chave já está cadastrada em outro PSP, deseja iniciar um processo de portabilidade?',
        transacao_id: uuidv4(),
        portabilidade: true,
      },
    };
  }

  res.status(200).json(data);
}
