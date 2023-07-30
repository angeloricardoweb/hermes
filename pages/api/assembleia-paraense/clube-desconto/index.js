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
      descontos: [
        {
          id: 1,
          slug: 'desconto-teste-12',
          titulo: 'Marisa',
          porcentagem_desconto: 20,
          categoria: 'VESTIÁRIO', // VESTIÁRIO - COMIDA - BEBIDAS - BELEZA
          data_validade: '18/11/2023',
          abragência: 'ONLINE', //(online, BELÈM e REGIÂO)
          link_desconto: 'https://www.google.com/',
          logo: 'https://api-temp.vercel.app/assembleia-paraense/logo-marisa.png',
          qrcode: 'https://api-temp.vercel.app/assembleia-paraense/desconto-teste-12.png',
          detalhes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          id: 2,
          slug: 'desconto-teste-16',
          titulo: 'NETSHOES',
          porcentagem_desconto: 30,
          categoria: 'COMIDA', // VESTIÁRIO - COMIDA - BEBIDAS - BELEZA
          data_validade: '01/01/2025',
          abragência: 'BELÈM e REGIÂO', //(online, BELÈM e REGIÂO)
          link_desconto: 'https://www.google.com/',
          logo: 'https://api-temp.vercel.app/assembleia-paraense/logo-pague-menos.png',
          qrcode: 'https://api-temp.vercel.app/assembleia-paraense/desconto-teste-16.png',
          detalhes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          id: 3,
          slug: 'desconto-teste-24',
          titulo: 'PAGUE MENOS',
          porcentagem_desconto: 25,
          categoria: 'BELEZA', // VESTIÁRIO - COMIDA - BEBIDAS - BELEZA
          data_validade: '15/06/2024',
          abragência: 'ONLINE', //(online, BELÈM e REGIÂO)
          link_desconto: 'https://www.google.com/',
          logo: 'https://api-temp.vercel.app/assembleia-paraense/netshoes-logo.png',
          qrcode: 'https://api-temp.vercel.app/assembleia-paraense/desconto-teste-24.png',
          detalhes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
      ],
    },
  }
  res.status(200).json(data)

}
