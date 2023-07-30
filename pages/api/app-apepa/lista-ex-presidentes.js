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
      listaexpresidentes: [
        {
          id: 1,
          nome: 'Marcelo Lins',
          logo: 'https://api-temp.vercel.app/app-apepa/ex-presidente-1.png',
          mandato: '2002-2005',
        },
        {
          id: 2,
          nome: 'Paula Diniz',
          logo: 'https://api-temp.vercel.app/app-apepa/ex-presidente-2.png',
          mandato: '1999-2002',
        },  
        {
          id: 3,
          nome: 'Carla Medeiros',
          logo: 'https://api-temp.vercel.app/app-apepa/ex-presidente-3.png',
          mandato: '1996-1999',
        },   
        {
          id: 4,
          nome: 'Maria Sousa',
          logo: 'https://api-temp.vercel.app/app-apepa/ex-presidente-4.png',
          mandato: '1993-1996',
        },   
      ],
    },
  }
  res.status(200).json(data)

}


