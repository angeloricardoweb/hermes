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
    results: [
      {
        title: 'Clarice Lispector',
        sala_id: 1
      },
      {
        title: 'Carlos Drummond de Andrade',
        sala_id: 2
      },
      {
        title: 'Cecília Meireles',
        sala_id: 3
      },
      {
        title: 'Rui Barbosa',
        sala_id: 4
      },
      {
        title: 'Machado de Assis',
        sala_id: 5
      },
      {
        title: 'Monteiro Lobato',
        sala_id: 6
      },
      {
        title: 'Luis Fernando Verissimo',
        sala_id: 7
      },
      {
        title: 'Cora Coralina',
        sala_id: 8
      },
      {
        title: 'Carolina de Jesus',
        sala_id: 9
      },

    ],
  };

  res.status(200).json(data);
}
