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
    encarte: [
      {
        id: 1,
        titulo: 'Tema do Encarte',
        imagens: {
          primeira_folha: '/img/encarte/encarte1.jpg',
          segunda_folha: '/img/encarte/encarte2.jpg',
          terceira_folha: '/img/encarte/encarte2.jpg',
          quarta_folha: '/img/encarte/encarte3.jpg',
          quinta_folha: '/img/encarte/encarte4.jpg',
        }
      },
    ]
  }

  res.status(200).json(data)
}
