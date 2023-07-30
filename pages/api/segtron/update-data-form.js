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
      versao: '0.0.1',
      ro: {
        gerencia: [
          {
            value: 1,
            label: 'Gerencia de Materiais',
          },
          {
            value: 2,
            label: 'Gerencia de Suprimentos',
          },
          {
            value: 3,
            label: 'Gerencia de TI',
          },
        ],
        tipificacao: [
          {
            value: 1,
            label: 'Abandono, Extravio, Perda',
          },
          {
            value: 2,
            label: 'Acesso Irregular',
          },
          {
            value: 3,
            label: 'Acvalueente de Transito',
          },
        ],
        polos: [
          {
            value: 1,
            label: 'Belém',
          },
          {
            value: 2,
            label: 'Acará',
          },
          {
            value: 3,
            label: 'Concórdia',
          },
          {
            value: 4,
            label: 'Mojú',
          },
          {
            value: 5,
            label: 'Tomé Açú',
          },
          {
            value: 6,
            label: 'Vera Cruz',
          },
        ],
        responsaveis_polo: [
          {
            value: 1,
            label: 'Ariane Lobo',
          },
          {
            value: 2,
            label: 'José Claudio',
          },
        ],
      },
      avu: {
        gerencia: [
          {
            value: 1,
            label: 'Gerencia de Materiais',
          },
          {
            value: 2,
            label: 'Gerencia de Suprimentos',
          },
          {
            value: 3,
            label: 'Gerencia de TI',
          },
        ],
        tipificacao: [
          {
            value: 1,
            label: 'Abandono, Extravio, Perda',
          },
          {
            value: 2,
            label: 'Acesso Irregular',
          },
          {
            value: 3,
            label: 'Acvalueente de Transito',
          },
        ],
        status: [
          {
            value: 1,
            label: 'Aberto',
          },
          {
            value: 2,
            label: 'Em Pendente',
          },
        ],
        polos: [
          {
            value: 1,
            label: 'Belém',
          },
          {
            value: 2,
            label: 'Acará',
          },
          {
            value: 3,
            label: 'Concórdia',
          },
          {
            value: 4,
            label: 'Mojú',
          },
          {
            value: 5,
            label: 'Tomé Açú',
          },
          {
            value: 6,
            label: 'Vera Cruz',
          },
        ],
        responsaveis_polo: [
          {
            value: 1,
            label: 'Ariane Lobo',
          },
          {
            value: 2,
            label: 'José Claudio',
          },
        ],
      },
    },
  };

  res.status(200).json(data);
}
