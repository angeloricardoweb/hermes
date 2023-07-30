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
    bannerfooter: [
      {
        id: 1,
        primeiro_titulo: 'Seja Econômico',
        primeiro_link_button: '#',
        primeiro_img_banner: '/img/bannerfooter/banner1.jpg',
        segundo_titulo: 'Conheça o Econômico',
        segundo_link_button: '#',
        segundo_img_banner: '/img/bannerfooter/banner2.jpg',
      },
    ]
  }

  res.status(200).json(data)
}
