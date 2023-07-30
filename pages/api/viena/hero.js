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
            carrossel: [
                {
                    id: 1,
                    imagem: {
                        url: "https://serving.photos.photobox.com/8222124204e4439dd9ea46d402d482f7e6e6b78d802c58b6e0596d66f5a1bd01e91d19a4.jpg",
                        alt: "pessoas apertando as mãos",
                    },
                    hero_texto: {
                        pequeno_texto: "Síndico Profissional",
                        title: "Profissionalismo e transparência para seu condomínio",
                        descricao: "Conheça mais sobre este Serviço Viena"
                    }

                },
                {
                    id: 2,
                    imagem: {
                        url: "https://serving.photos.photobox.com/7920066161cf887cb59aaf7caf39dc5e2a36a03697ccc0d392d4cf79a58ad15d1355a2fa.jpg",
                        alt: "homem de terno preto segurando um celular",
                    },
                    hero_texto: {
                        pequeno_texto: "Fornecimento de mão de obra",
                        title: "O Melhor custo benefício para seu condomínio",
                        descricao: "Clique e veja todas as vantagens deste Serviço viena"
                    }
                },
                {
                    id: 3,
                    imagem: {
                        url: "https://serving.photos.photobox.com/35018479bbf5fc564ffde128a46fd6fc0d256d45a059cbc7c50643b8bea8d11e81d28128.jpg",
                        alt: "foto de um condominio arborizado",
                    },
                    hero_texto: {
                        pequeno_texto: "Administrativo Financeiro",
                        title: "Gerenciamos seu condomínio com transparencia",
                        descricao: "Todo o suporte que você precisa!"
                    }

                },
                {
                    id: 4,
                    imagem: {
                        url: "https://serving.photos.photobox.com/412571828d22ce0e0e60e83c7356d902666b278cbf42679487815059e116211a604e5602.jpg",
                        alt: "homem de terno preto segurando um celular",
                    },
                    hero_texto: {
                        pequeno_texto: "Inadimplência Zero",
                        title: "O Melhor custo benefício para seu condomínio",
                        descricao: "Clique e veja todas as vantagens deste Serviço viena"
                    }
                },
                {
                    id: 5,
                    imagem: {
                        url: "https://api-temp.vercel.app/viena/banners/banner2.jpg",
                        alt: "homem de terno preto tocando a tela",
                    },
                    hero_texto: {
                        pequeno_texto: "Controle de ponto",
                        title: "Gestão da Jornada de Trabalho simples e descentralizada",
                        descricao: "Saiba mais"
                    }
                },
                {
                    id: 6,
                    imagem: {
                        url: "https://api-temp.vercel.app/viena/banners/banner.jpg",
                        alt: "Mulher de óculos utilizando o notebook",
                    },
                    hero_texto: {
                        pequeno_texto: "Boleto online",
                        title: "Boleto em qualquer lugar a qualquer hora!",
                        descricao: "Clique aqui"
                    }
                },
                {
                    id: 7,
                    imagem: {
                        url: "https://api-temp.vercel.app/viena/banners/banner1.jpg",
                        alt: "Conversa whatsapp através do canal de atendimento",
                    },
                    hero_texto: {
                        pequeno_texto: "Atendimento digital",
                        title: "Nosso canal de comunicação 24h",
                        descricao: "Clique e conheça"
                    }
                }
            ],
            card_image: [
                {
                    id: 1,
                    image: {
                        url: "https://serving.photos.photobox.com/73846998e6f06dfc30685332f326de4fa5519bb4e6622ebf093606e23eccfcfb962cc617.jpg",

                        alt: "image alt default",
                    }
                },
                {
                    id: 2,
                    image: {
                        url: "https://serving.photos.photobox.com/388958760ffb64fce8cd71d9d31a251f19a8b22cc3c8faa00ad39e193c6c1a5ffcc13e49.jpg",
                        alt: "imagem de Acesso de veículos",
                    }
                },
                {
                    id: 3,
                    image: {
                        url: "https://serving.photos.photobox.com/404053990958198b674b1e9fb0a28e541b37cf2ac377846e28717d40878a0476ee9d1acc.jpg",

                        alt: "imagem de reservas de áreas comuns",
                    }
                },
                {
                    id: 4,
                    image: {
                        url: "https://serving.photos.photobox.com/7293643590138d6de8ce6c246a4ec6d0a4703c091f64a8ffbf71d63627290e9b38091d0c.jpg",

                        alt: "imagem de emissão de segunda via ",
                    }
                },
                {
                    id: 5,
                    image: {
                        url: "https://serving.photos.photobox.com/73846998e6f06dfc30685332f326de4fa5519bb4e6622ebf093606e23eccfcfb962cc617.jpg",
                        alt: "image alt default",
                    }
                },
                {
                    id: 6,
                    image: {
                        url: "https://serving.photos.photobox.com/388958760ffb64fce8cd71d9d31a251f19a8b22cc3c8faa00ad39e193c6c1a5ffcc13e49.jpg",
                        alt: "imagem de Acesso de veículos",
                    }
                },
                {
                    id: 7,
                    image: {
                        url: "https://serving.photos.photobox.com/404053990958198b674b1e9fb0a28e541b37cf2ac377846e28717d40878a0476ee9d1acc.jpg",
                        alt: "imagem de reservas de áreas comuns",
                    }
                },
                {
                    id: 8,
                    image: {
                        url: "https://serving.photos.photobox.com/7293643590138d6de8ce6c246a4ec6d0a4703c091f64a8ffbf71d63627290e9b38091d0c.jpg",
                        alt: "imagem de emissão de segunda via ",
                    }
                },
            ]
        },

    };

    res.status(200).json(data);
}
