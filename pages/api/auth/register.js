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
    return res.status(200).json({
      error: false,
      message: 'Cadastro realizado com sucesso',
      results: {
        token: uuidv4(),
      },
    });

  } else {
    res.status(405).json({ message: 'Método não permitido' });
    return;
  }
}
