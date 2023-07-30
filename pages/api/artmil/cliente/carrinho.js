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
    data: {
      qtd_total_produtos: 9,
      preco_total_produtos: 798.0,
      produtos: [
        {
          id: 37,
          nome: "Nome do produto",
          qtd: 3,
          preco: 199.0,
          preco_total: 597.0,
          largura: "220",
          altura: "100",
          comprimento: null,
          banner: {
            alt: "Nome do produto",
            imagem_url: "https://artmil-frontend.vercel.app/temp/produto.png",
          },
          caracteristicas: [
            {
              id: 1,
              nome: "Nome da característica",
              escolha: "Escolha da característica",
            },
            {
              id: 2,
              nome: "Nome da característica 2",
              escolha: "Escolha da característica 2",
            },
          ],
        },
        {
          id: 18,
          nome: "Nome do produto 2",
          qtd: 1,
          preco: 199.0,
          preco_total: 597.0,
          largura: null,
          altura: null,
          comprimento: "180",
          banner: {
            alt: "Nome do produto 2",
            imagem_url: "https://artmil-frontend.vercel.app/temp/produto.png",
          },
          caracteristicas: [
            {
              id: 1,
              nome: "Nome da característica",
              escolha: "Escolha da característica",
            },
            {
              id: 2,
              nome: "Nome da característica 2",
              escolha: "Escolha da característica 2",
            },
          ],
        },
      ],
    },
  };

  res.status(200).json(data);
}
