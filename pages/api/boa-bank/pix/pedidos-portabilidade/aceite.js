import NextCors from 'nextjs-cors';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const { aceite } = req.body;
  if (!aceite) {
    res.status(200).json({
      error: false,
      message: 'Sucesso',
      results: {
        titulo: 'Feito',
        descricao: 'Você negou este pedido de portabilidade',
      },
    });
  }

  if (aceite) {
    res.status(200).json({
      error: false,
      message: 'Sucesso',
      results: {
        titulo: 'Feito',
        descricao: 'Você aceitou este pedido de portabilidade',
      },
    });
  }
}
