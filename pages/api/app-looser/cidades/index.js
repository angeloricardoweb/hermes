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
        nome: 'Rio de Janeiro',
        img: 'https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s',
      },
      {
        id: 2,
        nome: 'Belém',
        img: 'https://meulugar.quintoandar.com.br/wp-content/uploads/2023/01/Cidade-de-Belem-do-Para-850x680.jpg',
      },
      {
        id: 3,
        nome: 'Salvador',
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/43/ac/8f/pelourinho.jpg?w=1200&h=-1&s=1',
      },
      {
        id: 4,
        nome: 'Recife',
        img: 'https://revistaazul.voeazul.com.br/wp-content/uploads/2023/03/Recife-1.jpg',
      },
      {
        id: 5,
        nome: 'Campo Grande',
        img: 'https://blog.123milhas.com/wp-content/uploads/2022/08/aniversario-de-campo-grande-ms-curiosidades-e-informacoes-ruas-campo-grande-conexao123-1.jpg',
      },
    ],
  };

  res.status(200).json(data);
}
