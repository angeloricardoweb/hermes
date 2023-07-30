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
      midia_social: [
        {
          id: '1',
          tipo: 'facebook',
          link: 'https://www.facebook.com/paysanduoficial',
        },
        {
          id: '2',
          tipo: 'instagram',
          link: 'https://www.instagram.com/paysanduoficial',
        },
        {
          id: '2',
          tipo: 'Twitter',
          link: 'https://www.instagram.com/paysanduoficial',
        },
      ],
      contatos: {
        email_principal: 'contato@email.com',
        emails: [
          {
            id: "1",
            nome: 'Email principal',
            email: 'contato@email.com',
          },
          {
            id: "2",
            nome: 'Email de suporte',
            email: 'suporte@email.com',
          },
        ],
        telefones: [
          {
            id: "1",
            nome: 'Telefone principal',
            telefone: '(00) 0000-0000',
          },
          {
            id: "2",
            nome: 'Telefone de suporte',
            telefone: '(00) 0000-0000',
          },
        ],
      },
      enderecos: [
        {
          id: '1',
          nome: 'Sede Social',
          endereco: 'Av. Nazaré, 404',
          bairro_cidade: 'Centro - Belém/PA',
          telefone: '(91) 3222-3763',
        },
        {
          id: '2',
          nome: 'Estádio da Curuzu',
          endereco: 'Av, Alm. Barroso, 654',
          bairro_cidade: 'Marco - Belém/PA',
          telefone: '(91) 3246-8898',
        },
        {
          id: '3',
          nome: 'Hotel Antonio Couceiro',
          endereco: 'Av, Alm. Barroso, 654',
          bairro_cidade: 'Marco - Belém/PA',
          telefone: '(91) 3246-8898',
        },
        {
          id: '4',
          nome: 'Sede Náutica',
          endereco: 'Tv. Dom Bôsco, 2',
          bairro_cidade: 'Cidade Velha - Belém/PA',
          telefone: '(91) 3222-3763',
        },
        {
          id: '5',
          nome: 'CT Raul Aguilera',
          endereco: 'Av. Nazaré, 404',
          bairro_cidade: 'Nazaré. Belém - PA',
          telefone: '(91) 3222-3763',
        },
      ],
      cnpj: '00.000.000/0001-00',
      copyright: 'Paysandu 2023. Todos os Direitos Reservados',
    },
  };
  res.status(200).json(data);
}

