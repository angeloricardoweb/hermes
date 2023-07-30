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
    operation: 'Coleta domiciliar',
    city: 'Ananindeua',
    date: '29/11/2022',
    production: '20ton',
    cards: [
      {
        id: '05055',
        saida: '08:05',
        motorista: 'José Carlos',
        placa: 'ABC1D23',
        pessoas: 4,
        km: 3000,
        roteiro: '4789',
        status: 'OK',
      },

      {
        id: '05055',
        saida: '--:--',
        motorista: 'Mario Santos',
        placa: 'DEF2E22',
        pessoas: 4,
        km: 121413,
        roteiro: '7983',
        status: 'Manutenção Programada',
      },

      {
        id: '05055',
        saida: '--:--',
        motorista: 'Marcos Silva',
        placa: 'JIO2M11',
        pessoas: 4,
        km: 11212,
        roteiro: '0066',
        status: 'Em Revisão',
      },

      {
        id: '05055',
        saida: '--:--',
        motorista: 'Alberto Miranda',
        placa: 'ART7E84',
        pessoas: 4,
        km: 1111,
        roteiro: '1578',
        status: 'Em Revisão',
      },

      {
        id: '05055',
        saida: '--:--',
        motorista: 'João Carvalho',
        placa: 'JKL2W96',
        pessoas: 4,
        km: 8764,
        roteiro: '9654',
        status: 'Em Revisão',
      },

      {
        id: '05055',
        saida: '--:--',
        motorista: 'Marlon Pinho',
        placa: 'AAB2B33',
        pessoas: 4,
        km: 6533,
        roteiro: '7983',
        status: 'Manutenção Programada',
      },
    ],
  }

  res.status(200).json(data)
}

