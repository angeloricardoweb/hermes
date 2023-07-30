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


  if (slug == 'leis-de-diretrizes-sustentaveis-2019') {
    const data = {
      error: false,
      message: 'Sem erro',
      data: [
        {
          id: 1,
          titulo_lista: "Últimos Docs",
          slug: "leis-de-diretrizes-sustentaveis-2019",
          titulo: "Leis de diretrizes sustentáveis 2019",
          arquivo_download: "/img/biblioteca-florestal/pdf-teste.pdf",
          numero_pagina: "34",
          data: "02/02/2019 ",
          img_capa: "/img/biblioteca-florestal/documentos1.jpg",
          imagens_carrosel: [
            {
              id: 1,
              titulo: "Manejo Florestal. Colheita das árvores maduras.",
              arquivo_img:  "/img/biblioteca-florestal/documentos1.jpg",
            },
            {
              id: 2,
              titulo: "Manejo Florestal. Colheita das árvores maduras.",
              arquivo_img:  "/img/biblioteca-florestal/documentos1.jpg",
            },
          ], 
        },
      ]
    }
    return res.status(200).json(data)
  }
  if (slug == 'leis-de-diretizes') {
    const data = {
      error: false,
      message: 'Sem erro',
      data: [
        {
          id: 2,
          titulo_lista: "Últimos Docs",
          slug: "leis-de-diretizes",
          titulo: "Leis de Diretizes",
          arquivo_download: "/img/biblioteca-florestal/pdf-teste.pdf",
          numero_pagina: "34",
          data: "02/02/2019 ",
          img_capa: "/img/biblioteca-florestal/documentos1.jpg",
          imagens_carrosel: [
            {
              id: 1,
              titulo: "Manejo Florestal. Colheita das árvores maduras.",
              arquivo_img:  "/img/biblioteca-florestal/documentos1.jpg",
            },
            {
              id: 2,
              titulo: "Manejo Florestal. Colheita das árvores maduras.",
              arquivo_img:  "/img/biblioteca-florestal/documentos1.jpg",
            },
          ], 
        },
      ]
    }
    return res.status(200).json(data)
  }

}