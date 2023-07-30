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
      user: {
        nome: 'Fulano de Tal',
        email: 'fulano@email.com',
        telefone: '(11) 99999-9999',
        roles: ['instrutor'],
        genero: 'Masculino',
        bio: '',
        site: '',
        redes_sociais: {
          facebook: '',
          instagram: '',
          twitter: '',
          youtube: '',
        },
      },
    },
  };

  res.status(200).json(data);
}

