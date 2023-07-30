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
        instagram: null,
        whatsapp: '559999999999',
        linkedin: null,
        youtube: null,
        telegran: null,
      },
      contatos: {
        email_principal: 'contato@email.com',
        emails: [
          {
            id: 1,
            nome: 'Email principal',
            email: 'contato@email.com',
          },
          {
            id: 2,
            nome: 'Email de suporte',
            email: 'suporte@email.com',
          },
        ],
        telefones: [
          {
            id: 1,
            nome: 'Telefone principal',
            telefone: '(00) 0000-0000',
          },
          {
            id: 2,
            nome: 'Telefone de suporte',
            telefone: '(00) 0000-0000',
          },
        ],
      },
      cnpj: '29.758.302/0001-05',
      copyright: 'ISSAA 2022. Todos os Direitos Reservados',
      endereco: {
        rua: 'exemplo',
        numero: '202121',
        bairro: 'Batista Campos',
        cidade: 'Belém/PA',
        complemento: ''
      }
    },
  }
  res.status(200).json(data)
}
