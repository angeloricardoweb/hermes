import NextCors from 'nextjs-cors';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const params = req.query.params;

  try {
    if (params[2] !== 'fcea920f7412b5da7be0cf42b8c93759') {
      throw 'Senha Inválida';
    }
    const data = {
      error: false,
      message: 'Login realizado com sucesso',
      results: {
        parametros_recebidos: params,
      },
    };
    res.status(200).json(data);
  } catch (error) {
    res.status(401).json({
      error: true,
      message: error,
      results: null,
    });
  }
}
