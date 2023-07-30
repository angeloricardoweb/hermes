import NextCors from 'nextjs-cors';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  if (req.method === 'PUT') {
    const data = {
      error: false,
      message: 'Sem erros',
      results: {
        titulo: 'Sucesso!',
        descricao: `Horário atualizado com sucesso. Novo período Diurno: 6h às 20h \nNorturno: 20h às 6h`,
      },
    };

    res.status(200).json(data);
  }
}
