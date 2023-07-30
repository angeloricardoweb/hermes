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
    results: [
      {
        id: 1,
        nome: 'Marcelo',
        sobrenome: 'Lins',
        idade: 35,
        estado: 'Pará',
        cidade: 'Belém',
        celular: 91901231234,
        data_nascimento: '12-09-1987',
        email: 'meuemail@email.com.br',
        foto: {
          url: 'http://api-temp.vercel.app/app-pro-ver/foto-perfil.png',
          alt: 'Texto descritivo da foto'
        }
      },                   
    ]
  }

  res.status(200).json(data)
}
