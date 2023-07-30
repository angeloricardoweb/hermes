import NextCors from 'nextjs-cors'

export default async function handler(req, res) {
  const { slug } = req.query;

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
      notificacoes: [
        {
          id: 1,
          titulo: 'Nam vestibulum, ex ut bibendum pharetra, lacus tortor blandit nisi',
          datatime: '01/03/2023 às 21:22',
          lida: false,
        },
        {
          id: 2,
          titulo: 'Nam vestibulum, ex ut bibendum pharetra, lacus tortor blandit nisi',
          datatime: '01/03/2023 às 21:22',
          lida: true,
        },  
        {
          id: 3,
          titulo: 'Nam vestibulum, ex ut bibendum pharetra, lacus tortor blandit nisi',
          datatime: '01/03/2023 às 21:22',
          lida: false,
        },   
        {
          id: 4,
          titulo: 'Nam vestibulum, ex ut bibendum pharetra, lacus tortor blandit nisi',
          datatime: '01/03/2023 às 21:22',
          lida: false,
        },   
      ],
    },
  }
  res.status(200).json(data)

}


