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
      unidades: [
        {
          id: '1',
          titulo: 'Lobo Sede',
          endereco: 'Av. Nazaré, 404',
          telefone: '(91) 99307-2126',
          instagram: 'lojalobo_sede',
          link_mapa: 'https://goo.gl/maps/Y5vi8KyxDmvojz3J6',
        },
        {
          id: '2',
          titulo: 'Lobo Bosque',
          endereco: 'BR 316, km 4, 4500',
          telefone: '(91) 99316-9725',
          instagram: 'lojalobo_bosque',
          link_mapa: 'https://goo.gl/maps/unYZZFQfX9N4vgRs5',
        },
        {
          id: '3',
          titulo: 'Lobo Boulevard',
          endereco: 'Av. Visc. Souza Franco, 776',
          telefone: '(91)98402-4126',
          instagram: 'lojalobo_boulevard',
          link_mapa: 'https://goo.gl/maps/zwXpwQvoWWrff2rFA',
        },
        {
          id: '4',
          titulo: 'Lobo Castanhal',
          endereco: 'R. Sen. Antônio Lemos, 270',
          telefone: '(91) 98488-6322',
          instagram: 'lojalobo_castanhal',
          link_mapa: 'https://goo.gl/maps/p5YDRxuPZtTLv9FFA',
        },
        {
          id: '5',
          titulo: 'Lobo Castanheira',
          endereco: 'BR 316, Km 1 - Castanheira',
          telefone: '(91) 99254-6695',
          instagram: 'lojalobo_castanheira',
          link_mapa: 'https://goo.gl/maps/qP4aFq9CE2bWmcJW7',
        },
        {
          id: '6',
          titulo: 'Lobo Curuzu',
          endereco: 'Av. Alm. Barroso, 654',
          telefone: '(91)992072980',
          instagram: 'lojalobo_curuzu',
          link_mapa: 'https://goo.gl/maps/zK9qyU1ssCH7Hxj6A',
        },
        {
          id: '7',
          titulo: 'Lobo Metrópole',
          endereco: 'BR 316, km 4, 4500',
          telefone: '(91) 99285-0812',
          instagram: 'lojalobo_metropole',
          link_mapa: 'https://goo.gl/maps/QBkMZshUTWzvSLM79',
        },
        {
          id: '8',
          titulo: 'Lobo Parque',
          endereco: 'Av. Augusto Montenegro, 4300',
          telefone: '(91) 98413-0241',
          instagram: 'lojalobo_parque',
          link_mapa: 'https://goo.gl/maps/zFMyZ2yzvppEg2sf7',
        },
        {
          id: '9',
          titulo: 'Lobo Pátio',
          endereco: 'Tv. Padre Eutíquio, 1078',
          telefone: '(91) 98604-9956',
          instagram: 'lojalobo_patio',
          link_mapa: 'https://goo.gl/maps/RFDTn2zJ5Afma6zr7',
        },
      ],
    },
  };
  res.status(200).json(data);
}
