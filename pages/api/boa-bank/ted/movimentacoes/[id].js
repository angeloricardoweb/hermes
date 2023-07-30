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
      id: uuidv4(),
      devolucao_disponivel: true,
      conteudo: [
        {
          id: 1,
          titulo: 'Sucesso',
          infos: [
            {
              id: 1,
              label: 'Id',
              valor: uuidv4(),
            },
            {
              id: 2,
              label: 'Hora',
              valor: '4h30',
            },
            {
              id: 3,
              label: 'Valor',
              valor: 'R$ 100,00',
            },
          ],
        },
        {
          id: 2,
          titulo: 'Informações do Destinatário',
          infos: [
            {
              id: 1,
              label: 'Nome',
              valor: 'Detran-DF',
            },
            {
              id: 2,
              label: 'CPF/CNPJ',
              valor: '***.456.789-**',
            },
            {
              id: 3,
              label: 'PSP',
              valor: 'PSP XYZ',
            },
          ],
        },
        {
          id: 3,
          titulo: 'Informações do Pagador',
          infos: [
            {
              id: 1,
              label: 'Nome',
              valor: 'João da Silva',
            },
            {
              id: 2,
              label: 'CPF/CNPJ',
              valor: '***.456.789-**',
            },
            {
              id: 3,
              label: 'PSP',
              valor: 'PSP ABC',
            },
          ],
        },
      ],
    },
  };

  res.status(200).json(data);
}
