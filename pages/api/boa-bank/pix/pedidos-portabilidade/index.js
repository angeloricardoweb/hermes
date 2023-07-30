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
          'Recebemos o pedido de portabilidade da chave Pix johndoe@boabank.com. Isso significa que o PSP ZYX registrou pedido em seu nome para que essa chave seja vinculada a outra conta. Para conclusão desse processo é necessária a sua confirmação em até 7 (sete) dias. Você confirma o pedido de portabilidade?',
      },
      {
        id: uuidv4(),
        mensagem:
          'Recebemos o pedido de portabilidade da chave Pix 000.000.000-00 . Isso significa que o PSP ZYX registrou pedido em seu nome para que essa chave seja vinculada a outra conta. Para conclusão desse processo é necessária a sua confirmação em até 7 (sete) dias. Você confirma o pedido de portabilidade?',
      },
    ],
  };

  res.status(200).json(data);
}
