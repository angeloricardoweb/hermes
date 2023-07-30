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

  if (slug == 'manejo-florestal-colheita-das-arvores-maduras') {
    const data = {
      error: false,
      message: 'Sem erro',
      data: [
        {
          id: 1,
          titulo_lista: "Últimos E-books",
          slug: "manejo-florestal-colheita-das-arvores-maduras",
          titulo: "Manejo Florestal. Colheita das árvores maduras.",
          arquivo_download: "/img/biblioteca-florestal/pdf-teste.pdf",
          numero_pagina: "34",
          data: "02/02/2019 ",
          img_capa: "/img/biblioteca-florestal/publicacoes1.jpg",
          imagens_carrosel: [
            {
              id: 1,
              titulo: "Manejo Florestal. Colheita das árvores maduras.",
              arquivo_img:  "/img/biblioteca-florestal/publicacoes1.jpg",
            },
            {
              id: 2,
              titulo: "Manejo Florestal. Colheita das árvores maduras.",
              arquivo_img:  "/img/biblioteca-florestal/publicacoes1.jpg",
            },
          ],  
        },
        {
          id: 3,
          titulo_lista: "Últimos E-books",
          slug: "colheita-das-arvores-maduras",
          titulo: "Colheita das árvores maduras.",
          arquivo_download: "/img/biblioteca-florestal/pdf-teste.pdf",
          numero_pagina: "34",
          data: "02/02/2019 ",
          img_capa: "/img/biblioteca-florestal/publicacoes1.jpg",
          imagens_carrosel: [
            {
              id: 1,
              titulo: "Colheita das árvores maduras.",
              arquivo_img:  "/img/biblioteca-florestal/publicacoes1.jpg",
            },
            {
              id: 2,
              titulo: "Colheita das árvores maduras.",
              arquivo_img:  "/img/biblioteca-florestal/publicacoes1.jpg",
            },
          ],  
        },
      ]
    }
    return res.status(200).json(data)
  }
  
  if (slug == 'colheita-das-arvores-maduras') {
    const data = {
      error: false,
      message: 'Sem erro',
      data: [
        {
          id: 2,
          titulo_lista: "Últimos E-books",
          slug: "colheita-das-arvores-maduras",
          titulo: "Colheita das árvores maduras.",
          arquivo_download: "/img/biblioteca-florestal/pdf-teste.pdf",
          numero_pagina: "34",
          data: "02/02/2019 ",
          img_capa: "/img/biblioteca-florestal/publicacoes1.jpg",
          imagens_carrosel: [
            {
              id: 1,
              titulo: "Colheita das árvores maduras.",
              arquivo_img:  "/img/biblioteca-florestal/publicacoes1.jpg",
            },
            {
              id: 2,
              titulo: "Colheita das árvores maduras.",
              arquivo_img:  "/img/biblioteca-florestal/publicacoes1.jpg",
            },
          ],  
        },
      ]
    }
    return res.status(200).json(data)
  }

}