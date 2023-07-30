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
        nome: 'Atila trip',
        avaliacao: 4.5,
        descricao: 'Viagens / Passeios',
        local: 'Passagem São Pedro, 1234',
        sobreNos:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        logo: 'https://img.freepik.com/vetores-gratis/identidade-de-marca-corporativa-um-design-de-vetor-de-logotipo-modelo_460848-13935.jpg?w=740&t=st=1683144515~exp=1683145115~hmac=e81283585e3f149d6c8727046bd07f589e229be0a94574b05447a5fbd76dba28',
        servicos: [
          {
            id: 1,
            titulo: 'Passeio de Jipe',
            img: 'https://images.unsplash.com/photo-1467489904517-075c242c2b4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1318&q=80',
            data: '25-05-2023',
            preco: 1500,
          },
          {
            id: 2,
            titulo: 'Passeio de barco a vela',
            img: 'https://www.arubrasil.com.br/storage/files/products/thumb-dc9b47d56c23befaa901eaa197abe239afd99185.jpeg',
            data: '22-05-2023',
            preco: 2500,
          },
          {
            id: 3,
            titulo: 'Trilha na Serra da Mandiqueira',
            img: 'https://cdn.douradosnews.com.br/img/c/780/530/dn_noticia/2016/10/57f3d0bdaccd4d98a7c0047aedbb54b34df0bb613b2a7.jpg',
            data: '15-05-2023',
            preco: 2250,
          },
        ],
      },
      {
        id: 2,
        nome: 'Travolutionary',
        avaliacao: 4.6,
        descricao: 'Viagens / Passeios',
        local: 'Passagem São Pedro, 1234',
        sobreNos:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        logo: 'https://img.freepik.com/vetores-gratis/vetor-de-design-de-gradiente-colorido-de-passaro_343694-2506.jpg?w=740&t=st=1683199802~exp=1683200402~hmac=a1f1c2a7a1de506748145f4a01bbdcb8a32c21e91684c9b93ddc8611ce791ec7',
        servicos: [
          {
            id: 4,
            titulo: 'Passeio Praia do Farol Velho em Salinas',
            img: 'https://portalamazonia.com/images/p/16660/b2ap3_large_1086291793.jpeg',
            data: '15-05-2023',
            preco: 1800,
          },
          {
            id: 5,
            titulo: 'Passeio Praia das Corvinas em Salinas',
            img: 'https://painel.portalamazonia.com/uploads/RTEmagicC_praia-do-farol-diegooliveira.jpg.jpg',
            data: '05-05-2023',
            preco: 2400,
          },
        ],
      },
      {
        id: 3,
        nome: 'Alshamel',
        avaliacao: 4.7,
        descricao: 'Viagens / Passeios',
        local: 'Passagem São Pedro, 1234',
        sobreNos:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        logo: 'https://img.freepik.com/vetores-premium/icone-de-logotipo-de-diamante-preto-e-azul_95164-3493.jpg?w=740',
        servicos: [
          {
            id: 6,
            titulo: 'Passeio Hawaii',
            img: 'https://images.unsplash.com/photo-1545251142-f32339076e6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            data: '17-05-2023',
            preco: 4300,
          },
          {
            id: 7,
            titulo: 'Passeio Caribe',
            img: 'https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80',
            data: '20-05-2023',
            preco: 4000,
          },
        ],
      },
    ],
  };

  res.status(200).json(data);
}
