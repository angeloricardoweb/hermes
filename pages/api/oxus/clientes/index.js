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
      clientes: [
        {
          id: '1',
          imagem:
            'https://oxus-consultoria-frontend.vercel.app/clientes/albras.png',
          titulo: 'Albras',
        },
        {
          id: '12',
          imagem:
            'https://oxus-consultoria-frontend.vercel.app/clientes/braskem.png',
          titulo: 'braskem',
        },
        {
          id: '13',
          imagem:
            'https://oxus-consultoria-frontend.vercel.app/clientes/chevrolet.png',
          titulo: 'chevrolet',
        },
        {
          id: '14',
          imagem:
            'https://oxus-consultoria-frontend.vercel.app/clientes/fiat.png',
          titulo: 'fiat',
        },
        {
          id: '15',
          imagem:
            'https://oxus-consultoria-frontend.vercel.app/clientes/hyundai.png',
          titulo: 'hyundai',
        },
        {
          id: '16',
          imagem:
            'https://oxus-consultoria-frontend.vercel.app/clientes/kia.png',
          titulo: 'kia',
        },
        {
          id: '17',
          imagem:
            'https://oxus-consultoria-frontend.vercel.app/clientes/pegeout.png',
          titulo: 'pegeout',
        },
        {
          id: '18',
          imagem:
            'https://oxus-consultoria-frontend.vercel.app/clientes/petrobras.png',
          titulo: 'petrobras',
        },
        {
          id: '19',
          imagem:
            'https://oxus-consultoria-frontend.vercel.app/clientes/vale.png',
          titulo: 'vale',
        },
      ],
    },
  };
  res.status(200).json(data);
}
