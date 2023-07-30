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
    results: [
      {
        id: 8,
        banner: "https://issaa.sitebeta.com.br/img/noticias/policlinica-2.2-mil-atendimentos.jpg",
        titulo: "Policlínica atenderá até 2,2 mil pessoas por dia",
        slug: "policlinica-atendera-ate-2-2-mil-pessoas-por-dia",
        editoria: 'Nome da Unidade Policlinica',
        data: "2020-07-28"
      },
      {
        id: 2,
        banner: "https://issaa.sitebeta.com.br/img/noticias/ame.jpg",
        titulo: "Belém terá a primeira Policlínica do Pará",
        slug: "belem-tera-a-primeira-policlinica-do-estado",
        editoria: 'Nome da Unidade Policlinica',
        data: "2020-01-12"
      },

    ],
  }

  res.status(200).json(data)
}
