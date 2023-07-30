import NextCors from 'nextjs-cors';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const data = {
    error: false,
    message: 'Sem erros',
    results: [
      
      {
        id: uuidv4(),
        mensagem:
          'Você solicitou a portabilidade da chave Pix johndoe@boabank.com. Isso significa que o PSP ZYX registrou pedido em seu nome para que essa chave seja vinculada a no Socred Bank',
      },
    ],
  };

  res.status(200).json(data);
}
