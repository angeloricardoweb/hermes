import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const data = {
    pedidos: [
      {
        nome: 'Café Expresso',
        data: '14/03/2023',
        preco: 'R$ 4,50',
        formaPagamento: 'Mastercard - ****5678',
        reembolsavel: true,
      },
      {
        nome: 'Livro - Crime e Castigo',
        data: '10/03/2023',
        preco: 'R$ 35,90',
        formaPagamento: 'Visa - ****9012',
        reembolsavel: false,
      },
      {
        nome: 'Ingresso Cinema',
        data: '13/03/2023',
        preco: 'R$ 20,00',
        formaPagamento: 'Elo - ****3456',
        reembolsavel: false,
      },
      {
        nome: 'Almoço Restaurante',
        data: '12/03/2023',
        preco: 'R$ 50,00',
        formaPagamento: 'American Express - ****7890',
        reembolsavel: true,
      },
    ],
  };

  res.status(200).json(data);
}

