import NextCors from 'nextjs-cors';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  if (req.method === 'POST') {
    const data = {
      error: false,
      message: 'Sem erros',
      results: {
        transacao_id: uuidv4(),
        valor_cobrado: 'R$ 100,00',
        conteudo: [
          {
            id: 1,
            titulo: 'O Pagador irá ver essas informações',
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
                id: 6,
                label: 'CPF/CNPJ',
                valor: '***.123.123-**',
              },
              {
                id: 7,
                label: 'Chave',
                valor: '(91) 9 9999-9999',
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
