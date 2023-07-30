import NextCors from 'nextjs-cors';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  if (req.method === 'GET') {
    const data = {
      error: false,
      message: 'Sem erros',
      results: {
        diurno: {
          titulo: 'Diurno',
          limites: [
            {
              id: uuidv4(),
              titulo: 'Diurno',
              valor_atual: 1000.0,
              valor_min: 100.0,
              valor_max: 1200.0,
            },
          ],
        },
        noturno: {
          titulo: 'Noturno',
          limites: [
            {
              id: uuidv4(),
              titulo: 'Noturno',
              valor_atual: 1000.0,
              valor_min: 100.0,
              valor_max: 1200.0,
            },
          ],
        },
      },
    };

    res.status(200).json(data);
  }
  if (req.method === 'PUT') {
    const { limite_id, novo_valor } = req.body;

    const data = {
      error: false,
      message: 'Sem erros',
      results: {
        titulo: 'Sucesso!',
        descricao: `Limite atualizado para ${novo_valor}`,
      },
    };

    res.status(200).json(data);
  }
}
