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
      carterinha: [
        {
          id: 1,
          slug: '6046544',
          nome: 'André Santos',
          data_emissao: '18/11/2022',
          data_validade: '18/11/2023',
          tipo: 'Prop. Simples',
          link_foto: 'https://i.pravatar.cc/300',
          qrcode: 'https://api-temp.vercel.app/assembleia-paraense/matricula-carterinha.png',
          depedentes: [
            {
              id: 1,
              slug: '325299',
              nome_depedente: 'André Marcos Santos',
              data_emissao: '18/11/2022',
              data_validade: '18/11/2023',
              tipo: 'Depedente',
              link_foto: 'https://i.pravatar.cc/300',
              qrcode: 'https://api-temp.vercel.app/assembleia-paraense/matricula-depedente-1.png',
            },
            {
              id: 2,
              slug: '325266',
              nome_depedente: 'Marcos Santos',
              data_emissao: '20/10/2019',
              data_validade: '20/10/2024',
              tipo: 'Depedente',
              link_foto: 'https://i.pravatar.cc/300',
              qrcode: 'https://api-temp.vercel.app/assembleia-paraense/matricula-depedente-2.png',
            },
            {
              id: 3,
              slug: '325222',
              nome_depedente: 'Ana Carla',
              data_emissao: '01/01/2020',
              data_validade: '01/01/2026',
              tipo: 'Depedente',
              link_foto: 'https://i.pravatar.cc/300',
              qrcode: 'https://api-temp.vercel.app/assembleia-paraense/matricula-depedente-3.png',
            },
          ]
        },
      ],
    }
  }
  res.status(200).json(data)
}
