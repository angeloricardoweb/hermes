import NextCors from 'nextjs-cors';

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
      fluxos: [
        {
          id: 2,
          prazo: 3,
          posicao: 1,
          titulo: 'Projeto/A.R.T',
          created_at: '2022-08-25T23:37:36.000000Z',
          updated_at: '2022-08-30T13:45:31.000000Z',
          cards: [],
        },
        {
          id: 3,
          prazo: 15,
          posicao: 2,
          titulo: 'Parecer de acesso',
          created_at: '2022-08-25T23:37:47.000000Z',
          updated_at: '2022-08-30T13:45:52.000000Z',
          cards: [],
        },
        {
          id: 5,
          prazo: 20,
          posicao: 3,
          titulo: 'Entrega do Kit',
          created_at: '2022-08-25T23:38:14.000000Z',
          updated_at: '2022-08-30T13:49:23.000000Z',
          cards: [],
        },
        {
          id: 6,
          prazo: 10,
          posicao: 4,
          titulo: 'Instalação',
          created_at: '2022-08-25T23:38:25.000000Z',
          updated_at: '2022-08-30T13:48:54.000000Z',
          cards: [],
        },
        {
          id: 9,
          prazo: 5,
          posicao: 5,
          titulo: 'Entrega de Obra',
          created_at: '2022-08-25T23:39:09.000000Z',
          updated_at: '2022-08-30T13:49:57.000000Z',
          cards: [],
        },
        {
          id: 10,
          prazo: 2,
          posicao: 6,
          titulo: 'Cadastro do Cliente',
          created_at: '2022-08-30T13:43:16.000000Z',
          updated_at: '2022-08-30T13:43:16.000000Z',
          cards: [],
        },
        {
          id: 11,
          prazo: 3,
          posicao: 7,
          titulo: 'Documentação Homologação',
          created_at: '2022-08-30T13:44:37.000000Z',
          updated_at: '2022-09-01T14:27:12.000000Z',
          cards: [],
        },
        {
          id: 12,
          prazo: 9,
          posicao: 8,
          titulo: 'Vistoria',
          created_at: '2022-08-30T13:46:45.000000Z',
          updated_at: '2022-08-30T13:46:45.000000Z',
          cards: [],
        },
        {
          id: 13,
          prazo: 4,
          posicao: 9,
          titulo: 'Pedido e pagamento do KIT',
          created_at: '2022-08-30T13:51:34.000000Z',
          updated_at: '2022-08-30T13:51:34.000000Z',
          cards: [],
        },
      ],
    },
  };

  res.status(200).json(data);
}
