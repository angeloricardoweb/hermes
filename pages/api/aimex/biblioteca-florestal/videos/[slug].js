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

  if (slug == 'como-acontece-o-processo-de-producao-da-madeira') {
    const data = {
      error: false,
      message: 'Sem erro',
      data: [
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
      ]
    }
    return res.status(200).json(data)
  }

  if (slug == 'producao-da-madeira') {
    const data = {
      error: false,
      message: 'Sem erro',
      data: [
        {
          id: 1,
          titulo_lista: "Últimos Vídeos",
          slug:"producao-da-madeira", 
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
      ]
    }
    return res.status(200).json(data)
  }

}
