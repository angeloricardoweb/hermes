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
      detalhes: {
        pagina: 'Produtos',
        categoria: 'Todos as categorias',
        subCategoria: 'Todas as subcategorias',
        titulo: 'Todos os Produtos',
      },
      produtos: [
        {
          produto_id: 1,
          nome: 'Roupão azul',
          slug: 'roupao-azul',
          preco: 1000,
          maxParcelas: 4,
          image: {
            url: 'https://api-temp.vercel.app/manuella-melo/prod-1.png',
          },
        },
        {
          produto_id: 2,
          nome: 'Biquini Marrom',
          slug: 'biquini-marrom',
          preco: 1423,
          maxParcelas: 5,
          image: {
            url: 'https://api-temp.vercel.app/manuella-melo/prod-2.png',
          },
        },
        {
          produto_id: 3,
          nome: 'Roupa de Praia Festa',
          slug: 'roupa-de-praia-festa',
          preco: 300,
          maxParcelas: 3,
          image: {
            url: 'https://api-temp.vercel.app/manuella-melo/prod-3.png',
          },
        },
        {
          produto_id: 3,
          nome: 'Biquini Preto',
          slug: 'biquini-preto',
          preco: 420,
          maxParcelas: 3,
          image: {
            url: 'https://api-temp.vercel.app/manuella-melo/prod-4.png',
          },
        },
      ],
    },
  };

  res.status(200).json(data);
}
