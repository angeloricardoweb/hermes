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
      subcategorias: [
        {
          id: 1,
          title: 'sub-casa 1',
        },

        {
          id: 2,
          title: 'sub-casa 2',
        },

        {
          id: 3,
          title: 'sub-kids 1',
        },

        {
          id: 4,
          title: 'sub-kids 2',
        },

        {
          id: 5,
          title: 'sub-pet 1',
        },

        {
          id: 6,
          title: 'sub-pet 2',
        },

        {
          id: 7,
          title: 'sub-moda 1',
        },

        {
          id: 8,
          title: 'sub-moda 2',
        },

        {
          id: 9,
          title: 'sub-passeio 1',
        },

        {
          id: 10,
          title: 'sub-passeio 2',
        },

        {
          id: 11,
          title: 'sub-festa 1',
        },

        {
          id: 12,
          title: 'sub-festa 2',
        },
      ],
    },
  };
  res.status(200).json(data);
}
