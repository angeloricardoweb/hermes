import NextCors from 'nextjs-cors'

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  const data = {
    error: false,
    message: 'Sem erros',
    restaurante: [
      {
        id: 1,
        slug: 'cafe-bistro',
        imagem: 'https://api-temp.vercel.app/assembleia-paraense/restaurantes/restaurante-cafe.png',
        nome: 'Café Bistrô ',
        link_web: 'https://assembleiaparaense.com.br/restaurantes/cafe-bistro/',
        cardapios: [],
      },
      {
        id: 2,
        slug: 'l-arena-catina',
        imagem: 'https://api-temp.vercel.app/assembleia-paraense/restaurantes/l-arena.png',
        nome: 'L’ Arena Cantina',
        link_web: 'https://www.assembleiaparaense.com.br/restaurantes/larena-cantina/',
        cardapios: [
          {
            id: 1,
            nome: 'Cardápio',
            link: 'https://www.assembleiaparaense.com.br/cardapio/cardapio-Larena-Abril-2023.pdf?v=2',
          },
          {
            id: 2,
            nome: 'Carta de Vinhos',
            link: 'https://www.assembleiaparaense.com.br/cardapio/carta-de-vinhos-2023.pdf',
          },
        ],
      },
      {
        id: 3,
        slug: 'resto-deck',
        imagem: 'https://api-temp.vercel.app/assembleia-paraense/restaurantes/resto-deck.png',
        nome: 'Restaurante Restô do Deck ',
        link_web: 'https://assembleiaparaense.com.br/restaurantes/restaurante-resto-do-deck/',
        cardapios: [
          {
            id: 1,
            nome: 'Cárdapio',
            link: 'https://www.assembleiaparaense.com.br/cardapio/cardapio-Deck-Abril-2023.pdf',
          },
        ]
      },
      {
        id: 4,
        slug: 'restaurante-central',
        imagem: 'https://api-temp.vercel.app/assembleia-paraense/restaurantes/restaurante-central.png',
        nome: 'Bar e Restaurante Central',
        link_web: 'https://assembleiaparaense.com.br/restaurantes/bar-e-restaurante-central/',
        cardapios: [
          {
            id: 1,
            nome: 'Cardápio',
            link: 'https://www.assembleiaparaense.com.br/cardapio/cardapio-central-abril-2023.pdf',
          },
          {
            id: 2,
            nome: 'Cardápio do Sushi',
            link: 'https://www.assembleiaparaense.com.br/cardapio/cardapio-sushi-ago-2022.pdf',
          },
        ]
      },
      {
        id: 5,
        slug: 'atena-toc-toc',
        imagem: 'https://api-temp.vercel.app/assembleia-paraense/restaurantes/restaurante-arena.png',
        nome: 'Restaurante e Arena Toc-Toc',
        link_web: 'https://assembleiaparaense.com.br/restaurantes/restaurante-e-arena-toc-toc/',
        cardapios: [
          {
            id: 1,
            nome: 'Cardápio Toc Toc',
            link: 'https://www.assembleiaparaense.com.br/cardapio/cardapio-Toc-Toc-Abril-2023.pdf',
          },
        ]
      },
      {
        id: 6,
        slug: 'restaurante-tenis',
        imagem: 'https://api-temp.vercel.app/assembleia-paraense/restaurantes/restaurante-tenis.png',
        nome: 'Restaurante do Tênis',
        link_web: 'https://assembleiaparaense.com.br/restaurantes/restaurante-do-tenis/',
        cardapios: [
          {
            id: 1,
            nome: 'Cardápio Tênis',
            link: 'https://www.assembleiaparaense.com.br/cardapio/cardapio-Tenis-Abril-2023.pdf',
          },
        ]
      },
      {
        id: 7,
        slug: 'lanchonete-parquinho',
        imagem: 'https://api-temp.vercel.app/assembleia-paraense/restaurantes/ap-parquinho.png',
        nome: 'Lanchonete do Parquinho',
        link_web: 'https://assembleiaparaense.com.br/restaurantes/lanchonete-do-parquinho/',
        cardapios: [
          {
            id: 1,
            nome: 'Cardápio Parquinho',
            link: 'https://www.assembleiaparaense.com.br/cardapio/cardapio-deck-ago-2022.pdf',
          },
        ]
      },
    ]
  }

  res.status(200).json(data)
}
