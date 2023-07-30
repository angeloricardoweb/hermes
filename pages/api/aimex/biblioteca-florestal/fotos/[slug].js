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
          titulo_lista: "Últimas Fotos",
          slug: "manejo-florestal-colheita-das-arvores-maduras",
          titulo: "Manejo Florestal. Colheita das árvores maduras.",
          autor: "Romero Brito",
          data: "02/02/2019 ",
          img_capa: "/img/biblioteca-florestal/fotos1.jpg",
          imagens_carrosel: [
            {
              id: 1,
              titulo: "Manejo Florestal. Colheita das árvores maduras.",
              arquivo_img:  "/img/biblioteca-florestal/fotos1.jpg",
            },
            {
              id: 2,
              titulo: "Manejo Florestal. Colheita das árvores maduras.",
              arquivo_img:  "/img/biblioteca-florestal/fotos1.jpg",
            },
          ],         
        },
      ]
    }
    return res.status(200).json(data)
  }

  if (tipo == 'madeira-e-o-material-mais-usado-em-projetos') {
    const data = {
      error: false,
      message: 'Sem erro',
      data: [
        {
          id: 2,
          titulo_lista: "Últimas Fotos",
          slug: "madeira-e-o-material-mais-usado-em-projetos",
          titulo: "Madeira é o material mais usado em projetos",
          autor: "Romero Brito",
          data: "02/02/2019 ",
          img_capa: "/img/biblioteca-florestal/fotos1.jpg",
          imagens_carrosel: [
            {
              id: 1,
              titulo: "Manejo Florestal.",
              arquivo_img:  "/img/biblioteca-florestal/fotos1.jpg",
            },
            {
              id: 2,
              titulo: "Manejo Florestal.",
              arquivo_img:  "/img/biblioteca-florestal/fotos1.jpg",
            },
          ],         
        },
      ]
    }
    return res.status(200).json(data)
  }

}
