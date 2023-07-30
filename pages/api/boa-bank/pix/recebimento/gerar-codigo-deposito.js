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
  if (!transacao_id)
    return res.status(401).json({
      error: true,
      message: 'Ocorreu um erro na transação',
      results: {
        msg: 'Transação não encontrada',
        title: 'Ops, ocorreu um erro!',
      },
    });

  if (req.method === 'POST') {
    const data = {
      error: false,
      message: 'Sem erros',
      results: {
        recebedor: 'João da Silva',
        valor: 'R$ 100,00',
        codigo_copia_cola:
          '00020126580014BR.GOV.BCB.PIX0136727f7a8a-d8d3-4348-a1c3-b5d820cd5cc1520400005303986540510.005802BR5924Angelo Ricardo dos Anjos6009SAO PAULO61080540900062240520xDvLxrG8Pc3nKDKslhuq63043B80',
      },
    };

    res.status(200).json(data);
  } else {
    res.status(401).json({ error: true, message: 'Método não permitido' });
  }
}
