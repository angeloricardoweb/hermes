import NextCors from 'nextjs-cors';
import { randomUUID } from 'node:crypto';

export default async function handler(req, res) {
  const { type } = req.query;

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  if (req.method === 'POST') {
    const { nome_cupom } = req.body;

    if (nome_cupom !== 'V4S20') {
      res.status(200).json({ message: 'Cupom Inválido' });
    }

    const data = {
      error: false,
      message: 'Cupom Válido',
      type: type,
      results: {
        id: randomUUID(),
        nome_cupom: 'V4S20',
        desconto: 20,
      },
    };

    res.status(200).json(data);
  } else {
    res.status(200).json({
      error: true,
      message: 'Método não permitido',
    });
  }
}

