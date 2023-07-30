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
      midia_social: {
        facebook: "https://www.facebook.com/vienaadmcondominios/",
        instagram: "https://www.instagram.com/vienacondominios/",
        whatsapp: "554935370426",
      },
      cnpf: "29.758.302/0001-05",
      crea: "010203",
      creci: "01234-A",
      copyrigth: "Viena Condomínios 2022. Todos os Direitos Reservados"
    },
  };
  res.status(200).json(data);
}
