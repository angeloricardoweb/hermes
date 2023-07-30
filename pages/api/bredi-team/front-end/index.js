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
        id: 1,
        cargo: 'front-end',
        name: 'Angelo Ricardo',
        avatar: 'https://github.com/angeloricardoweb.png',
        github: 'angeloricardoweb',
      },
      {
        id: 2,
        cargo: 'front-end',
        name: 'Camila Serra',
        avatar: 'https://github.com/camilaserra.png',
        github: 'camilaserra',
      },
      {
        id: 3,
        cargo: 'front-end',
        name: 'João Victor',
        avatar: 'https://github.com/ojvribeiro.png',
        github: 'ojvribeiro',
      },
      {
        id: 3,
        cargo: 'front-end',
        name: 'Arthur Nogueira',
        avatar: 'https://github.com/ArthurMaciel95.png',
        github: 'ArthurMaciel95',
      },
    ],
  }

  res.status(200).json(data)
}
