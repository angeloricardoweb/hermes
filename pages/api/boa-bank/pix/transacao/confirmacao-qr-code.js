import NextCors from 'nextjs-cors';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const { codigo } = req.body;

  if (req.method === 'POST') {
    const data = {
      error: false,
      message: 'Sem erros',
      results: {
        codigo: codigo,
        transacao_id: uuidv4(),
        valor: codigo === 'codigo-com-valor' ? 'R$ 100,00' : null,
        conteudo: [
          {
            id: 1,
            titulo: 'Informações Gerais',
            infos: [
              {
                id: 2,
                label: 'Valor Original',
                valor: 'R$ 0,00',
              },
              {
                id: 3,
                label: 'Multa',
                valor: 'R$ 8,00',
              },
              {
                id: 4,
                label: 'Juros',
                valor: 'R$ 16,00',
              },
            ],
          },
          {
            id: 2,
            titulo: 'Informações de Pagamento',
            infos: [
              {
                id: 1,
                label: 'Número da Sorte',
                valor: '123456789',
              },
              {
                id: 2,
                label: 'Desconto',
                valor: '10% até 10/02/2021',
              },
              {
                id: 3,
                label: 'Juros',
                valor: '1% ao mês',
              },
              {
                id: 4,
                label: 'Multa',
                valor: '2% após 15/04/2023',
              },
              {
                id: 5,
                label: 'juros_periodo',
                valor: '10% até 10/02/2021',
              },
              {
                id: 6,
                label: 'multa_periodo',
                valor: '1% ao mês',
              },
            ],
          },
          {
            id: 3,
            titulo: 'Destinatário',
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
              },
            ],
          },
          {
            id: 4,
            titulo: 'Pagador',
            infos: [
              {
                id: 1,
                label: 'Nome',
                valor: 'João da Silva',
              },
              {
                id: 2,
                label: 'CPF/CNPJ',
                valor: '123.456.789-00',
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
  } else {
    res.status(401).json({ error: true, message: 'Método não permitido' });
  }
}
