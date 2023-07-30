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
      convites: [
        {
          id: 1,
          slug: '339659',
          number_convite: '339659',
          nome_convidado: 'Antônio Carlos de Souza',
          tipo: 'Convite Clube',
          cpf: '999.999.999-99',
          data: '18/11/2022',
          link_convite: '#',
          maior_idade: 'Sim',
          estrangeiro: 'Não',
          texto_qrcode: 'https://api-temp.vercel.app/assembleia-paraense/convite.png',
        },
        {
          id: 2,
          slug: '212564',
          number_convite: '212564',
          nome_convidado: 'Antônio Carlos de Souza',
          tipo: 'Convite Clube',
          cpf: '999.999.999-99',
          data: '03/05/2022',
          link_convite: '#',
          maior_idade: 'Não',
          estrangeiro: 'Sim',
          texto_qrcode: 'https://api-temp.vercel.app/assembleia-paraense/convite.png',
        },
        {
          id: 3,
          slug: '21288',
          number_convite: '212588',
          nome_convidado: 'Ana Carla Souza',
          tipo: 'Convite Clube',
          cpf: '999.999.999-99',
          data: '20/06/2022',
          link_convite: '#',
          maior_idade: 'Sim',
          estrangeiro: 'Sim',
          texto_qrcode: 'https://api-temp.vercel.app/assembleia-paraense/convite.png',
        },
      ],
    }
  }
  res.status(200).json(data)
}
