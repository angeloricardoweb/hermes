import NextCors from 'nextjs-cors';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200,
  });

  const { chave } = req.body;

  if (req.method === 'POST') {
    const data = {
      error: false,
      message: 'Sem erros',
      results: {
        transacao_id: uuidv4(),
        conteudo: [
          {
            id: 2,
            titulo: 'Dados da Transação',
            infos: [
              {
                id: 1,
                label: 'Chave',
                valor: chave,
              },
              {
                id: 2,
                label: 'Nome',
                valor: 'Angelo Ricardo',
              },
              {
                id: 3,
                label: 'Documento',
                valor: '***.123.456-**',
              },
              {
                id: 4,
                label: 'PSP',
                valor: 'Banco do Brasil',
              },
            ],
          },
        ],
      },
    };
    res.status(200).json(data);
  } else {
    res.status(401).json({ error: true, message: 'Método não permitido' });
  }
}
