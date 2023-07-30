import NextCors from 'nextjs-cors'

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  const data = {
    error: false,
    message: 'Sem erros',
    ofertas: [
      {
        id: 1,
        nome: 'Grande Oferta',
        link_oferta: '#',
        img_oferta: '/img/temporary/1.png'
      },
      {
        id: 2,
        link_oferta: '#',
        nome: 'Grande Oferta',
        img_oferta: '/img/temporary/2.png'
      },
      {
        id: 3,
        link_oferta: '#',
        nome: 'Grande Oferta',
        img_oferta: '/img/temporary/3.png'
      },
      {
        id: 4,
        link_oferta: '#',
        nome: 'Grande Oferta',
        img_oferta: '/img/temporary/4.png'
      },
      {
        id: 5,
        link_oferta: '#',
        nome: 'Grande Oferta',
        img_oferta: '/img/temporary/5.png'
      },
      {
        id: 6,
        link_oferta: '#',
        nome: 'Grande Oferta',
        img_oferta: '/img/temporary/6.png'
      },
      {
        id: 7,
        link_oferta: '#',
        nome: 'Grande Oferta',
        img_oferta: '/img/temporary/7.png'
      },
      {
        id: 8,
        link_oferta: '#',
        nome: 'Grande Oferta',
        img_oferta: '/img/temporary/8.png'
      },
      {
        id: 9,
        link_oferta: '#',
        nome: 'Grande Oferta',
        img_oferta: '/img/temporary/9.png'
      },
      {
        id: 10,
        link_oferta: '#',
        nome: 'Grande Oferta',
        img_oferta: '/img/temporary/10.png'
      },
      {
        id: 11,
        link_oferta: '#',
        nome: 'Grande Oferta',
        img_oferta: '/img/temporary/11.png'
      },
      {
        id: 12,
        link_oferta: '#',
        nome: 'Grande Oferta',
        img_oferta: '/img/temporary/12.png'
      },
      {
        id: 13,
        link_oferta: '#',
        nome: 'Grande Oferta',
        img_oferta: '/img/temporary/13.png'
      },
      {
        id: 14,
        link_oferta: '#',
        nome: 'Grande Oferta',
        img_oferta: '/img/temporary/14.png'
      },
      {
        id: 15,
        link_oferta: '#',
        nome: 'Grande Oferta',
        img_oferta: '/img/temporary/15.png'
      },
      {
        id: 16,
        link_oferta: '#',
        nome: 'Grande Oferta',
        img_oferta: '/img/temporary/16.png'
      },
      {
        id: 17,
        link_oferta: '#',
        nome: 'Grande Oferta',
        img_oferta: '/img/temporary/17.png'
      }
    ]
  }

  res.status(200).json(data)
}
