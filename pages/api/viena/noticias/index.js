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
      lista:[
        {
          id: 1,
          titulo: "8 dicas para ensinar habilidades de gestão do tempo ao seu filho pequeno",
          descricao: "Saber administrar bem o tempo envolve desenvolver características como...",
          imagem:{
            url:"https://serving.photos.photobox.com/616211517f23c339de631f3ed1e36c862d5cad3d5cebe729914b47b8182ebbcb0ea04155.jpg",
            alt:"default image alt"
          },
          slug:"8-dicas-para-ensinar-habilidades-de-gestao-do-tempo-ao-seu-filho-pequeno",
          data: "31-08-22",
        },
        {
          id: 2,
          titulo: "10 ótimas dicas para otimizar o Windows 10 e deixar o pc muito mais rápido",
          descricao: "Seu computador está lento ou travando com muita frequência?",
          imagem:{
            url:"https://serving.photos.photobox.com/398300600788e1c6d73737b12ab9369ad66d09f87d4770dfca5f7699bc1fce716a5f6a7f.jpg",
            alt:"default image alt"
          },
          slug:"10-otimas-dicas-para-otimizar-o-windows-10-e-deixar-o-pc-muito-mais-rapido",
          data: "31-08-22",
        },
        {
          id: 3,
          titulo: "WhatsApp: 7 dicas para pequenos negócios venderem mais usando o aplicativo",
          descricao: "Plataforma é a mais utilizada por pequenos negócios que comercializam produtos...",
          imagem:{
            url:"https://serving.photos.photobox.com/325756303c0f9eef756f4113ac98b4291b57aaeefee67af1b96d80f33a6f822f42a9aa85.jpg",
            alt:"default alt"
          },
          slug:"whatsapp-7-dicas-para-pequenos-negocios-venderem-mais-usando-o-aplicativo",
          data: "31-08-22",
        },
        {
          id: 4,
          titulo: "Boas práticas de gestão de pessoas: 5 dicas para você começar em seu grupo de negócios",
          descricao: "Phasellus in sapien ac dui ultrices mollis. Donec blandit auctor nulla eu laoreet.",
          imagem:{
            url:"https://serving.photos.photobox.com/571227197ea2e0b78eeb640572a119053c6d6fb70f4ad8e4d5b0a3f0e427cd51d7ac94a8.jpg",
            alt:"default image alt"
          },
          slug:"boas-praticas-de-gestao-de-pessoas-5-dicas-para-voce-comecar-em-seu-grupo-de-negocios",
          data: "31-08-22",
        },
        {
          id: 5,
          titulo: "Para todas as mulheres: 6 dicas para se reconectar com a natureza dentro de casa e no trabalho",
          descricao: "Quando falamos de boas práticas de gestão de pessoas é importante...",
          imagem:{
            url:"https://serving.photos.photobox.com/408709450279108b2dd3d1209c656d982eae57fcc1908e98bc35a6174684709a856df99e.jpg",
            alt:"default image alt"
          },
          slug:"para-todas-as-mulheres-6-dicas-para-se-reconectar-com-a-natureza-dentro-de-casa-e-no-trabalho",
          data: "31-08-22",
        },
        {
          id: 6,
          titulo: "Tá desanimado? Então veja 10 dicas da ciência que ajudam na busca pela felicidade",
          descricao: "“Don’t Worry, Be Happy” (não se preocupe, seja feliz). Essa é a recomendação do...",
          imagem:{
            url:"https://serving.photos.photobox.com/25233211a445438efbfab595478c9d7ccbdc7f121b613da22e5c4ba725fddd1d5f235610.jpg",
            alt:"default image alt"
          },
          slug:"ta-desanimado-entao-veja-10-dicas-da-ciencia-que-ajudam-na-busca-pela-felicidade",
          data: "31-08-22",
        },
        {
          id: 7,
          titulo: "8 dicas para ensinar habilidades de gestão do tempo ao seu filho pequeno",
          descricao: "Saber administrar bem o tempo envolve desenvolver características como...",
          imagem:{
            url:"https://serving.photos.photobox.com/616211517f23c339de631f3ed1e36c862d5cad3d5cebe729914b47b8182ebbcb0ea04155.jpg",
            alt:"default image alt"
          },
          slug:"8-dicas-para-ensinar-habilidades-de-gestao-do-tempo-ao-seu-filho-pequeno",
          data: "31-08-22",
        },
        {
          id: 8,
          titulo: "10 ótimas dicas para otimizar o Windows 10 e deixar o pc muito mais rápido",
          descricao: "Seu computador está lento ou travando com muita frequência?",
          imagem:{
            url:"https://serving.photos.photobox.com/398300600788e1c6d73737b12ab9369ad66d09f87d4770dfca5f7699bc1fce716a5f6a7f.jpg",
            alt:"default image alt"
          },
          slug:"10-otimas-dicas-para-otimizar-o-windows-10-e-deixar-o-pc-muito-mais-rapido",
          data: "31-08-22",
        },
      ]
    },
  };

  res.status(200).json(data);
}
