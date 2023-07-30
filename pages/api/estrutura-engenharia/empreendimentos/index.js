import NextCors from 'nextjs-cors';

export default async function handler(req, res) {


    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });


    const data = {
        error: false,
        message: 'Sem erros',
        results: {

            empreedimentos: [
                {
                    id: 1,
                    nome: 'Fort Boulevard',
                    slug: 'fort-boulevard',
                    data: '2021-12-25',
                    thumbnail: {
                        alt: 'condomínio for boulevard empreendimento',
                        url: 'https://estrutura-engenharia-frontend.vercel.app/img/thumbnail1.webp'
                    },
                    caracteristicas: {
                        bairro: 'Atalaia',
                        area: '40 a 60m²',
                        comodos: '2 suites'
                    }
                },
                {
                    id: 2,
                    nome: 'Fort Apollo',
                    slug: 'fort-apollo',
                    data: '2021-12-25',
                    thumbnail: {
                        alt: 'default image alt',
                        url: 'https://estrutura-engenharia-frontend.vercel.app/img/thumbnail2.webp'
                    },
                    caracteristicas: {
                        bairro: 'Atalaia',
                        area: '40 a 60m²',
                        comodos: '2 suites'
                    }
                },
                {
                    id: 3,
                    nome: 'Fort Neturdo',
                    slug: 'fort-neturno',
                    data: '2021-12-25',
                    thumbnail: {
                        alt: 'default image alt',
                        url: 'https://estrutura-engenharia-frontend.vercel.app/img/thumbnail3.webp'
                    },
                    caracteristicas: {
                        bairro: 'Atalaia',
                        area: '40 a 60m²',
                        comodos: '2 suites'
                    }
                },
                {
                    id: 4,
                    nome: 'Fort Poisedon',
                    slug: 'fort-poisedon',
                    data: '2021-12-25',
                    thumbnail: {
                        alt: 'default image alt',
                        url: 'https://estrutura-engenharia-frontend.vercel.app/img/thumbnail4.webp'
                    },
                    caracteristicas: {
                        bairro: 'Atalaia',
                        area: '40 a 60m²',
                        comodos: '2 suites'
                    }
                },
                {
                    id: 5,
                    nome: 'Fort do Farol',
                    slug: 'fort-do-farol',
                    data: '2021-12-25',
                    thumbnail: {
                        alt: 'default image alt',
                        url: 'https://estrutura-engenharia-frontend.vercel.app/img/thumbnail1.webp'
                    },
                    caracteristicas: {
                        bairro: 'Atalaia',
                        area: '40 a 60m²',
                        comodos: '2 suites'
                    }
                },
                {
                    id: 6,
                    nome: 'Fort Exclusive',
                    slug: 'fort-exclusive',
                    data: '2021-12-25',
                    thumbnail: {
                        alt: 'default image alt',
                        url: 'https://estrutura-engenharia-frontend.vercel.app/img/thumbnail2.webp'
                    },
                    caracteristicas: {
                        bairro: 'Atalaia',
                        area: '40 a 60m²',
                        comodos: '2 suites'
                    }
                },
                {
                    id: 7,
                    nome: 'Fort Exclusive 2',
                    slug: 'fort-exclusive-2',
                    data: '2021-12-25',
                    thumbnail: {
                        alt: 'default image alt',
                        url: 'https://estrutura-engenharia-frontend.vercel.app/img/thumbnail3.webp'
                    },
                    caracteristicas: {
                        bairro: 'Atalaia',
                        area: '40 a 60m²',
                        comodos: '2 suites'
                    }
                },
                {
                    id: 8,
                    nome: 'Fort Orion',
                    slug: 'fort-orion',
                    data: '2021-12-25',
                    thumbnail: {
                        alt: 'default image alt',
                        url: 'https://estrutura-engenharia-frontend.vercel.app/img/thumbnail4.webp'
                    },
                    caracteristicas: {
                        bairro: 'Atalaia',
                        area: '40 a 60m²',
                        comodos: '2 suites'
                    }
                },
            ]

        }

    }
    res.status(200).json(data)
}
