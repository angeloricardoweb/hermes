import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    origin: '*',
    optionsSuccessStatus: 200, 
  });

  const data = {
    error: false,
    message: 'Sem erros',
    results: [
      {
        id: 1,
        categorias: 'Pet Shop',
      },
      {
        id: 2,
        categorias: 'Lanchonete, bar e restaurantes',
      },
      {
        id: 3,
        categorias: 'Confecção',
      },
      {
        id: 4,
        categorias: 'Farmácia',
      },
      {
        id: 5,
        categorias: 'Beleza',
      },
      {
        id: 6,
        categorias: 'Mercado',
      },
      {
        id: 7,
        categorias: 'Eletrônicos',
      },
      {
        id: 8,
        categorias: 'Móveis',
      },
      {
        id: 9,
        categorias: 'Revistaria',
      },
      {
        id: 10,
        categorias: 'Jardinagem',
      },
      {
        id: 11,
        categorias: 'Construção',
      },
      {
        id: 12,
        categorias: 'Peças & acessórios',
      },
      {
        id: 13,
        categorias: 'Artesanato',
      },
      {
        id: 14,
        categorias: 'Brinquedo & Games',
      },
      {
        id: 15,
        categorias: 'Armarinho',
      },
      {
        id: 16,
        categorias: 'Ótica',
      },
      {
        id: 17,
        categorias: 'Padaria',
      },
    ]
  };

  return res.status(200).json(data);
}