import NextCors from 'nextjs-cors';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const { transacao_id } = req.body;
  try {
    if (!transacao_id) {
      throw {
        error: true,
        message: 'Erro',
        results: {
          titulo: 'Sem id da reivindicacao',
          descricao: 'Erro na requisição',
        },
      };
    }
    const data = {
      error: false,
      message: 'Sem erros',
      results: {
        titulo: 'Reivindicação solicitada com sucesso!',
        descricao:
          'Agora você tem 7 dias para acessar o ambiente Pix da instituição que a chave está cadastrada e aceitar a revindicação dessa chave para o Socred.',
      },
    };
    res.status(200).json(data);
  } catch (error) {
    res.status(401).json(error);
  }
}
