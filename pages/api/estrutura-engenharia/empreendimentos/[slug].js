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

    if (slug == 'fort-boulevard') {
        const data = {
            error: false,
            message: 'Sem erro',
            results: {
                id: 1,
                slug: "fort-boulevard",
                titulo: "FORT BOULEVARD",
                subtitulo: 'subtitle',
                descricao: "Aenean eget tortor diam. Praesent suscipit rutrum commodo. Praesent pretium, dolor quis faucibus luctus, diam erat aliquet justo, non imperdiet nunc metus non justo. Mauris semper scelerisque nibh ac lacinia. In eu fermentum velit.",
                data: "2022-08-31",
                banner: {
                    principal: {
                        url: "https://estrutura-engenharia-frontend.vercel.app/img/bg-boulevar-lg.webp",
                        alt: 'banner principal'
                    },
                    esquerdo: {
                        url: 'https://estrutura-engenharia-frontend.vercel.app/img/bg-card-boulevar1.webp',
                        alt: 'imagem do empreendimento lado esquerdo',
                        texto: 'Conforto e design arrojado.'
                    },
                    direito: {
                        url: 'https://estrutura-engenharia-frontend.vercel.app/img/bg-card-boulevar2.webp',
                        alt: 'imagem do empreendimento lado direito',
                        texto: 'Elegância e segurança reforçada.'
                    }
                },

                video: {
                    alt: 'descrição do video',
                    url: 'https://www.youtube.com/watch?v=dQw4w9'
                },
                suites: '4 Suites',
                garagem: '2 Garagens',
                espaco: '150m²',
                comodidades: [
                    {
                        id: 1,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-9.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Lavabo'
                    },
                    {
                        id: 2,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-3.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Rooftop'
                    },
                    {
                        id: 3,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-8.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Churrasqueira'
                    },
                    {
                        id: 4,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-1.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Área de Serviço'
                    },
                    {
                        id: 5,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-4.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Área Gourmet'
                    },
                    {
                        id: 6,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-5.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Gazebo Refrigerado'
                    },
                    {
                        id: 7,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-6.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Deck Solarium'
                    },
                    {
                        id: 8,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-7.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Garagem'
                    },
                ],
                galeria_caracteristicas: [
                    {
                        id: 1,
                        nome: 'Apartamento'
                    },
                    {
                        id: 2,
                        nome: 'Plantas'
                    },
                    {
                        id: 3,
                        nome: 'Áreas Comuns'
                    }
                ],

                galeria_imagens: {
                    apartamento: [
                        {
                            id: 1,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 2,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 3,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 4,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-4.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 5,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 6,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 7,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 8,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-4.webp',
                            alt: 'texto alternativo'
                        },

                    ],
                    plantas: [
                        {
                            id: 1,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 2,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 3,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 4,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-4.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 5,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 6,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 7,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 8,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-4.webp',
                            alt: 'texto alternativo'
                        },
                    ],
                    areas_comuns: [
                        {
                            id: 1,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 2,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 3,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 4,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-4.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 5,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 6,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 7,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 8,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-4.webp',
                            alt: 'texto alternativo'
                        },
                    ]
                }
            }


        }
        return res.status(200).json(data)
    }


    if (slug == 'fort-apollo') {
        const data = {
            error: false,
            message: 'Sem erro',
            results: {
                id: 2,
                slug: "fort-apollo",
                titulo: "FORT APOLLO",
                descricao: "Aenean eget tortor diam. Praesent suscipit rutrum commodo. Praesent pretium, dolor quis faucibus luctus, diam erat aliquet justo, non imperdiet nunc metus non justo. Mauris semper scelerisque nibh ac lacinia. In eu fermentum velit.",
                body: "<p>Aliquam aliquet commodo orci, quis suscipit dui tempus sit amet. Integer egestas suscipit magna, ut consequat elit. Praesent vehicula vitae dolor non vulputate. Nullam volutpat tristique ante, sit amet commodo erat dapibus in. Nam a rutrum urna.</p><p>Sed accumsan, diam et imperdiet fringilla, elit eros tincidunt magna, eu venenatis urna nibh a ante. Praesent id vehicula nunc, eu ultricies ex. Proin nec tincidunt orci, quis mattis lectus. Integer vestibulum venenatis hendrerit. Nam blandit mauris felis, sed molestie nulla tempus vitae.</p>",
                data: "2022-08-31",
                banner: {
                    principal: {
                        url: "https://estrutura-engenharia-frontend.vercel.app/img/bg-boulevar-lg.webp",
                        alt: 'banner principal'
                    },
                    esquerdo: {
                        url: 'https://estrutura-engenharia-frontend.vercel.app/img/bg-card-boulevar1.webp',
                        alt: 'imagem do empreendimento lado esquerdo',
                        texto: 'Conforto e design arrojado.'
                    },
                    direito: {
                        url: 'https://estrutura-engenharia-frontend.vercel.app/img/bg-card-boulevar2.webp',
                        alt: 'imagem do empreendimento lado direito',
                        texto: 'Elegância e segurança reforçada.'
                    }
                },

                video: {
                    alt: 'descrição do video',
                    url: 'https://www.youtube.com/watch?v=dQw4w9'
                },
                suites: '4 Suites',
                garagem: '2 Garagens',
                espaco: '150m²',
                comodidades: [
                    {
                        id: 1,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-9.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Lavabo'
                    },
                    {
                        id: 2,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-3.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Rooftop'
                    },
                    {
                        id: 3,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-8.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Churrasqueira'
                    },
                    {
                        id: 4,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-1.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Área de Serviço'
                    },
                    {
                        id: 5,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-4.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Área Gourmet'
                    },
                    {
                        id: 6,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-5.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Gazebo Refrigerado'
                    },
                    {
                        id: 7,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-6.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Deck Solarium'
                    },
                    {
                        id: 8,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-7.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Garagem'
                    },
                ],
                galeria_caracteristicas: [
                    {
                        id: 1,
                        nome: 'Apartamento'
                    },
                    {
                        id: 2,
                        nome: 'Plantas'
                    },
                    {
                        id: 3,
                        nome: 'Áreas Comuns'
                    }
                ],

                galeria_imagens: {
                    apartamento: [
                        {
                            id: 1,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 2,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 3,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 4,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-4.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 5,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 6,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 7,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 8,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-4.webp',
                            alt: 'texto alternativo'
                        },

                    ],
                    plantas: [
                        {
                            id: 1,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 2,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 3,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 4,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 5,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 6,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 7,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 8,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                    ],
                    areas_comuns: [
                        {
                            id: 1,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 2,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 3,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 4,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-4.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 5,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 6,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 7,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 8,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-4.webp',
                            alt: 'texto alternativo'
                        },
                    ]
                }


            }

        }
        return res.status(200).json(data)
    }
    if (slug == 'fort-neturno') {
        const data = {
            error: false,
            message: 'Sem erro',
            results: {

                id: 3,
                slug: "fort-neturno",
                titulo: "FORT NETURNO",
                descricao: "Aenean eget tortor diam. Praesent suscipit rutrum commodo. Praesent pretium, dolor quis faucibus luctus, diam erat aliquet justo, non imperdiet nunc metus non justo. Mauris semper scelerisque nibh ac lacinia. In eu fermentum velit.",
                body: "<p>Aliquam aliquet commodo orci, quis suscipit dui tempus sit amet. Integer egestas suscipit magna, ut consequat elit. Praesent vehicula vitae dolor non vulputate. Nullam volutpat tristique ante, sit amet commodo erat dapibus in. Nam a rutrum urna.</p><p>Sed accumsan, diam et imperdiet fringilla, elit eros tincidunt magna, eu venenatis urna nibh a ante. Praesent id vehicula nunc, eu ultricies ex. Proin nec tincidunt orci, quis mattis lectus. Integer vestibulum venenatis hendrerit. Nam blandit mauris felis, sed molestie nulla tempus vitae.</p>",
                data: "2022-08-31",
                banner: {
                    principal: {
                        url: "https://estrutura-engenharia-frontend.vercel.app/img/bg-boulevar-lg.webp",
                        alt: 'banner principal'
                    },
                    esquerdo: {
                        url: 'https://estrutura-engenharia-frontend.vercel.app/img/bg-card-boulevar1.webp',
                        alt: 'imagem do empreendimento lado esquerdo',
                        texto: 'Conforto e design arrojado.'
                    },
                    direito: {
                        url: 'https://estrutura-engenharia-frontend.vercel.app/img/bg-card-boulevar2.webp',
                        alt: 'imagem do empreendimento lado direito',
                        texto: 'Elegância e segurança reforçada.'
                    }
                },

                video: {
                    alt: 'descrição do video',
                    url: 'https://www.youtube.com/watch?v=dQw4w9'
                },
                suites: '4 Suites',
                garagem: '2 Garagens',
                espaco: '150m²',
                comodidades: [
                    {
                        id: 1,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-9.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Lavabo'
                    },
                    {
                        id: 2,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-3.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Rooftop'
                    },
                    {
                        id: 3,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-8.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Churrasqueira'
                    },
                    {
                        id: 4,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-1.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Área de Serviço'
                    },
                    {
                        id: 5,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-4.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Área Gourmet'
                    },
                    {
                        id: 6,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-5.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Gazebo Refrigerado'
                    },
                    {
                        id: 7,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-6.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Deck Solarium'
                    },
                    {
                        id: 8,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-7.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Garagem'
                    },
                ],
                galeria_caracteristicas: [
                    {
                        id: 1,
                        nome: 'Apartamento'
                    },
                    {
                        id: 2,
                        nome: 'Plantas'
                    },
                    {
                        id: 3,
                        nome: 'Áreas Comuns'
                    }
                ],

                galeria_imagens: {
                    apartamento: [
                        {
                            id: 1,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 2,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 3,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 4,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-4.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 5,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 6,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 7,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 8,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-4.webp',
                            alt: 'texto alternativo'
                        },

                    ],
                    plantas: [
                        {
                            id: 1,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 2,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 3,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 4,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 5,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 6,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 7,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 8,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                    ],
                    areas_comuns: [
                        {
                            id: 1,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 2,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 3,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 4,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-4.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 5,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 6,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 7,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 8,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-4.webp',
                            alt: 'texto alternativo'
                        },
                    ]
                }


            }

        }
        return res.status(200).json(data)
    }
    if (slug == 'fort-poisedon') {
        const data = {
            error: false,
            message: 'Sem erro',
            results: {

                id: 4,
                slug: "fort-poisedon",
                titulo: "FORT POISEDON",
                descricao: "Aenean eget tortor diam. Praesent suscipit rutrum commodo. Praesent pretium, dolor quis faucibus luctus, diam erat aliquet justo, non imperdiet nunc metus non justo. Mauris semper scelerisque nibh ac lacinia. In eu fermentum velit.",
                body: "<p>Aliquam aliquet commodo orci, quis suscipit dui tempus sit amet. Integer egestas suscipit magna, ut consequat elit. Praesent vehicula vitae dolor non vulputate. Nullam volutpat tristique ante, sit amet commodo erat dapibus in. Nam a rutrum urna.</p><p>Sed accumsan, diam et imperdiet fringilla, elit eros tincidunt magna, eu venenatis urna nibh a ante. Praesent id vehicula nunc, eu ultricies ex. Proin nec tincidunt orci, quis mattis lectus. Integer vestibulum venenatis hendrerit. Nam blandit mauris felis, sed molestie nulla tempus vitae.</p>",
                data: "2022-08-31",
                banner: {
                    principal: {
                        url: "https://estrutura-engenharia-frontend.vercel.app/img/bg-boulevar-lg.webp",
                        alt: 'banner principal'
                    },
                    esquerdo: {
                        url: 'https://estrutura-engenharia-frontend.vercel.app/img/bg-card-boulevar1.webp',
                        alt: 'imagem do empreendimento lado esquerdo',
                        texto: 'Conforto e design arrojado.'
                    },
                    direito: {
                        url: 'https://estrutura-engenharia-frontend.vercel.app/img/bg-card-boulevar2.webp',
                        alt: 'imagem do empreendimento lado direito',
                        texto: 'Elegância e segurança reforçada.'
                    }
                },

                video: {
                    alt: 'descrição do video',
                    url: 'https://www.youtube.com/watch?v=dQw4w9'
                },
                suites: '4 Suites',
                garagem: '2 Garagens',
                espaco: '150m²',
                comodidades: [
                    {
                        id: 1,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-9.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Lavabo'
                    },
                    {
                        id: 2,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-3.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Rooftop'
                    },
                    {
                        id: 3,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-8.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Churrasqueira'
                    },
                    {
                        id: 4,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-1.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Área de Serviço'
                    },
                    {
                        id: 5,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-4.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Área Gourmet'
                    },
                    {
                        id: 6,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-5.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Gazebo Refrigerado'
                    },
                    {
                        id: 7,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-6.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Deck Solarium'
                    },
                    {
                        id: 8,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-7.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Garagem'
                    },
                ],
                galeria_caracteristicas: [
                    {
                        id: 1,
                        nome: 'Apartamento'
                    },
                    {
                        id: 2,
                        nome: 'Plantas'
                    },
                    {
                        id: 3,
                        nome: 'Áreas Comuns'
                    }
                ],

                galeria_imagens: {
                    apartamento: [
                        {
                            id: 1,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 2,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 3,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 4,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-4.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 5,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 6,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 7,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 8,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-4.webp',
                            alt: 'texto alternativo'
                        },

                    ],
                    plantas: [
                        {
                            id: 1,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 2,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 3,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 4,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 5,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 6,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 7,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 8,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                    ],
                    areas_comuns: [
                        {
                            id: 1,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 2,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 3,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 4,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-4.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 5,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 6,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 7,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 8,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-4.webp',
                            alt: 'texto alternativo'
                        },
                    ]
                }


            }
        }
        return res.status(200).json(data)
    }
    if (slug == 'fort-do-farol') {
        const data = {
            error: false,
            message: 'Sem erro',
            results: {

                id: 5,
                slug: "fort-do-farol",
                titulo: "FORT DO FAROL",
                descricao: "Aenean eget tortor diam. Praesent suscipit rutrum commodo. Praesent pretium, dolor quis faucibus luctus, diam erat aliquet justo, non imperdiet nunc metus non justo. Mauris semper scelerisque nibh ac lacinia. In eu fermentum velit.",
                body: "<p>Aliquam aliquet commodo orci, quis suscipit dui tempus sit amet. Integer egestas suscipit magna, ut consequat elit. Praesent vehicula vitae dolor non vulputate. Nullam volutpat tristique ante, sit amet commodo erat dapibus in. Nam a rutrum urna.</p><p>Sed accumsan, diam et imperdiet fringilla, elit eros tincidunt magna, eu venenatis urna nibh a ante. Praesent id vehicula nunc, eu ultricies ex. Proin nec tincidunt orci, quis mattis lectus. Integer vestibulum venenatis hendrerit. Nam blandit mauris felis, sed molestie nulla tempus vitae.</p>",
                data: "2022-08-31",
                outros_post: [  //máximo 5 noticias
                    {
                        data: '2022-08-22',
                        titulo: 'Donec fringilla sodales pellentesque. Integer laoreet cursus efficitur',
                        slug: 'fort-apollo'
                    },
                    {
                        data: '2022-09-25',
                        titulo: 'Aliquam erat volutpat. Cras velit odio, aliquam in mi at, fringilla sodales est',
                        slug: 'fort-do-farol'
                    },
                    {
                        data: '2021-01-25',
                        titulo: 'Nam vel eros eu neque consequat laoreet. Integer a suscipit erat, ut venenatis',
                        slug: 'fort-neturno'
                    }],
                banner: {
                    principal: {
                        url: "https://estrutura-engenharia-frontend.vercel.app/img/bg-boulevar-lg.webp",
                        alt: 'banner principal'
                    },
                    esquerdo: {
                        url: 'https://estrutura-engenharia-frontend.vercel.app/img/bg-card-boulevar1.webp',
                        alt: 'imagem do empreendimento lado esquerdo',
                        texto: 'Conforto e design arrojado.'
                    },
                    direito: {
                        url: 'https://estrutura-engenharia-frontend.vercel.app/img/bg-card-boulevar2.webp',
                        alt: 'imagem do empreendimento lado direito',
                        texto: 'Elegância e segurança reforçada.'
                    }
                },

                video: {
                    alt: 'descrição do video',
                    url: 'https://www.youtube.com/watch?v=dQw4w9'
                },
                suites: '4 Suites',
                garagem: '2 Garagens',
                espaco: '150m²',
                comodidades: [
                    {
                        id: 1,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-9.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Lavabo'
                    },
                    {
                        id: 2,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-3.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Rooftop'
                    },
                    {
                        id: 3,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-8.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Churrasqueira'
                    },
                    {
                        id: 4,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-1.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Área de Serviço'
                    },
                    {
                        id: 5,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-4.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Área Gourmet'
                    },
                    {
                        id: 6,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-5.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Gazebo Refrigerado'
                    },
                    {
                        id: 7,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-6.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Deck Solarium'
                    },
                    {
                        id: 8,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-7.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Garagem'
                    },
                ],
                galeria_caracteristicas: [
                    {
                        id: 1,
                        nome: 'Apartamento'
                    },
                    {
                        id: 2,
                        nome: 'Plantas'
                    },
                    {
                        id: 3,
                        nome: 'Áreas Comuns'
                    }
                ],

                galeria_imagens: {
                    apartamento: [
                        {
                            id: 1,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 2,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 3,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 4,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-4.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 5,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 6,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 7,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 8,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-4.webp',
                            alt: 'texto alternativo'
                        },

                    ],
                    plantas: [
                        {
                            id: 1,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 2,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 3,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 4,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 5,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 6,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 7,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 8,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                    ],
                    areas_comuns: [
                        {
                            id: 1,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 2,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 3,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 4,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-4.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 5,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 6,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 7,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 8,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-4.webp',
                            alt: 'texto alternativo'
                        },
                    ]
                }



            }
        }
        return res.status(200).json(data)
    }
    if (slug == 'fort-exclusive') {
        const data = {
            error: false,
            message: 'Sem erro',
            results: {

                id: 6,
                slug: "fort-exclusive",
                titulo: "FORT EXCLUSIVE",
                descricao: "Aenean eget tortor diam. Praesent suscipit rutrum commodo. Praesent pretium, dolor quis faucibus luctus, diam erat aliquet justo, non imperdiet nunc metus non justo. Mauris semper scelerisque nibh ac lacinia. In eu fermentum velit.",
                body: "<p>Aliquam aliquet commodo orci, quis suscipit dui tempus sit amet. Integer egestas suscipit magna, ut consequat elit. Praesent vehicula vitae dolor non vulputate. Nullam volutpat tristique ante, sit amet commodo erat dapibus in. Nam a rutrum urna.</p><p>Sed accumsan, diam et imperdiet fringilla, elit eros tincidunt magna, eu venenatis urna nibh a ante. Praesent id vehicula nunc, eu ultricies ex. Proin nec tincidunt orci, quis mattis lectus. Integer vestibulum venenatis hendrerit. Nam blandit mauris felis, sed molestie nulla tempus vitae.</p>",
                data: "2022-08-31",
                banner: {
                    principal: {
                        url: "https://estrutura-engenharia-frontend.vercel.app/img/bg-boulevar-lg.webp",
                        alt: 'banner principal'
                    },
                    esquerdo: {
                        url: 'https://estrutura-engenharia-frontend.vercel.app/img/bg-card-boulevar1.webp',
                        alt: 'imagem do empreendimento lado esquerdo',
                        texto: 'Conforto e design arrojado.'
                    },
                    direito: {
                        url: 'https://estrutura-engenharia-frontend.vercel.app/img/bg-card-boulevar2.webp',
                        alt: 'imagem do empreendimento lado direito',
                        texto: 'Elegância e segurança reforçada.'
                    }
                },

                video: {
                    alt: 'descrição do video',
                    url: 'https://www.youtube.com/watch?v=dQw4w9'
                },
                suites: '4 Suites',
                garagem: '2 Garagens',
                espaco: '150m²',
                comodidades: [
                    {
                        id: 1,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-9.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Lavabo'
                    },
                    {
                        id: 2,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-3.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Rooftop'
                    },
                    {
                        id: 3,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-8.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Churrasqueira'
                    },
                    {
                        id: 4,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-1.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Área de Serviço'
                    },
                    {
                        id: 5,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-4.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Área Gourmet'
                    },
                    {
                        id: 6,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-5.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Gazebo Refrigerado'
                    },
                    {
                        id: 7,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-6.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Deck Solarium'
                    },
                    {
                        id: 8,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-7.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Garagem'
                    },
                ],
                galeria_caracteristicas: [
                    {
                        id: 1,
                        nome: 'Apartamento'
                    },
                    {
                        id: 2,
                        nome: 'Plantas'
                    },
                    {
                        id: 3,
                        nome: 'Áreas Comuns'
                    }
                ],

                galeria_imagens: {
                    apartamento: [
                        {
                            id: 1,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 2,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 3,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 4,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-4.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 5,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 6,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 7,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 8,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-4.webp',
                            alt: 'texto alternativo'
                        },

                    ],
                    plantas: [
                        {
                            id: 1,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 2,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 3,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 4,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 5,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 6,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 7,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 8,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                    ],
                    areas_comuns: [
                        {
                            id: 1,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 2,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 3,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 4,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-4.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 5,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 6,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 7,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 8,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-4.webp',
                            alt: 'texto alternativo'
                        },
                    ]
                }


            }
        }
        return res.status(200).json(data)
    }
    if (slug == 'fort-exclusive-2') {
        const data = {
            error: false,
            message: 'Sem erro',
            results: {

                id: 7,
                slug: "fort-exclusive-2",
                titulo: "FORT EXCLUSIVE 2",
                descricao: "Aenean eget tortor diam. Praesent suscipit rutrum commodo. Praesent pretium, dolor quis faucibus luctus, diam erat aliquet justo, non imperdiet nunc metus non justo. Mauris semper scelerisque nibh ac lacinia. In eu fermentum velit.",
                body: "<p>Aliquam aliquet commodo orci, quis suscipit dui tempus sit amet. Integer egestas suscipit magna, ut consequat elit. Praesent vehicula vitae dolor non vulputate. Nullam volutpat tristique ante, sit amet commodo erat dapibus in. Nam a rutrum urna.</p><p>Sed accumsan, diam et imperdiet fringilla, elit eros tincidunt magna, eu venenatis urna nibh a ante. Praesent id vehicula nunc, eu ultricies ex. Proin nec tincidunt orci, quis mattis lectus. Integer vestibulum venenatis hendrerit. Nam blandit mauris felis, sed molestie nulla tempus vitae.</p>",
                data: "2022-08-31",
                banner: {
                    principal: {
                        url: "https://estrutura-engenharia-frontend.vercel.app/img/bg-boulevar-lg.webp",
                        alt: 'banner principal'
                    },
                    esquerdo: {
                        url: 'https://estrutura-engenharia-frontend.vercel.app/img/bg-card-boulevar1.webp',
                        alt: 'imagem do empreendimento lado esquerdo',
                        texto: 'Conforto e design arrojado.'
                    },
                    direito: {
                        url: 'https://estrutura-engenharia-frontend.vercel.app/img/bg-card-boulevar2.webp',
                        alt: 'imagem do empreendimento lado direito',
                        texto: 'Elegância e segurança reforçada.'
                    }
                },

                video: {
                    alt: 'descrição do video',
                    url: 'https://www.youtube.com/watch?v=dQw4w9'
                },
                suites: '4 Suites',
                garagem: '2 Garagens',
                espaco: '150m²',
                comodidades: [
                    {
                        id: 1,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-9.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Lavabo'
                    },
                    {
                        id: 2,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-3.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Rooftop'
                    },
                    {
                        id: 3,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-8.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Churrasqueira'
                    },
                    {
                        id: 4,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-1.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Área de Serviço'
                    },
                    {
                        id: 5,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-4.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Área Gourmet'
                    },
                    {
                        id: 6,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-5.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Gazebo Refrigerado'
                    },
                    {
                        id: 7,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-6.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Deck Solarium'
                    },
                    {
                        id: 8,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-7.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Garagem'
                    },
                ],
                galeria_caracteristicas: [
                    {
                        id: 1,
                        nome: 'Apartamento'
                    },
                    {
                        id: 2,
                        nome: 'Plantas'
                    },
                    {
                        id: 3,
                        nome: 'Áreas Comuns'
                    }
                ],

                galeria_imagens: {
                    apartamento: [
                        {
                            id: 1,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 2,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 3,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 4,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-4.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 5,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 6,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 7,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 8,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-4.webp',
                            alt: 'texto alternativo'
                        },

                    ],
                    plantas: [
                        {
                            id: 1,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 2,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 3,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 4,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 5,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 6,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 7,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 8,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                    ],
                    areas_comuns: [
                        {
                            id: 1,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 2,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 3,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 4,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-4.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 5,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 6,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 7,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 8,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-4.webp',
                            alt: 'texto alternativo'
                        },
                    ]
                }


            }
        }
        return res.status(200).json(data)
    }
    if (slug == 'fort-orion') {
        const data = {
            error: false,
            message: 'Sem erro',
            results: {

                id: 8,
                slug: "fort-orion",
                titulo: "FORT ORION",
                descricao: "Aenean eget tortor diam. Praesent suscipit rutrum commodo. Praesent pretium, dolor quis faucibus luctus, diam erat aliquet justo, non imperdiet nunc metus non justo. Mauris semper scelerisque nibh ac lacinia. In eu fermentum velit.",
                body: "<p>Aliquam aliquet commodo orci, quis suscipit dui tempus sit amet. Integer egestas suscipit magna, ut consequat elit. Praesent vehicula vitae dolor non vulputate. Nullam volutpat tristique ante, sit amet commodo erat dapibus in. Nam a rutrum urna.</p><p>Sed accumsan, diam et imperdiet fringilla, elit eros tincidunt magna, eu venenatis urna nibh a ante. Praesent id vehicula nunc, eu ultricies ex. Proin nec tincidunt orci, quis mattis lectus. Integer vestibulum venenatis hendrerit. Nam blandit mauris felis, sed molestie nulla tempus vitae.</p>",
                data: "2022-08-31",
                banner: {
                    principal: {
                        url: "https://estrutura-engenharia-frontend.vercel.app/img/bg-boulevar-lg.webp",
                        alt: 'banner principal'
                    },
                    esquerdo: {
                        url: 'https://estrutura-engenharia-frontend.vercel.app/img/bg-card-boulevar1.webp',
                        alt: 'imagem do empreendimento lado esquerdo',
                        texto: 'Conforto e design arrojado.'
                    },
                    direito: {
                        url: 'https://estrutura-engenharia-frontend.vercel.app/img/bg-card-boulevar2.webp',
                        alt: 'imagem do empreendimento lado direito',
                        texto: 'Elegância e segurança reforçada.'
                    }
                },

                video: {
                    alt: 'descrição do video',
                    url: 'https://www.youtube.com/watch?v=dQw4w9'
                },
                suites: '4 Suites',
                garagem: '2 Garagens',
                espaco: '150m²',
                comodidades: [
                    {
                        id: 1,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-9.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Lavabo'
                    },
                    {
                        id: 2,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-3.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Rooftop'
                    },
                    {
                        id: 3,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-8.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Churrasqueira'
                    },
                    {
                        id: 4,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-1.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Área de Serviço'
                    },
                    {
                        id: 5,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-4.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Área Gourmet'
                    },
                    {
                        id: 6,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-5.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Gazebo Refrigerado'
                    },
                    {
                        id: 7,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-6.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Deck Solarium'
                    },
                    {
                        id: 8,
                        imagem: {
                            url: "https://estrutura-engenharia-frontend.vercel.app/img/circle-7.webp",
                            alt: 'imagem de comodidades'
                        },
                        texto: 'Garagem'
                    },
                ],
                galeria_caracteristicas: [
                    {
                        id: 1,
                        nome: 'Apartamento'
                    },
                    {
                        id: 2,
                        nome: 'Plantas'
                    },
                    {
                        id: 3,
                        nome: 'Áreas Comuns'
                    }
                ],

                galeria_imagens: {
                    apartamento: [
                        {
                            id: 1,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 2,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 3,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 4,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-4.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 5,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 6,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 7,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 8,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/square-e-4.webp',
                            alt: 'texto alternativo'
                        },

                    ],
                    plantas: [
                        {
                            id: 1,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 2,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 3,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 4,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 5,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 6,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 7,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 8,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/planta-galeria.webp',
                            alt: 'texto alternativo'
                        },
                    ],
                    areas_comuns: [
                        {
                            id: 1,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 2,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 3,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 4,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-4.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 5,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-1.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 6,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-2.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 7,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-3.webp',
                            alt: 'texto alternativo'
                        },
                        {
                            id: 8,
                            url: 'https://estrutura-engenharia-frontend.vercel.app/img/area-comum-galeria-4.webp',
                            alt: 'texto alternativo'
                        },
                    ]
                }

            }
        }
        return res.status(200).json(data)
    }


    if (!slug) {
        const data = {
            error: true,
            message: 'Você precisa informar o slug.',
            results: {}
        }
        return res.status(404).json(data)
    }



}