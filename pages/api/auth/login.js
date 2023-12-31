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
    try {
      if (req.body.password == '123456' && req.body.email == 'teste@email.com') {
        return res.status(200).json({
          error: false,
          message: 'Sem erros',
          results: {
            token: uuidv4(),
            role: "baby"
          },
        });
      } else {
        throw 'myException'; // gera uma exceção
      }
    } catch (error) {
      res.status(401).json({
        error: true,
        message: 'Login ou senha incorretos',
      });
    }

  } else {
    res.status(405).json({ message: 'Método não permitido' });
    return;
  }
}
