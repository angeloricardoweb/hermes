import NextCors from 'nextjs-cors';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  await NextCors(req, res, {
    origin: '*',
    optionsSuccessStatus: 200,
  });


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
          id: 5,
          label: 'Agencia',
          valor: '1234',
        },
        {
          id: 6,
          label: 'Conta',
          valor: '1234-9',
        }
      ],
    },
  };

  res.status(200).json(data);
}
