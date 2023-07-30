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
        banner: 'https://amat-carajas-frontend.vercel.app/news/municipio-1.jpg',
        alt: 'news',
        titulo:
          'Prefeito de Bom Jesus do Tocantins participou de reunião sobre o projeto Entre Elas  ',
        categoria: 'AMATCarajás',
        slug: 'Prefeito-de-Bom-Jesus-do-Tocantins-participou-de-reunião-sobre-o-projeto-Entre-Elas',
        editoria: 'Nome da Unidade Policlinica',
        data: '10/03/2023',
        municipio: 'Bom Jesus',
      },
      {
        id: 2,
        banner: 'https://amat-carajas-frontend.vercel.app/news/municipio-2.jpg',
        alt: 'news',
        titulo:
          'Municípios estão intensificando suas ações em combate ao Aedes aegypti ',
        categoria: 'Saúde Pública',
        slug: 'policlinica-atendera-ate-2-2-mil-pessoas-por-dia',
        editoria: 'Nome da Unidade Policlinica',
        data: '10/02/2023',
        municipio: 'Cumaru',
      },
      {
        id: 3,
        banner: 'https://amat-carajas-frontend.vercel.app/news/municipio-3.jpg',
        alt: 'news',
        titulo:
          'Semas começou a capacitar técnicos municipais que atuam no "Territórios Sustentáveis"',
        categoria: 'Saúde Pública',
        slug: 'policlinica-atendera-ate-2-2-mil-pessoas-por-dia',
        editoria: 'Nome da Unidade Policlinica',
        data: '10/02/2023',
        municipio: 'Redenção',
      },
      {
        id: 4,
        banner: 'https://amat-carajas-frontend.vercel.app/news/news-1.png',
        alt: 'news',
        titulo:
          'Municípios estão intensificando suas ações em combate ao Aedes aegypti ',
        categoria: 'Saúde Pública',
        slug: 'policlinica-atendera-ate-2-2-mil-pessoas-por-dia',
        editoria: 'Nome da Unidade Policlinica',
        data: '10/02/2023',
        municipio: 'Água azul',
      },
    ],
  };

  res.status(200).json(data);
}
