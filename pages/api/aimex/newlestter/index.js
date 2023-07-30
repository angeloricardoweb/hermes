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

  const data = {
    error: false,
    message: 'Sem erro',
    data: [
      {
        id: 1,
        titulo_lista: "Últimas Newlestter",
        slug: "ipes-sao-temas-de-estudo-inedito-no-para",
        titulo: "Ipês são temas de estudo inédito  no Pará",
        arquivo_download_ingles: "/img/temporario/pdf-ingles.pdf",
        arquivo_download_portugues: "/img/temporario/pdf-portugues.pdf",
        numero_pagina: 7,
        numero_edicao: 20,
        data: "2022-10-10 09:32:21",
        img_capa: "/img/temporario/newlestter-1.jpg",
      },
      // {
      //   id: 2,
      //   titulo_lista: "Últimas Newlestter",
      //   slug: "colheita-das-arvores-maduras",
      //   titulo: "Colheita das Árvores Maduras",
      //   arquivo_download_ingles: "/img/temporario/pdf-ingles.pdf",
      //   arquivo_download_portugues: "/img/temporario/pdf-portugues.pdf",          
      //   numero_pagina: 12,
      //   numero_edicao: 21,
      //   data: "2022-09-21 20:32:21",
      //   img_capa: "/img/temporario/newlestter-2.jpg",
      // },
      // {
      //   id: 3,
      //   titulo_lista: "Últimas Newlestter",
      //   slug: "arvores-brasileiras",
      //   titulo: "Árvores Brasileiras",
      //   arquivo_download_ingles: "/img/temporario/pdf-ingles.pdf",
      //   arquivo_download_portugues: "/img/temporario/pdf-portugues.pdf",          
      //   numero_pagina: 31,
      //   numero_edicao: 22,
      //   data: "2022-08-26 22:32:21",
      //   img_capa: "/img/temporario/newlestter-3.jpg",
      // },
    ]
  }
  return res.status(200).json(data)
}