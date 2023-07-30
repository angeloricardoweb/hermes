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
    message: 'Sem erro',
    results: {
      id: 8,
      categoria: 'AMATCarajás',
      banner: 'https://amat-carajas-frontend.vercel.app/news/noticia-1.jpg',
      titulo: 'Policlínica atenderá até 2,2 mil pessoas por dia',
      subtitulo:
        'Presidente da AMATCarajás Jair Martins foi entrevistado pela CNM e destacou a importância do movimento municipalista ',
      slug: 'Presidente-da-AMATCarajás-Jair-Martins-foi-entrevistado-pela-CNM',
      editoria: 'José Menezes',
      regiao: 'amat-carajas',
      data: '2020-07-28',
      body: 'O presidente da AMATCarajás e prefeito de Conceição do Araguaia, Jair Martins, realizou uma visita terça-feira, 7 de fevereiro, na sede da Confederação Nacional do Municípios (CNM), em Brasília.    Durante a visita, Jair Martins realizou sua inscrição na XXIV Marcha a Brasília em Defesa dos Municípios, que ocorrerá entre os dias 27 e 30 de março. “Hoje como presidente da Amat, temos 39 Municípios associados e que estão se preparando para vir para a Marcha. Esse é o momento de reivindicar o que é importante para os nossos Municípios e nossa região”, destacou o gestor.',
      outros_post: [
        {
          data: '2020-01-12',
          titulo: 'Exemplo de Título',
          slug: 'exemplo-de-titulo',
          cidade: 'belém',
        },
      ],
    },
  };

  return res.status(200).json(data);


}
