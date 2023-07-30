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
    results: {
      id: 1,
      nome: 'Atila trip',
      avaliacao: 4.5,
      descricao: 'Viagens / Passeios',
      local: 'Passagem São Pedro, 1234',
      sobreNos: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      logo: 'https://img.freepik.com/vetores-gratis/identidade-de-marca-corporativa-um-design-de-vetor-de-logotipo-modelo_460848-13935.jpg?w=740&t=st=1683144515~exp=1683145115~hmac=e81283585e3f149d6c8727046bd07f589e229be0a94574b05447a5fbd76dba28',
      servicos: [
        {
          id: 1,
          titulo: 'Passeio de Jipe',
          descricao: 'Morbi bibendum, lectus et congue tristique, dui nisi fringilla quam, et volutpat',
          img: 'https://images.unsplash.com/photo-1467489904517-075c242c2b4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1318&q=80',
          data: '25-05-2023',
          preco: 1500,
        },
        {
          id: 2,
          titulo: 'Passeio de barco a vela',
          descricao: 'Morbi bibendum, lectus et congue tristique, dui nisi fringilla quam, et volutpat',
          img: 'https://www.arubrasil.com.br/storage/files/products/thumb-dc9b47d56c23befaa901eaa197abe239afd99185.jpeg',
          data: '22-05-2023',
          preco: 2500,
        },
        {
          id: 3,
          titulo: 'Trilha na Serra da Mandiqueira',
          descricao: 'Morbi bibendum, lectus et congue tristique, dui nisi fringilla quam, et volutpat',
          img: 'https://cdn.douradosnews.com.br/img/c/780/530/dn_noticia/2016/10/57f3d0bdaccd4d98a7c0047aedbb54b34df0bb613b2a7.jpg',
          data: '15-05-2023',
          preco: 2250,
        },
      ],
    },
  };

  res.status(200).json(data);
}
