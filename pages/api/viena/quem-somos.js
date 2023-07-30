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
   
      descricao:{
        body:"Administração de condomínios requer seriedade, compromisso e transparência e, é pensando nisso que a Viena Condomínios nasce para proporcionar ao mercado paraense administração condominial de excelência. Contamos com uma equipe dedicada e altamente capacitada com expertise nas áreas administrativa, engenharia de manutenção e segurança do trabalho. Nossa razão de existir é para garantir que o seu condomínio esteja em boas mãos."
      },
      imagem_alteral:{
        url:"https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt:"Imagem colorida de prédios em plano de fundo"
      },
      
    },
  };

  res.status(200).json(data);
}
