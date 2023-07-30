import NextCors from 'nextjs-cors';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const { nome } = req.body;

  try {
    if (nome === 'erro') {
      throw 'Erro ao receber pagamento';
    }
    const data = {
      error: false,
      message: 'Pagamento recebido',
      results: {
        pagamento_id: uuidv4(),
      },
    };

    res.status(200).json(data);
  } catch (error) {
    res.status(403).json({
      error: true,
      message: error,
    });
  }
}
