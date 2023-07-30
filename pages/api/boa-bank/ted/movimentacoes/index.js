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
    results: [
      {
        id: uuidv4(),
        titulo: 'Ted Enviado',
        destinatario: {
          nome: 'Detran-DF',
        },
        devolucao_disponivel: true,
        infos: [
          {
            id: 1,
            label: 'Valor',
            valor: 'R$ 0,00',
          },
          {
            id: 2,
            label: 'Data',
            valor: '21/04/2023',
          },
          {
            id: 3,
            label: 'Hora',
            valor: '10:00',
          },
        ],
      },
      {
        id: uuidv4(),
        titulo: 'TED Recebido',
        devolucao_disponivel: false,
        destinatario: {
          nome: 'Detran-DF',
        },
        infos: [
          {
            id: 1,
            label: 'Valor',
            valor: 'R$ 90,00',
          },
          {
            id: 2,
            label: 'Data',
            valor: '21/04/2023',
          },
          {
            id: 3,
            label: 'Hora',
            valor: '10:00',
          },
        ],
      },
    ],
  };

  res.status(200).json(data);
}
