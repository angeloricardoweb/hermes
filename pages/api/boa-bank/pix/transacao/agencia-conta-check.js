import NextCors from 'nextjs-cors';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const props = req.body;

  if (req.method === 'POST') {
    const data = {
      error: false,
      message: 'Sem erros',
      results: {
        transacao_id: uuidv4(),
        conteudo: [
          {
            id: 1,
            titulo: 'Informações do Destinatário',
            infos: [
              {
                id: 2,
                label: 'Nome',
                valor: 'Fernanda Costa',
              },
              {
                id: 3,
                label: 'PSP',
                valor: 'PSP ABCD',
              },
              {
                id: 4,
                label: 'Agência',
                valor: '1234',
              },
              {
                id: 5,
                label: 'Conta',
                valor: '1234-9',
              },
              {
                id: 6,
                label: 'CPF/CNPJ',
                valor: '***.123.123-**',
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
