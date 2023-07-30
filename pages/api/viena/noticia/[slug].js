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

  if (slug == 'noticia-1') {
    const data = {
      error: false,
      message: 'Sem erro',
      results:  {
        imagem:{
          url:"https://dummyimage.com/600x400/c4c4c4/fff.png",
          alt:"default image alt"
        },
        id: 1,
        slug:"8-dicas-para-ensinar-habilidades-de-gestao-do-tempo-ao-seu-filho-pequeno",
        titulo: "8 dicas para ensinar habilidades de gestão do tempo ao seu filho pequeno",
        descricao: "Saber administrar bem o tempo envolve desenvolver características como...",
        data: "2022-08-31",
      }
    }
    return res.status(200).json(data)
  }
  if (slug ==  'noticia-2') {
    const data = {
      imagem:{
        url:"https://dummyimage.com/600x400/c4c4c4/fff.png",
        alt:"default image alt"
      },
      error: false,
      message: 'Sem erro',
      data:  {
        id: 2,
        titulo: "10 ótimas dicas para otimizar o Windows 10 e deixar o pc muito mais rápido",
        descricao: "Seu computador está lento ou travando com muita frequência?",
        data: "2022-08-31",
      }
    }
    return res.status(200).json(data)
  }
  if (slug ==  'noticia-3') {
    const data = {
      imagem:{
        url:"https://dummyimage.com/600x400/c4c4c4/fff.png",
        alt:"default image alt"
      },
      error: false,
      message: 'Sem erro',
      data: {
        id: 3,
        titulo: "WhatsApp: 7 dicas para pequenos negócios venderem mais usando o aplicativo",
        descricao: "Plataforma é a mais utilizada por pequenos negócios que comercializam produtos...",
        data: "2022-08-31",
      }
    }
    return res.status(200).json(data)
  }
  if (slug == 'noticia-4') {
    const data = {
      imagem:{
        url:"https://dummyimage.com/600x400/c4c4c4/fff.png",
        alt:"default image alt"
      },
      error: false,
      message: 'Sem erro',
      data:  {
        id: 4,
        titulo: "Boas práticas de gestão de pessoas: 5 dicas para você começar em seu grupo de negócios",
        descricao: "Phasellus in sapien ac dui ultrices mollis. Donec blandit auctor nulla eu laoreet.",
        data: "2022-08-31",
      }
    }
    return res.status(200).json(data)
  }
  if (slug ==  'noticia-5') {
    const data = {
      imagem:{
        url:"https://dummyimage.com/600x400/c4c4c4/fff.png",
        alt:"default image alt"
      },
      error: false,
      message: 'Sem erro',
      data: {
        id: 5,
        titulo: "Para todas as mulheres: 6 dicas para se reconectar com a natureza dentro de casa e no trabalho",
        descricao: "Quando falamos de boas práticas de gestão de pessoas é importante...",
        data: "2022-08-31",
      }
    }
    return res.status(200).json(data)
  }
  if (slug ==  'noticia-6') {
    const data = {
      imagem:{
        url:"https://dummyimage.com/600x400/c4c4c4/fff.png",
        alt:"default image alt"
      },
      error: false,
      message: 'Sem erro',
      data: {
        id: 6,
        titulo: "Tá desanimado? Então veja 10 dicas da ciência que ajudam na busca pela felicidade",
        descricao: "“Don’t Worry, Be Happy” (não se preocupe, seja feliz). Essa é a recomendação do...",
        data: "2022-08-31",
      }
    }
    return res.status(200).json(data)
  }  
}
