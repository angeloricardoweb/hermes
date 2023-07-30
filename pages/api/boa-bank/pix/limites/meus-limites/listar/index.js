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
    results: {
      diurno: {
        titulo: 'Diurno',
        limites: [
          {
            id: uuidv4(),
            titulo: 'Mensal',
            valor_atual: 1000.0,
            valor_min: 100.0,
            valor_max: 1200.0,
          },
          {
            id: uuidv4(),
            titulo: 'Diário',
            valor_atual: 1000.0,
            valor_min: 100.0,
            valor_max: 1200.0,
          },
          {
            id: uuidv4(),
            titulo: 'Internet',
            valor_atual: 1000.0,
            valor_min: 100.0,
            valor_max: 1200.0,
          },
          {
            id: uuidv4(),
            titulo: 'Celular/Tablet',
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
