import NextCors from 'nextjs-cors';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const { tipo, chave } = req.body;

  const data = {
    error: false,
    message: 'Sem erros',
    results: {
      transacao_id: uuidv4(),
      infos: [
        {
          id: 1,
          label: 'Nome',
          valor: 'Fernanda Costa',
        },
        {
          id: 2,
          label: 'PSP',
          valor: 'PSP ABCD',
        },
        {
          id: 3,
          label: 'CPF',
          valor: '***.123.123-**',
        },
        {
          id: 4,
          label: 'Tipo de Chave',
          valor: tipo,
        },
        {
          id: 5,
          label: 'Chave',
          valor: chave,
        },
      ],
    },
  };

  res.status(200).json(data);
}
