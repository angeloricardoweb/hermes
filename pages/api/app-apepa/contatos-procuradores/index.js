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
      contatos: [
        {
          id: 1,
          nome: 'Paula Costa',
          telefone: '91998260125',
          telefone_whatsapp: '91998260125',
          link_whatsapp: 'https://api.whatsapp.com/send/?phone=5591980950834',
          email: 'paula.costa@apepa.org.br',
          foto_perfil: 'https://api-temp.vercel.app/app-apepa/user-2.png',
        },
        {
          id: 2,
          nome: 'Amanda Silva',
          telefone: '91998260125',
          telefone_whatsapp: '91998260125',
          link_whatsapp: 'https://api.whatsapp.com/send/?phone=5591980950834',
          email: 'paula.costa@apepa.org.br',
          foto_perfil: 'https://api-temp.vercel.app/app-apepa/user-3.png',
        },
        {
          id: 3,
          nome: 'Caren Yamamoto',
          telefone: '91998260125',
          telefone_whatsapp: '91998260125',
          link_whatsapp: 'https://api.whatsapp.com/send/?phone=5591980950834',
          email: 'paula.costa@apepa.org.br',
          foto_perfil: 'https://api-temp.vercel.app/app-apepa/user-4.png',
        },
      ],
    },
  }
  return res.status(200).json(data)

}
