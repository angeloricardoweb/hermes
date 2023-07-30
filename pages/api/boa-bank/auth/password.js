import NextCors from 'nextjs-cors';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const { password } = req.body;
  try {
    if (password == '123456') {
      return res.status(200).json({
        error: false,
        message: 'Sem erros',
        results: {
          message: 'Senha correta',
        },
      });
    } else {
      throw 'myException'; // gera uma exceção
    }
  } catch (error) {
    res.status(401).json({
      error: true,
      message: 'Ocorreu um erro na transação',
      results: {
        message: 'Senha incorreta',
      },
    });
  }
}
