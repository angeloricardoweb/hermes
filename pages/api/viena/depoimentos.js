import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const data = {
    error: false,
    message: "Sem erros",
    results: {
     
      imagem_plano_de_fundo:{
        url:"imagem/depoimentos_plano_de_fundo.png",
        alt:"Imagem de prédios em plano de fundo."
      },
      lista:[
        {
          id: 1,
          nome:"Junia Pontes",
          cargo: "Professora",
          descricao: "Praesent malesuada est euismod, dictum est non, sodales dolor. Proin lectus ante, convallis id tempus non, aliquet ut purus. Suspendisse elementum erat ultricies neque luctus, vel porta enim fringilla. Sed rhoncus erat vel augue congue,.",
          imagem:{
            url:"https://serving.photos.photobox.com/270355227979b54f9973b4dac184b4e07a6300cb402d4e08c3a0a0b782e82e492f1d61e4.jpg",
            alt:"foto de rosto da junia pontos"
          }
        },
        {
          id: 2,
          nome:"Carla Souza",
          cargo: "Engenheira",
          descricao: "Seu computador está lento ou travando com muita frequência? Praesent malesuada est euismod, dictum est non, sodales dolor. Proin lectus ante, convallis id tempus non, aliquet ut purus. Suspendisse elementum erat ultricies neque luctus, vel porta enim fringilla. Sed rhoncus erat vel augue congue,.",
          imagem:{
            url:"https://serving.photos.photobox.com/40834893fb305a5be273b8fbfff9d4dd0c1de4a956ed421d7d29b2361424c97e37474d2c.jpg",
            alt:"foto de rosto da Carla Souza"
          }
        },
        {
          id: 3,
          nome:"Caio Ashida",
          cargo: "Arquiteto",
          descricao: "Morbi convallis, magna sit amet euismod pellentesque, enim lectus ultricies justo, sit amet imperdiet lectus sem ut . Vivamus at velit vitae urna luctus luctus. Vestibulum aliquet rhoncus eleifend. Nunc et sem metus. ",
          imagem:{
            url:"https://serving.photos.photobox.com/26315044ad8b0e41f3627280fb422616cb1e632ca977033a2d1b1f23999f2fae8ad3114e.jpg",
            alt:"foto de rosto da Caio Ashida"
          }
        },
        {
          id:4,
          nome:"Rodrigo Santos",
          cargo: "Professor",
          descricao: "Praesent malesuada est euismod, dictum est non, sodales dolor. Proin lectus ante, convallis id tempus non, aliquet ut purus. Suspendisse elementum erat ultricies neque luctus, vel porta enim fringilla. Sed rhoncus erat vel augue congue,.",
          imagem:{
            url:"https://serving.photos.photobox.com/252477906aba64a2ddf8c42602ceb0f879b71a0a8874d3a045a7d9dd5eabe51a42933c63.jpg",
            alt:"foto de rosto da junia pontos"
          }
        },
        {
          id: 5,
          nome:"Carla Souza",
          cargo: "Engenheira",
          descricao: "Seu computador está lento ou travando com muita frequência? Praesent malesuada est euismod, dictum est non, sodales dolor. Proin lectus ante, convallis id tempus non, aliquet ut purus. Suspendisse elementum erat ultricies neque luctus, vel porta enim fringilla. Sed rhoncus erat vel augue congue,.",
          imagem:{
            url:"https://serving.photos.photobox.com/40834893fb305a5be273b8fbfff9d4dd0c1de4a956ed421d7d29b2361424c97e37474d2c.jpg",
            alt:"foto de rosto da Carla Souza"
          }
        },
        {
          id: 6,
          nome:"Caio Ashida",
          cargo: "Arquiteto",
          descricao: "Morbi convallis, magna sit amet euismod pellentesque, enim lectus ultricies justo, sit amet imperdiet lectus sem ut . Vivamus at velit vitae urna luctus luctus. Vestibulum aliquet rhoncus eleifend. Nunc et sem metus. ",
          imagem:{
            url:"https://serving.photos.photobox.com/26315044ad8b0e41f3627280fb422616cb1e632ca977033a2d1b1f23999f2fae8ad3114e.jpg",
            alt:"foto de rosto da Caio Ashida"
          }
        }
      ]
    },
  };

  res.status(200).json(data);
}
