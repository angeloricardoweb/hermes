import NextCors from 'nextjs-cors'

export default async function handler(req, res) {
  const { slug } = req.query;

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  if (slug == 'antonio-carlos') {
    const data = {
      error: false,
      message: 'Sem erros',
      results: {
        especialista: [
          {
            id: 1,
            slug: 'antonio-carlos',
            titulo: 'Antonio Carlos',
            especialidade: 'Cirugião Oftamologista',
            estrela: 3,
            telefone: '91998260315',
            link_mapa: 'https://goo.gl/maps/aSocdpKc6wTAGRjx8',
            link_whatsapp: 'https://api.whatsapp.com/send?phone=5591998260314',
            foto: {
              url: 'http://api-temp.vercel.app/app-pro-ver/especialista-2.png'
            }
          },     
        ],
      },
    }
    res.status(200).json(data)
  } else if (slug == 'paula-silva') {
    const data = {
      error: false,
      message: 'Sem erros',
      results: {
        especialista: [
          {
            id: 2,
            slug: 'paula-silva',
            titulo: 'Paula Silva',
            especialidade: 'Oftamologista',
            estrela: 5,
            telefone: '91998260315',
            link_mapa: 'https://goo.gl/maps/aSocdpKc6wTAGRjx8',
            link_whatsapp: 'https://api.whatsapp.com/send?phone=5591998260314',
            foto: {
              url: 'http://api-temp.vercel.app/app-pro-ver/especialista-1.png'
            }
          },      
        ],
      },
    }
    res.status(200).json(data)
  } else {
    const data = {
      error: false,
      message: 'Sem erros',
      results: null
    }
    res.status(200).json(data)
  }
}
