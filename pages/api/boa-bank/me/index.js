import NextCors from 'nextjs-cors';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const data = {
    error: false,
    message: 'Sem erros',
    results: {
      email: 'johndoe@email.com',
      saldo: 'R$ 1.000,00',
      tipo: 'PJ',
      cnpj: '00.000.000/0000-03',
      nome: 'John Doe',
      tipo_conta: 'Conta Corrente',
      nivel_conta: 'prata',
    },
  };

  res.status(200).json(data);
}
