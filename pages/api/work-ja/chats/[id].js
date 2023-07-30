import NextCors from 'nextjs-cors';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const { id } = req.query;

  if (req.method === 'GET') {
    const data = {
      error: false,
      message: 'Sem erros',
      results: {
        chat_id: id,
        nome: 'Ricardo Pedreiro',
        mensagens: [
          {
            id: uuidv4(),
            texto: 'Olá, tudo bem?',
            data: '10/05/2023 14:30',
            remetente: 'cliente',
          },
          {
            id: uuidv4(),
            texto: 'Tudo bem, e você?',
            data: '10/05/2023 14:30',
            remetente: 'prestador',
          },
          {
            id: uuidv4(),
            texto:
              'Td ótimo, gostaria de saber se você faz serviços de pintura?',
            data: '10/05/2023 14:30',
            remetente: 'cliente',
          },
          {
            id: uuidv4(),
            texto: 'Sim, faço. Qual seria o serviço?',
            data: '10/05/2023 14:30',
            remetente: 'prestador',
          },
        ],
      },
    };
    return res.status(200).json(data);
  }

  if (req.method === 'POST') {
    const { texto } = req.body;
    const data = {
      error: false,
      message: 'Mensagem enviada',
      results: {
        mensagem: texto,
      },
    };
    return res.status(200).json(data);
  } else {
    return res
      .status(405)
      .json({ error: true, message: 'Método não permitido' });
  }
}
