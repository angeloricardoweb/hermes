import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  const { slug } = req.query;
  console.log(slug);

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  if (
    slug ==
    'Prefeito de Bom Jesus do Tocantins participou de reunião sobre o projeto Entre Elas'
  ) {
    const data = {
      error: false,
      message: 'Sem erro',
      results: {
        id: 8,
        categoria: 'AMATCarajás',
        banner: 'https://amat-carajas-frontend.vercel.app/news/noticia-1.jpg',
        titulo:
          'Prefeito de Bom Jesus do Tocantins participou de reunião sobre o projeto Entre Elas',
        subtitulo:
          'Prefeito de Bom Jesus do Tocantins participou de reunião sobre o projeto Entre Elas',
        slug: 'Prefeito-de-Bom-Jesus-do-Tocantins-participou-de-reunião-sobre-o-projeto-Entre-Elas',
        editoria: 'José Menezes',
        data: '2020-07-28',
        body: 'O presidente da AMATCarajás e prefeito de Conceição do Araguaia, Jair Martins, realizou uma visita terça-feira, 7 de fevereiro, na sede da Confederação Nacional do Municípios (CNM), em Brasília.    Durante a visita, Jair Martins realizou sua inscrição na XXIV Marcha a Brasília em Defesa dos Municípios, que ocorrerá entre os dias 27 e 30 de março. “Hoje como presidente da Amat, temos 39 Municípios associados e que estão se preparando para vir para a Marcha. Esse é o momento de reivindicar o que é importante para os nossos Municípios e nossa região”, destacou o gestor.',
        outros_post: [
          {
            data: '2020-01-12',
            titulo: 'Belém terá a primeira Policlínica do Pará',
            slug: 'belem-tera-a-primeira-policlinica-do-estado',
            cidade: 'belém',
          },
        ],
      },
    };
    return res.status(200).json(data);
  }
  if (
    slug ==
    'Municípios estão intensificando suas ações em combate ao Aedes aegypti'
  ) {
    const data = {
      error: false,
      message: 'Sem erro',
      results: {
        id: 8,
        banner: 'https://amat-carajas-frontend.vercel.app/news/noticia-3.jpg',
        titulo:
          'Municípios estão intensificando suas ações em combate ao Aedes aegypti',
        subtitulo:
          'Municípios estão intensificando suas ações em combate ao Aedes aegypti',
        slug: 'Municípios estão intensificando suas ações em combate ao Aedes aegypti',
        editoria: 'Nome da Unidade Policlinica',
        data: '2020-07-28',
        body: '<p>O Grupo Atlântica Matapi está desenvolvendo um novo projeto para exportação de grãos de gergelim produzidos no sul do Pará, Maranhão e Tocantins para a América Central.A partir do embarque pelo Porto de Belém, capital do Pará, o grupo quer consolidar embarques mensaispara o Porto de Quetzo, na Guatemala, via Canal do Panamá. “Os produtores da nossa região estão crescendo muito a ponto de conseguir uma produção de 30 mil toneladas de gergelim ao ano. É um número muito expressivo. Nossa missão foi encontrar uma solução logística, já que praticamente toda a produção estava sendo exportada pelo Porto de Paranaguá (PR)”, afirma Carlos Pinto Jr., diretor de operações da Matapi.</p><p>As soluções apresentadas aos representantes da empresa guatemalteca Sezam Zaad, uma das maiores agroexportadoras de gergelim, agradaram e Victor Makucheff e José Francisco, a convite do vice-presidente do Grupo Atlântica Matapi, Tiago Pinto, foram conhecer a estrutura de armazenagem do porto. Na ocasião, foram recebidos pelos servidores da Companhia Docas do Pará, Amiraldo Júnior, supervisor de operações, e Pedro Paulo, fiel de carga do porto.</p><p>O primeiro navio break bulk previsto para deixar Belém rumo a Quetzo em agosto. Nesta modalidade, diferentemente dos conteiners, é possível armazenar a carga individualmente no porão do navio. Apesar de exigir mais tempo de operação, reduz custos diante da alta global no preço dos conteiners. “Antigamente, um conteiners pra Guatemala custava quase dois mil dólares. Hoje, está 9 mil. Isso faz uma diferença muito grande para quem trabalha com exportações”, conclui Jr.</p>',
        outros_post: [
          {
            data: '2020-01-12',
            titulo: 'Belém terá a primeira Policlínica do Pará',
            slug: 'belem-tera-a-primeira-policlinica-do-estado',
            cidade: 'belém',
          },
        ],
      },
    };
    return res.status(200).json(data);
  }

  if (
    slug ==
    'Semas começou a capacitar técnicos municipais que atuam no "Territórios Sustentáveis"'
  ) {
    const data = {
      error: false,
      message: 'Sem erro',
      results: {
        id: 8,
        banner: 'https://issaa.sitebeta.com.br/img/noticias/ame.jpg',
        titulo: 'Belém terá a primeira Policlínica do Pará',
        categoria: 'AMATCarajás',
        subtitulo:
          'O Grupo Atlântica Matapi está desenvolvendo um novo projeto para exportação de grãos de gergelim produzidos no sul do Pará, Maranhão e Tocantins para a América Central.A partir do embarque pelo Porto de Belém, capital do Pará',
        slug: 'belem-tera-a-primeira-policlinica-do-estado',
        editoria: 'Nome da Unidade Policlinica',
        data: '2020-07-28',
        body: '<p>O Grupo Atlântica Matapi está desenvolvendo um novo projeto para exportação de grãos de gergelim produzidos no sul do Pará, Maranhão e Tocantins para a América Central.A partir do embarque pelo Porto de Belém, capital do Pará, o grupo quer consolidar embarques mensaispara o Porto de Quetzo, na Guatemala, via Canal do Panamá. “Os produtores da nossa região estão crescendo muito a ponto de conseguir uma produção de 30 mil toneladas de gergelim ao ano. É um número muito expressivo. Nossa missão foi encontrar uma solução logística, já que praticamente toda a produção estava sendo exportada pelo Porto de Paranaguá (PR)”, afirma Carlos Pinto Jr., diretor de operações da Matapi.</p><p>As soluções apresentadas aos representantes da empresa guatemalteca Sezam Zaad, uma das maiores agroexportadoras de gergelim, agradaram e Victor Makucheff e José Francisco, a convite do vice-presidente do Grupo Atlântica Matapi, Tiago Pinto, foram conhecer a estrutura de armazenagem do porto. Na ocasião, foram recebidos pelos servidores da Companhia Docas do Pará, Amiraldo Júnior, supervisor de operações, e Pedro Paulo, fiel de carga do porto.</p><p>O primeiro navio break bulk previsto para deixar Belém rumo a Quetzo em agosto. Nesta modalidade, diferentemente dos conteiners, é possível armazenar a carga individualmente no porão do navio. Apesar de exigir mais tempo de operação, reduz custos diante da alta global no preço dos conteiners. “Antigamente, um conteiners pra Guatemala custava quase dois mil dólares. Hoje, está 9 mil. Isso faz uma diferença muito grande para quem trabalha com exportações”, conclui Jr.</p>',
        outros_post: [
          {
            data: '2020-01-12',
            titulo: 'Belém terá a primeira Policlínica do Pará',
            slug: 'belem-tera-a-primeira-policlinica-do-estado',
            cidade: 'belém',
          },
        ],
      },
    };
    return res.status(200).json(data);
  }
}
