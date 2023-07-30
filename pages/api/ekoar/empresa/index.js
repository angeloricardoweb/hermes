import NextCors from 'nextjs-cors'

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  const data = {
    error: false,
    message: 'Sem erros',
    results: {
      midia_social: {
        facebook: null,
        instagram: 'ekoar_agro',
        whatsapp: '559999999999',
        linkedin: null,
        youtube: null,
        telegram: null,
      },
      contatos: {
        email_principal: 'contato@ekoar.agr.br',
        emails: [
          {
            id: 1,
            nome: 'Email principal',
            email: 'contato@ekoar.agr.br',
          },

        ],
        telefones: [
          {
            id: 1,
            nome: null,
            telefone: '(41) 99277-0177',
          },
          {
            id: 2,
            nome: null,
            telefone: '(43) 99154-2008',
          },
        ],
      },
      cnpj: '07.409.384/0001-40',
      copyright: 'Ekoar 2022. Todos os Direitos Reservados',
    },
  }
  res.status(200).json(data)
}
