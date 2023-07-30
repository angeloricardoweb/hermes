import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
    const { id } = req.query;
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });
    console.log(id)

    if (id === '63413') {

        const data = {
            error: false,
            message: 'Sem erros - Avisos da area da empresa',
            data: {
                id: req.query.id,
                endereco_entrega: 'Rua Domingos Marreiros, n° 49 ANANINDEUA - PA Umarizal - 66055-210 sala 1308',
                status: 'Entregue',
                data: '2022-07-27T11:50:48.709Z',
                total: 598,
                tipo_entrega: 'pac',
                forma_pagament: 'pix',
                parcelamento: 3,
                produtos: [
                    {
                        imagem: 'https://api-temp.vercel.app/manuella-melo/model-1.webp',
                        id: 63456,
                        nome: 'Biquini Marrom',
                        slug: 'biquini-marrom',
                        quantidade: 1,
                        valor: 299,
                        caracteristicas: {
                            cores: {
                                id: 1,
                                nome: 'Cor',
                                opcoes: [
                                    { id: 1, nome: 'Preto Noite', hex: '#1b1b1b' },

                                ],
                            },
                            tamanhos: {
                                id: 2,
                                nome: 'Tamanho',
                                opcoes: [
                                    { id: 1, valor: '36' },

                                ],
                            },
                        },
                    },


                    {
                        imagem: 'https://api-temp.vercel.app/manuella-melo/model-1.webp',
                        id: 63456,
                        nome: 'Biquini Marrom',
                        slug: 'biquini-marrom',
                        quantidade: 1,
                        valor: 299,
                        caracteristicas: {
                            cores: {
                                id: 1,
                                nome: 'Cor',
                                opcoes: [
                                    { id: 1, nome: 'Preto Noite', hex: '#1b1b1b' },

                                ],
                            },
                            tamanhos: {
                                id: 2,
                                nome: 'Tamanho',
                                opcoes: [
                                    { id: 1, valor: '46' },

                                ],
                            },
                        },
                    },
                ]

            }

        }
        res.status(200).json(data)
    }

    if (id === '98723') {

        const data = {
            error: false,
            message: 'Sem erros - Avisos da area da empresa',
            data: {
                id: req.query.id,
                endereco_entrega: 'Rua Domingos Marreiros, n° 49 ANANINDEUA - PA Umarizal - 66055-210 sala 1308',
                status: 'Em andamento',
                data: '2022-07-27T11:50:48.709Z',
                total: 598,
                prazo: '4 dias',
                tipo_entrega: 'pac',
                forma_pagament: 'pix',
                parcelamento: 5,
                produtos: [
                    {
                        imagem: 'https://api-temp.vercel.app/manuella-melo/model-1.webp',
                        id: 63456,
                        nome: 'Biquini Marrom',
                        slug: 'biquini-marrom',
                        quantidade: 1,
                        valor: 299,
                        caracteristicas: {
                            cores: {
                                id: 1,
                                nome: 'Cor',
                                opcoes: [
                                    { id: 1, nome: 'Preto Noite', hex: '#1b1b1b' },

                                ],
                            },
                            tamanhos: {
                                id: 2,
                                nome: 'Tamanho',
                                opcoes: [
                                    { id: 1, valor: '36' },

                                ],
                            },
                        },
                    },


                    {
                        imagem: 'https://api-temp.vercel.app/manuella-melo/model-1.webp',
                        id: 63456,
                        nome: 'Biquini Marrom',
                        slug: 'biquini-marrom',
                        quantidade: 1,
                        valor: 299,
                        caracteristicas: {
                            cores: {
                                id: 1,
                                nome: 'Cor',
                                opcoes: [
                                    { id: 1, nome: 'Preto Noite', hex: '#1b1b1b' },

                                ],
                            },
                            tamanhos: {
                                id: 2,
                                nome: 'Tamanho',
                                opcoes: [
                                    { id: 1, valor: '46' },

                                ],
                            },
                        },
                    },
                ]

            }

        }
        res.status(200).json(data)
    }

    if (id === '12440') {

        const data = {
            error: false,
            message: 'Sem erros - Avisos da area da empresa',
            data: {
                id: req.query.id,
                endereco_entrega: 'Rua Domingos Marreiros, n° 49 ANANINDEUA - PA Umarizal - 66055-210 sala 1308',
                status: 'Finalizado',
                data: '2022-07-27T11:50:48.709Z',
                total: 598,
                tipo_entrega: 'pac',
                forma_pagament: 'pix',
                parcelamento: 4,
                produtos: [
                    {
                        imagem: 'https://api-temp.vercel.app/manuella-melo/model-1.webp',
                        id: 63456,
                        nome: 'Biquini Marrom',
                        slug: 'biquini-marrom',
                        quantidade: 1,
                        valor: 299,
                        caracteristicas: {
                            cores: {
                                id: 1,
                                nome: 'Cor',
                                opcoes: [
                                    { id: 1, nome: 'Preto Noite', hex: '#1b1b1b' },

                                ],
                            },
                            tamanhos: {
                                id: 2,
                                nome: 'Tamanho',
                                opcoes: [
                                    { id: 1, valor: '36' },

                                ],
                            },
                        },
                    },


                    {
                        imagem: 'https://api-temp.vercel.app/manuella-melo/model-1.webp',
                        id: 63456,
                        nome: 'Biquini Marrom',
                        slug: 'biquini-marrom',
                        quantidade: 1,
                        valor: 299,
                        caracteristicas: {
                            cores: {
                                id: 1,
                                nome: 'Cor',
                                opcoes: [
                                    { id: 1, nome: 'Preto Noite', hex: '#1b1b1b' },

                                ],
                            },
                            tamanhos: {
                                id: 2,
                                nome: 'Tamanho',
                                opcoes: [
                                    { id: 1, valor: '46' },

                                ],
                            },
                        },
                    },
                ]

            }

        }
        res.status(200).json(data)
    }

    if (!id) {
        const data = {
            error: true,
            message: 'Você precisa informar o slug.',
            results: {}
        }
        return res.status(404).json(data)
    }
}
