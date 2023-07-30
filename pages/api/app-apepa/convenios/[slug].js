import NextCors from 'nextjs-cors'

export default async function handler(req, res) {
  const { slug } = req.query;

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  if (slug == 'unimed') {
    const data = {
      error: false,
      message: 'Sem erros',
      results: {
        id: 1,
        nome: 'Unimed',
        logo: 'https://api-temp.vercel.app/app-apepa/convenio-1.png',
        texto_promocional: '15% desconto para os 3 meses do Plano Enfermaria !!!',
        sobre: 'Integer finibus, leo ut bibendum feugiat, nunc diam tristique massa, id consequat dui nisi quis nunc. Ut placerat lacinia nisi sit amet vehicula. Etiam ac blandit ipsum, in sodales ante.',
        unidades_participantes: [
          {
            id: 1,
            nome_unidade: 'Unimed Doca - Urgência E Emergência',
            endereco: 'Av. Visc. de Souza Franco, S/N - Reduto, Belém - PA, 66053-000',
            link_endereco: '#',
            telefone: '(91) 4009-5503',
          },
        ]
      },
    }
    return res.status(200).json(data)
  }

  if (slug == 'otica-diniz') {
    const data = {
      error: false,
      message: 'Sem erros',
      results: {
        id: 1,
        nome: 'Óticas Diniz',
        logo: 'https://api-temp.vercel.app/app-apepa/convenio-2.png',
        texto_promocional: '15% desconto para todas as lentes !!!',
        sobre: 'Integer finibus, leo ut bibendum feugiat, nunc diam tristique massa, id consequat dui nisi quis nunc. Ut placerat lacinia nisi sit amet vehicula. Etiam ac blandit ipsum, in sodales ante.',
        unidades_participantes: [
          {
            id: 1,
            nome_unidade: 'Óticas Diniz - Centro',
            endereco: 'R. Santo Antônio, 335 - Campina, Belém - PA, 66010-105',
            link_endereco: 'https://goo.gl/maps/2yPghZbh9QAiaJQb8',
            telefone: '(91) 99109-8003',
          },
        ]
      },
    }
    return res.status(200).json(data)
  }

  else {
    const data = {
      error: false,
      message: 'Sem erros',
      results: null
    }
    return res.status(200).json(data)
  }
}


