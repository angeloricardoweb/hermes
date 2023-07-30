import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const { regiao } = req.query;

  const data = {};

  if (regiao) {
    data.error = false;
    data.message = 'Sem erros';
    data.results = [
      {
        id: 1,
        categoria: 'AMATCarajás',
        banner: 'https://amat-carajas-frontend.vercel.app/news/municipio-1.jpg',
        alt: 'news',
        titulo:
          'Presidente da AMATCarajás Jair Martins foi entrevistado pela CNM e destacou a importância do movimento municipalista ',
        slug: 'slug-teste',
        editoria: 'Nome da Unidade Policlinica',
        regiao: 'amat-carajas',
        data: '10/03/2023',
      },
      {
        id: 2,
        categoria: 'Saúde Pública',
        banner:
          'https://amat-carajas-frontend.vercel.app/news/municipio-2.jpg',
        alt: 'news',
        titulo: 'Sedop reuniu com municípios da AMATCarajás.',
        slug: 'slug-teste',
        editoria: 'Nome da Unidade Policlinica',
        regiao: 'amat-carajas',
        data: '10/02/2023',
      },
      {
        id: 3,
        categoria: 'Saúde Pública',
        banner: 'https://amat-carajas-frontend.vercel.app/news/municipio-3.jpg',
        alt: 'news',
        titulo:
          'Lançamento regional do Pará 2050 reuniu prefeitos e prefeitas em Marabá',
        slug: 'slug-teste',
        editoria: 'Nome da Unidade Policlinica',
        regiao: 'amat-carajas',
        data: '10/02/2023',
      },
      {
        id: 4,
        categoria: 'Saúde Pública',
        banner: 'https://amat-carajas-frontend.vercel.app/news/noticia-5.jpg',
        alt: 'news',
        titulo:
          'Prefeitos e prefeitas participaram da apresentação do programa Alfabetiza Pará, em Belém ',
        slug: 'slug-teste',
        editoria: 'Nome da Unidade Policlinica',
        regiao: 'amat-carajas',
        data: '10/02/2023',
      },
      {
        id: 5,
        categoria: 'Saúde Pública',
        banner: 'https://amat-carajas-frontend.vercel.app/news/news-4.png',
        alt: 'news',
        titulo: 'Policlínica atenderá até 2,2 mil pessoas por dia',
        slug: 'slug-teste',
        editoria: 'Nome da Unidade Policlinica',
        regiao: 'outras',
        data: '10/02/2023',
      },
      {
        id: 6,
        categoria: 'Saúde Pública',
        banner: 'https://amat-carajas-frontend.vercel.app/news/municipio-3.jpg',
        alt: 'news',
        titulo: 'Policlínica atenderá até 2,2 mil pessoas por dia',
        slug: 'slug-teste',
        editoria: 'Nome da Unidade Policlinica',
        regiao: 'outras',
        data: '10/02/2023',
      },
    ];
  } else {
    data.error = false;
    data.message = 'Sem erros';
    data.results = [
      {
        id: 1,
        categoria: 'AMATCarajás',
        banner: 'https://amat-carajas-frontend.vercel.app/news/noticia-1.jpg',
        alt: 'news',
        titulo:
          'Presidente da AMATCarajás Jair Martins foi entrevistado pela CNM e destacou a importância do movimento municipalista ',
        slug: 'slug-teste',
        editoria: 'Nome da Unidade Policlinica',
        regiao: 'amat-carajas',
        data: '10/03/2023',
      },
      {
        id: 2,
        categoria: 'Saúde Pública',
        banner: 'https://amat-carajas-frontend.vercel.app/news/noticia-2.jpeg',
        alt: 'news',
        titulo: 'Sedop reuniu com municípios da AMATCarajás.',
        slug: 'slug-teste',
        editoria: 'Nome da Unidade Policlinica',
        regiao: 'amat-carajas',
        data: '10/02/2023',
      },
      {
        id: 3,
        categoria: 'Saúde Pública',
        banner: 'https://amat-carajas-frontend.vercel.app/news/noticia-3.jpg',
        alt: 'news',
        titulo:
          'Lançamento regional do Pará 2050 reuniu prefeitos e prefeitas em Marabá',
        slug: 'slug-teste',
        editoria: 'Nome da Unidade Policlinica',
        regiao: 'amat-carajas',
        data: '10/02/2023',
      },
      {
        id: 4,
        categoria: 'Saúde Pública',
        banner: 'https://amat-carajas-frontend.vercel.app/news/noticia-5.jpg',
        alt: 'news',
        titulo:
          'Prefeitos e prefeitas participaram da apresentação do programa Alfabetiza Pará, em Belém ',
        slug: 'slug-teste',
        editoria: 'Nome da Unidade Policlinica',
        regiao: 'amat-carajas',
        data: '10/02/2023',
      },
      {
        id: 5,
        categoria: 'Saúde Pública',
        banner: 'https://amat-carajas-frontend.vercel.app/news/news-4.png',
        alt: 'news',
        titulo: 'Policlínica atenderá até 2,2 mil pessoas por dia',
        slug: 'slug-teste',
        editoria: 'Nome da Unidade Policlinica',
        regiao: 'outras',
        data: '10/02/2023',
      },
      {
        id: 6,
        categoria: 'Saúde Pública',
        banner: 'https://amat-carajas-frontend.vercel.app/news/noticia-3.jpg',
        alt: 'news',
        titulo: 'Policlínica atenderá até 2,2 mil pessoas por dia',
        slug: 'slug-teste',
        editoria: 'Nome da Unidade Policlinica',
        regiao: 'outras',
        data: '10/02/2023',
      },
    ];
  }

  res.status(200).json(data);
}
