import NextCors from 'nextjs-cors';

export default async function handler(req, res) {

  const { tipo } = req.query;
  console.log(tipo);

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  if (tipo == 'videos') {
    const data = {
      error: false,
      message: 'Sem erro',
      videos: [
        {
          id: 1,
          titulo_lista: "Últimos Vídeos",
          slug:"como-acontece-o-processo-de-producao-da-madeira", // Título sem acentuações e minúsculo
          titulo: "Como acontece o processo de produção da madeira",
          data: "27/08/2022",
          videos: [
            {
              id: 1,
              titulo: "Vídeo 1",
              video_url: "https://www.youtube.com/embed/hMO28Jsu4wg", 
            },
            {
              id: 2,
              titulo: "Vídeo 2",
              video_url: "https://youtu.be/o_ncYPfjFWg",
            },
            {
              id: 3,
              titulo: "Vídeo 3",
              video_url: "https://youtu.be/b8QzTmivrtU",
            },
          ],
          img_capa: "/img/biblioteca-florestal/video1.jpg",
          conteudo: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
        },
        {
          id: 2,
          titulo_lista: "Últimos Vídeos",
          slug:"madeira-e-o-material-mais-usado-em-projetos",
          titulo: "Madeira é o material mais usado em projetos",
          data: "27/08/2022",
          videos: [
            {
              id: 1,
              titulo: "Vídeo 1",
              video_url: "https://www.youtube.com/embed/hMO28Jsu4wg", 
            },
            {
              id: 2,
              titulo: "Vídeo 2",
              video_url: "https://youtu.be/o_ncYPfjFWg",
            },
            {
              id: 3,
              titulo: "Vídeo 3",
              video_url: "https://youtu.be/b8QzTmivrtU",
            },
          ],
          img_capa: "/img/biblioteca-florestal/video2.jpg",
          conteudo: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
        },
        {
          id: 3,
          titulo_lista: "Últimos Vídeos",
          slug:"organizacao-que-respeita-a-natureza",
          titulo: "Organização que respeira a natureza",
          data: "27/08/2022",
          videos: [
            {
              id: 1,
              titulo: "Vídeo 1",
              video_url: "https://www.youtube.com/embed/hMO28Jsu4wg", 
            },
            {
              id: 2,
              titulo: "Vídeo 2",
              video_url: "https://youtu.be/o_ncYPfjFWg",
            },
            {
              id: 3,
              titulo: "Vídeo 3",
              video_url: "https://youtu.be/b8QzTmivrtU",
            },
          ],
          img_capa: "/img/biblioteca-florestal/video3.jpg",
          conteudo: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
        },
      ]
    }
    return res.status(200).json(data)
  }
  if (tipo == 'fotos') {
    const data = {
      error: false,
      message: 'Sem erro',
      data: [
        {
          id: 2,
          titulo_lista: "Últimas Fotos",
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
        {
          id: 3,
          titulo_lista: "Últimas Fotos",
          titulo: "Manejo Florestal.",
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
  if (tipo == 'publicacoes') {
    const data = {
      error: false,
      message: 'Sem erro',
      data: [
        {
          id: 2,
          titulo_lista: "Últimos E-books",
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
  if (tipo == 'documentos') {
    const data = {
      error: false,
      message: 'Sem erro',
      data: [
        {
          id: 2,
          titulo_lista: "Últimos Docs",
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
        {
          id: 3,
          titulo_lista: "Últimos Docs",
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
  if (tipo == 'news') {
    const data = {
      error: false,
      message: 'Sem erro',
      data: [
        {
          id: 1,
          titulo_lista: "Edições Anteriores",
          titulo: "Exportação em alta no Pará",
          numero_edicao: "27",
          data: "02/02/2019 ",
          img_capa: "/img/biblioteca-florestal/news1.jpg",
          imagens_carrosel: [
            {
              id: 1,
              titulo: "Manejo Florestal. Colheita das árvores maduras.",
              arquivo_img:  "/img/biblioteca-florestal/news1.jpg",
            },
            {
              id: 2,
              titulo: "Manejo Florestal. Colheita das árvores maduras.",
              arquivo_img:  "/img/biblioteca-florestal/news1.jpg",
            },
          ], 
          resumo: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
          // De acordo com protótipo, podemos ter imagens, vídeos ou textos
          conteudo: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.", 
        },
        {
          id: 6,
          titulo_lista: "Edições Anteriores",
          titulo: "Exportação em alta no Pará",
          numero_edicao: "27",
          data: "02/02/2019 ",
          img_capa: "/img/biblioteca-florestal/news1.jpg",
          imagens_carrosel: [
            {
              id: 1,
              titulo: "Manejo Florestal. Colheita das árvores maduras.",
              arquivo_img:  "/img/biblioteca-florestal/news1.jpg",
            },
            {
              id: 2,
              titulo: "Manejo Florestal. Colheita das árvores maduras.",
              arquivo_img:  "/img/biblioteca-florestal/news1.jpg",
            },
          ], 
          resumo: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
          // De acordo com protótipo, podemos ter imagens, vídeos ou textos
          conteudo: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.", 
        },
      ]
    }
    return res.status(200).json(data)
  }
}
