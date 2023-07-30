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
      listaconvenios: [
        {
          id: 1,
          nome: 'Unimed',
          slug: 'unimed',
          logo: 'https://api-temp.vercel.app/app-apepa/convenio-1.png',
          porcentagem: 15,
        },
        {
          id: 2,
          nome: 'Óticas Diniz',
          slug: 'oticas-diniz',
          logo: 'https://api-temp.vercel.app/app-apepa/convenio-2.png',
          porcentagem: 25,
        },  
        {
          id: 3,
          nome: 'Smart Fit',
          slug: 'smart-fit',
          logo: 'https://api-temp.vercel.app/app-apepa/convenio-3.png',
          porcentagem: 10,
        },   
        {
          id: 4,
          nome: 'Pague Menos',
          slug: 'pague-menos',
          logo: 'https://api-temp.vercel.app/app-apepa/convenio-4.png',
          porcentagem: 20,
        },   
      ],
    },
  }
  res.status(200).json(data)

}


