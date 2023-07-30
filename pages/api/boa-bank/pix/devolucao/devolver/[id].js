import NextCors from 'nextjs-cors';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const { id } = req.query;
  const { valor, identificador } = req.body;

  if (req.method === 'POST') {
    const data = {
      error: false,
      message: 'Sem erros',
      results: {
        devolucao_disponivel: false,
        comprovante_file:
          'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        conteudo: [
          {
            id: 2,
            titulo: 'Sucesso',
            infos: [
              {
                id: 1,
                label: 'Id',
                valor: uuidv4(),
              },
              {
                id: 2,
                label: 'Data',
                valor: '23/04/2023',
              },
              {
                id: 3,
                label: 'Hora',
                valor: '4h30',
              },
              {
                id: 4,
                label: 'Valor devolvido',
                valor: valor,
              },
              {
                id: 5,
                label: 'Identificador',
                valor: identificador,
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
