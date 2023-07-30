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
      listavoucher: [
        {
          id: 1,
          nome: 'Unimed',
          slug: 'unimed',
          logo: 'https://api-temp.vercel.app/app-apepa/convenio-1.png',
          titulo: '15% desconto em qualquer consulta',
          data_validade: '28/03/2023',
          endereco: 'Av. Visc. de Souza Franco, S/N - Reduto, Belém - PA, 66053-000',
          endereco_link: 'https://goo.gl/maps/5Dht1kwLPdA1u4NL6',
        },
        {
          id: 2,
          nome: 'Óticas Diniz',
          slug: 'oticas-diniz',
          logo: 'https://api-temp.vercel.app/app-apepa/convenio-2.png',
          titulo: '10% desconto nos 3 primeiros meses',
          data_validade: '28/03/2023',
          endereco: 'Av. Visc. de Souza Franco, S/N - Reduto, Belém - PA, 66053-000',
          endereco_link: 'https://goo.gl/maps/5Dht1kwLPdA1u4NL6',
        },  
        {
          id: 3,
          nome: 'Smart Fit',
          slug: 'smart-fit',
          logo: 'https://api-temp.vercel.app/app-apepa/convenio-3.png',
          titulo: '5% desconto em qualquer consulta',
          data_validade: '28/03/2023',
          endereco: 'Av. Visc. de Souza Franco, S/N - Reduto, Belém - PA, 66053-000',
          endereco_link: 'https://goo.gl/maps/5Dht1kwLPdA1u4NL6',
        },   
        {
          id: 4,
          nome: 'Pague Menos',
          slug: 'pague-menos',
          logo: 'https://api-temp.vercel.app/app-apepa/convenio-4.png',
          titulo: '2% desconto em qualquer consulta',
          data_validade: '28/03/2023',
          endereco: 'Av. Visc. de Souza Franco, S/N - Reduto, Belém - PA, 66053-000',
          endereco_link: 'https://goo.gl/maps/5Dht1kwLPdA1u4NL6',
        },   
      ],
    },
  }
  res.status(200).json(data)

}


