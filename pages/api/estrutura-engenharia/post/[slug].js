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

    if (slug == 'proin-cursus-vehicula-aliquet-curabitur-hendrerit-leo-sit-amet-consequat-egestas') {
        const data = {
            error: false,
            message: 'Sem erro',
            results: {
                banner: {
                    url: "https://estrutura-engenharia-frontend.vercel.app/img/blog-post-image.png",
                    alt: "default image alt"
                },
                imagem: {
                    url: "https://estrutura-engenharia-frontend.vercel.app/img/blog-post-image.png",
                    alt: "default image alt"
                },
                id: 1,
                slug: "proin-cursus-vehicula-aliquet-curabitur-hendrerit-leo-sit-amet-consequat-egestas",
                titulo: "Proin cursus vehicula aliquet. Curabitur hendrerit leo sit amet consequat egestas",
                body: "<p>Vivamus sagittis eros nec erat ornare, ac mollis quam aliquam. Maecenas elementum id mauris ac porta. In ac arcu vel massa tincidunt venenatis. In ac neque risus. Aenean consequat, nisl at fringilla dictum, turpis lorem ultrices sapien, et consectetur libero est eget mauris. Proin ac odio varius, tincidunt ipsum at, bibendum magna. In iaculis eros non leo accumsan, vel ullamcorper orci euismod. Vivamus finibus risus dui, at volutpat velit sollicitudin maximus. In a justo et odio molestie imperdiet. Sed placerat turpis at velit viverra, et malesuada urna venenatis.</p><p>Sed convallis, augue quis auctor tempor, risus dolor tincidunt nisl, at vulputate ligula nisl vel eros. Aliquam varius, nulla sed vehicula efficitur, purus tellus imperdiet diam, et bibendum nulla quam in dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed cursus elit nunc, ac rhoncus ex maximus eu. Suspendisse pharetra, mauris vitae pharetra lacinia, ligula massa mattis enim, quis mattis nisl lectus quis risus. In eu felis pharetra, auctor ipsum vitae, efficitur ante. Aliquam erat volutpat. Nulla rutrum egestas tortor eu ullamcorper. Cras egestas feugiat felis, in consectetur elit auctor ac. Sed malesuada aliquet sem, non condimentum purus vulputate semper. Donec accumsan interdum diam vel feugiat. Suspendisse augue ipsum, tincidunt non pulvinar eu, placerat at nibh.</p><p>Nam vel eros eu neque consequat laoreet. Integer a suscipit erat, ut venenatis ipsum. Praesent tortor ex, rutrum hendrerit arcu et, feugiat condimentum lectus. Fusce id nisi sed ligula lobortis efficitur id quis nisi. Suspendisse pulvinar quam et justo finibus dapibus. Pellentesque a suscipit nulla. Nulla interdum purus ac ligula imperdiet accumsan. Duis semper nunc sed est vehicula, et pellentesque lectus porttitor. Quisque id magna quis ipsum bibendum dapibus at quis massa. Nulla convallis tristique sapien, vitae tempus dui efficitur ac. Sed auctor gravida interdum. Donec pulvinar aliquam maximus. Suspendisse potenti. Ut egestas volutpat odio non egestas. Aliquam ac egestas nisi.</p><p>Ut vel diam non elit sagittis dapibus et et enim. Aliquam ornare ut ex et commodo. Mauris quam nisi, tempor sit amet dolor hendrerit, convallis aliquet enim. Fusce at enim ornare, pretium lorem ut, vestibulum purus. Morbi hendrerit placerat ex. Vivamus sit amet ultrices velit. Sed hendrerit arcu in faucibus sollicitudin.</p>",
                data: "2022-08-31",
                outros_post: [  //máximo 5 noticias
                    {
                        data: '2022-08-22',
                        titulo: 'Donec fringilla sodales pellentesque. Integer laoreet cursus efficitur',
                        slug: 'curabitur-lacus-ipsum-maximus-a-mollis-at-finibus-non-odio-nam-lacinia-eget-arcu-non-vestibulum'
                    },
                    {
                        data: '2022-09-25',
                        titulo: 'Aliquam erat volutpat. Cras velit odio, aliquam in mi at, fringilla sodales est',
                        slug: 'aliquam-erat-volutpat-cras-velit-odio-aliquam-in-mi-at-fringilla-sodales-est'
                    },
                    {
                        data: '2021-01-25',
                        titulo: 'Nam vel eros eu neque consequat laoreet. Integer a suscipit erat, ut venenatis',
                        slug: 'suspendisse-potenti-ut-egestas-volutpat-odio-non-egestas'
                    },

                ],
                imagem_carrossel: [
                    {
                        id: 1,
                        nome: 'foto com o patrão',
                        imagem: {
                            alt: 'texto alternativo',
                            url: 'http://www.urldaimagem.com.br'
                        }
                    },
                    {
                        id: 2,
                        nome: 'foto com o patrão',
                        imagem: {
                            alt: 'texto alternativo',
                            url: 'http://www.urldaimagem.com.br'
                        }
                    },
                    {
                        id: 3,
                        nome: 'foto com o patrão',
                        imagem: {
                            alt: 'texto alternativo',
                            url: 'http://www.urldaimagem.com.br'
                        }
                    },
                    {
                        id: 4,
                        nome: 'foto com o patrão',
                        imagem: {
                            alt: 'texto alternativo',
                            url: 'http://www.urldaimagem.com.br'
                        }
                    },
                    {
                        id: 5,
                        nome: 'foto com o patrão',
                        imagem: {
                            alt: 'texto alternativo',
                            url: 'http://www.urldaimagem.com.br'
                        }
                    },
                ]

            }
        }
        return res.status(200).json(data)
    }
    if (slug == 'donec-fringilla-sodales-pellentesque-integer-laoreet-cursus-efficitur') {
        const data = {
            error: false,
            message: 'Sem erro',
            results: {
                imagem: {
                    url: "https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2021/06/85-1.jpg",
                    alt: "default image alt"
                },
                id: 1,
                slug: "donec-fringilla-sodales-pellentesque-integer-laoreet-cursus-efficitur",
                titulo: "Donec fringilla sodales pellentesque. Integer laoreet cursus efficitur",
                body: "<p>Vivamus sagittis eros nec erat ornare, ac mollis quam aliquam. Maecenas elementum id mauris ac porta. In ac arcu vel massa tincidunt venenatis. In ac neque risus. Aenean consequat, nisl at fringilla dictum, turpis lorem ultrices sapien, et consectetur libero est eget mauris. Proin ac odio varius, tincidunt ipsum at, bibendum magna. In iaculis eros non leo accumsan, vel ullamcorper orci euismod. Vivamus finibus risus dui, at volutpat velit sollicitudin maximus. In a justo et odio molestie imperdiet. Sed placerat turpis at velit viverra, et malesuada urna venenatis.</p><p>Sed convallis, augue quis auctor tempor, risus dolor tincidunt nisl, at vulputate ligula nisl vel eros. Aliquam varius, nulla sed vehicula efficitur, purus tellus imperdiet diam, et bibendum nulla quam in dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed cursus elit nunc, ac rhoncus ex maximus eu. Suspendisse pharetra, mauris vitae pharetra lacinia, ligula massa mattis enim, quis mattis nisl lectus quis risus. In eu felis pharetra, auctor ipsum vitae, efficitur ante. Aliquam erat volutpat. Nulla rutrum egestas tortor eu ullamcorper. Cras egestas feugiat felis, in consectetur elit auctor ac. Sed malesuada aliquet sem, non condimentum purus vulputate semper. Donec accumsan interdum diam vel feugiat. Suspendisse augue ipsum, tincidunt non pulvinar eu, placerat at nibh.</p><p>Nam vel eros eu neque consequat laoreet. Integer a suscipit erat, ut venenatis ipsum. Praesent tortor ex, rutrum hendrerit arcu et, feugiat condimentum lectus. Fusce id nisi sed ligula lobortis efficitur id quis nisi. Suspendisse pulvinar quam et justo finibus dapibus. Pellentesque a suscipit nulla. Nulla interdum purus ac ligula imperdiet accumsan. Duis semper nunc sed est vehicula, et pellentesque lectus porttitor. Quisque id magna quis ipsum bibendum dapibus at quis massa. Nulla convallis tristique sapien, vitae tempus dui efficitur ac. Sed auctor gravida interdum. Donec pulvinar aliquam maximus. Suspendisse potenti. Ut egestas volutpat odio non egestas. Aliquam ac egestas nisi.</p><p>Ut vel diam non elit sagittis dapibus et et enim. Aliquam ornare ut ex et commodo. Mauris quam nisi, tempor sit amet dolor hendrerit, convallis aliquet enim. Fusce at enim ornare, pretium lorem ut, vestibulum purus. Morbi hendrerit placerat ex. Vivamus sit amet ultrices velit. Sed hendrerit arcu in faucibus sollicitudin.</p>",
                data: "2022-08-31",
                outros_post: [  //máximo 5 noticias
                    {
                        data: '2019-01-25',
                        titulo: 'Donec fringilla sodales pellentesque. Integer laoreet cursus efficitur',
                        slug: 'curabitur-lacus-ipsum-maximus-a-mollis-at-finibus-non-odio-nam-lacinia-eget-arcu-non-vestibulum'
                    },
                    {
                        data: '2020-12-25',
                        titulo: 'Aliquam erat volutpat. Cras velit odio, aliquam in mi at, fringilla sodales est',
                        slug: 'aliquam-erat-volutpat-cras-velit-odio-aliquam-in-mi-at-fringilla-sodales-est'
                    },
                    {
                        data: '2022-11-29',
                        titulo: 'Nam vel eros eu neque consequat laoreet. Integer a suscipit erat, ut venenatis',
                        slug: 'suspendisse-potenti-ut-egestas-volutpat-odio-non-egestas'
                    },

                ],

            }
        }
        return res.status(200).json(data)
    }
    if (slug == 'aliquam-erat-volutpat-cras-velit-odio-aliquam-in-mi-at-fringilla-sodales-est') {
        const data = {
            error: false,
            message: 'Sem erro',
            results: {
                imagem: {
                    url: "https://ferdinandodesousa.files.wordpress.com/2018/03/hidrovia-tietc3aa-paranc3a1.jpg?w=730",
                    alt: "default image alt"
                },
                id: 1,
                slug: "aliquam-erat-volutpat-cras-velit-odio-aliquam-in-mi-at-fringilla-sodales-est",
                titulo: "Aliquam erat volutpat. Cras velit odio, aliquam in mi at, fringilla sodales est",
                body: "<p>Vivamus sagittis eros nec erat ornare, ac mollis quam aliquam. Maecenas elementum id mauris ac porta. In ac arcu vel massa tincidunt venenatis. In ac neque risus. Aenean consequat, nisl at fringilla dictum, turpis lorem ultrices sapien, et consectetur libero est eget mauris. Proin ac odio varius, tincidunt ipsum at, bibendum magna. In iaculis eros non leo accumsan, vel ullamcorper orci euismod. Vivamus finibus risus dui, at volutpat velit sollicitudin maximus. In a justo et odio molestie imperdiet. Sed placerat turpis at velit viverra, et malesuada urna venenatis.</p><p>Sed convallis, augue quis auctor tempor, risus dolor tincidunt nisl, at vulputate ligula nisl vel eros. Aliquam varius, nulla sed vehicula efficitur, purus tellus imperdiet diam, et bibendum nulla quam in dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed cursus elit nunc, ac rhoncus ex maximus eu. Suspendisse pharetra, mauris vitae pharetra lacinia, ligula massa mattis enim, quis mattis nisl lectus quis risus. In eu felis pharetra, auctor ipsum vitae, efficitur ante. Aliquam erat volutpat. Nulla rutrum egestas tortor eu ullamcorper. Cras egestas feugiat felis, in consectetur elit auctor ac. Sed malesuada aliquet sem, non condimentum purus vulputate semper. Donec accumsan interdum diam vel feugiat. Suspendisse augue ipsum, tincidunt non pulvinar eu, placerat at nibh.</p><p>Nam vel eros eu neque consequat laoreet. Integer a suscipit erat, ut venenatis ipsum. Praesent tortor ex, rutrum hendrerit arcu et, feugiat condimentum lectus. Fusce id nisi sed ligula lobortis efficitur id quis nisi. Suspendisse pulvinar quam et justo finibus dapibus. Pellentesque a suscipit nulla. Nulla interdum purus ac ligula imperdiet accumsan. Duis semper nunc sed est vehicula, et pellentesque lectus porttitor. Quisque id magna quis ipsum bibendum dapibus at quis massa. Nulla convallis tristique sapien, vitae tempus dui efficitur ac. Sed auctor gravida interdum. Donec pulvinar aliquam maximus. Suspendisse potenti. Ut egestas volutpat odio non egestas. Aliquam ac egestas nisi.</p><p>Ut vel diam non elit sagittis dapibus et et enim. Aliquam ornare ut ex et commodo. Mauris quam nisi, tempor sit amet dolor hendrerit, convallis aliquet enim. Fusce at enim ornare, pretium lorem ut, vestibulum purus. Morbi hendrerit placerat ex. Vivamus sit amet ultrices velit. Sed hendrerit arcu in faucibus sollicitudin.</p>",
                data: "2022-08-31",
                outros_post: [  //máximo 5 noticias
                    {
                        data: '2020-12-25',
                        titulo: 'Donec fringilla sodales pellentesque. Integer laoreet cursus efficitur',
                        slug: 'curabitur-lacus-ipsum-maximus-a-mollis-at-finibus-non-odio-nam-lacinia-eget-arcu-non-vestibulum'
                    },
                    {
                        data: '2020-12-25',
                        titulo: 'Aliquam erat volutpat. Cras velit odio, aliquam in mi at, fringilla sodales est',
                        slug: 'aliquam-erat-volutpat-cras-velit-odio-aliquam-in-mi-at-fringilla-sodales-est'
                    },
                    {
                        data: '2021-08-24',
                        titulo: 'Nam vel eros eu neque consequat laoreet. Integer a suscipit erat, ut venenatis',
                        slug: 'suspendisse-potenti-ut-egestas-volutpat-odio-non-egestas'
                    },

                ],

            }
        }
        return res.status(200).json(data)
    }
    if (slug == 'suspendisse-potenti-ut-egestas-volutpat-odio-non-egestas') {
        const data = {
            error: false,
            message: 'Sem erro',
            results: {
                imagem: {
                    url: "https://www.noticiasdemineracao.com/w-images/ed9601e7-cd82-4c06-a3e8-2496f520159c/2/HidroviasdoBrasil-768x475.jpg",
                    alt: "default image alt"
                },
                id: 1,
                slug: "suspendisse-potenti-ut-egestas-volutpat-odio-non-egestas",
                titulo: "Suspendisse potenti. Ut egestas volutpat odio non egestas",
                body: "<p>Vivamus sagittis eros nec erat ornare, ac mollis quam aliquam. Maecenas elementum id mauris ac porta. In ac arcu vel massa tincidunt venenatis. In ac neque risus. Aenean consequat, nisl at fringilla dictum, turpis lorem ultrices sapien, et consectetur libero est eget mauris. Proin ac odio varius, tincidunt ipsum at, bibendum magna. In iaculis eros non leo accumsan, vel ullamcorper orci euismod. Vivamus finibus risus dui, at volutpat velit sollicitudin maximus. In a justo et odio molestie imperdiet. Sed placerat turpis at velit viverra, et malesuada urna venenatis.</p><p>Sed convallis, augue quis auctor tempor, risus dolor tincidunt nisl, at vulputate ligula nisl vel eros. Aliquam varius, nulla sed vehicula efficitur, purus tellus imperdiet diam, et bibendum nulla quam in dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed cursus elit nunc, ac rhoncus ex maximus eu. Suspendisse pharetra, mauris vitae pharetra lacinia, ligula massa mattis enim, quis mattis nisl lectus quis risus. In eu felis pharetra, auctor ipsum vitae, efficitur ante. Aliquam erat volutpat. Nulla rutrum egestas tortor eu ullamcorper. Cras egestas feugiat felis, in consectetur elit auctor ac. Sed malesuada aliquet sem, non condimentum purus vulputate semper. Donec accumsan interdum diam vel feugiat. Suspendisse augue ipsum, tincidunt non pulvinar eu, placerat at nibh.</p><p>Nam vel eros eu neque consequat laoreet. Integer a suscipit erat, ut venenatis ipsum. Praesent tortor ex, rutrum hendrerit arcu et, feugiat condimentum lectus. Fusce id nisi sed ligula lobortis efficitur id quis nisi. Suspendisse pulvinar quam et justo finibus dapibus. Pellentesque a suscipit nulla. Nulla interdum purus ac ligula imperdiet accumsan. Duis semper nunc sed est vehicula, et pellentesque lectus porttitor. Quisque id magna quis ipsum bibendum dapibus at quis massa. Nulla convallis tristique sapien, vitae tempus dui efficitur ac. Sed auctor gravida interdum. Donec pulvinar aliquam maximus. Suspendisse potenti. Ut egestas volutpat odio non egestas. Aliquam ac egestas nisi.</p><p>Ut vel diam non elit sagittis dapibus et et enim. Aliquam ornare ut ex et commodo. Mauris quam nisi, tempor sit amet dolor hendrerit, convallis aliquet enim. Fusce at enim ornare, pretium lorem ut, vestibulum purus. Morbi hendrerit placerat ex. Vivamus sit amet ultrices velit. Sed hendrerit arcu in faucibus sollicitudin.</p>",
                data: "2022-08-31",
                outros_post: [  //máximo 5 noticias
                    {
                        data: '2020-12-25',
                        titulo: 'Donec fringilla sodales pellentesque. Integer laoreet cursus efficitur',
                        slug: 'curabitur-lacus-ipsum-maximus-a-mollis-at-finibus-non-odio-nam-lacinia-eget-arcu-non-vestibulum'
                    },
                    {
                        data: '2019-01-25',
                        titulo: 'Aliquam erat volutpat. Cras velit odio, aliquam in mi at, fringilla sodales est',
                        slug: 'aliquam-erat-volutpat-cras-velit-odio-aliquam-in-mi-at-fringilla-sodales-est'
                    },
                    {
                        data: '2020-12-25',
                        titulo: 'Nam vel eros eu neque consequat laoreet. Integer a suscipit erat, ut venenatis',
                        slug: 'suspendisse-potenti-ut-egestas-volutpat-odio-non-egestas'
                    },

                ],

            }
        }
        return res.status(200).json(data)
    }
    if (slug == 'sed-auctor-gravida-interdum-donec-pulvinar-aliquam-maximus') {
        const data = {
            error: false,
            message: 'Sem erro',
            results: {
                imagem: {
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbQjJ0_96IziOfTfx1mi97OaaxUhZnWN_Lj0QCZVMLP79-zmeLu27KsJX9TNXLOy5NEc&usqp=CAU",
                    alt: "default image alt"
                },
                id: 1,
                slug: "sed-auctor-gravida-interdum-donec-pulvinar-aliquam-maximus",
                titulo: "Sed auctor gravida interdum. Donec pulvinar aliquam maximus",
                body: "<p>Vivamus sagittis eros nec erat ornare, ac mollis quam aliquam. Maecenas elementum id mauris ac porta. In ac arcu vel massa tincidunt venenatis. In ac neque risus. Aenean consequat, nisl at fringilla dictum, turpis lorem ultrices sapien, et consectetur libero est eget mauris. Proin ac odio varius, tincidunt ipsum at, bibendum magna. In iaculis eros non leo accumsan, vel ullamcorper orci euismod. Vivamus finibus risus dui, at volutpat velit sollicitudin maximus. In a justo et odio molestie imperdiet. Sed placerat turpis at velit viverra, et malesuada urna venenatis.</p><p>Sed convallis, augue quis auctor tempor, risus dolor tincidunt nisl, at vulputate ligula nisl vel eros. Aliquam varius, nulla sed vehicula efficitur, purus tellus imperdiet diam, et bibendum nulla quam in dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed cursus elit nunc, ac rhoncus ex maximus eu. Suspendisse pharetra, mauris vitae pharetra lacinia, ligula massa mattis enim, quis mattis nisl lectus quis risus. In eu felis pharetra, auctor ipsum vitae, efficitur ante. Aliquam erat volutpat. Nulla rutrum egestas tortor eu ullamcorper. Cras egestas feugiat felis, in consectetur elit auctor ac. Sed malesuada aliquet sem, non condimentum purus vulputate semper. Donec accumsan interdum diam vel feugiat. Suspendisse augue ipsum, tincidunt non pulvinar eu, placerat at nibh.</p><p>Nam vel eros eu neque consequat laoreet. Integer a suscipit erat, ut venenatis ipsum. Praesent tortor ex, rutrum hendrerit arcu et, feugiat condimentum lectus. Fusce id nisi sed ligula lobortis efficitur id quis nisi. Suspendisse pulvinar quam et justo finibus dapibus. Pellentesque a suscipit nulla. Nulla interdum purus ac ligula imperdiet accumsan. Duis semper nunc sed est vehicula, et pellentesque lectus porttitor. Quisque id magna quis ipsum bibendum dapibus at quis massa. Nulla convallis tristique sapien, vitae tempus dui efficitur ac. Sed auctor gravida interdum. Donec pulvinar aliquam maximus. Suspendisse potenti. Ut egestas volutpat odio non egestas. Aliquam ac egestas nisi.</p><p>Ut vel diam non elit sagittis dapibus et et enim. Aliquam ornare ut ex et commodo. Mauris quam nisi, tempor sit amet dolor hendrerit, convallis aliquet enim. Fusce at enim ornare, pretium lorem ut, vestibulum purus. Morbi hendrerit placerat ex. Vivamus sit amet ultrices velit. Sed hendrerit arcu in faucibus sollicitudin.</p>",
                data: "2022-08-31",
                outros_post: [  //máximo 5 noticias
                    {
                        data: '2020-12-25',
                        titulo: 'Donec fringilla sodales pellentesque. Integer laoreet cursus efficitur',
                        slug: 'curabitur-lacus-ipsum-maximus-a-mollis-at-finibus-non-odio-nam-lacinia-eget-arcu-non-vestibulum'
                    },
                    {
                        data: '2019-01-25',
                        titulo: 'Aliquam erat volutpat. Cras velit odio, aliquam in mi at, fringilla sodales est',
                        slug: 'aliquam-erat-volutpat-cras-velit-odio-aliquam-in-mi-at-fringilla-sodales-est'
                    },
                    {
                        data: '2020-12-25',
                        titulo: 'Nam vel eros eu neque consequat laoreet. Integer a suscipit erat, ut venenatis',
                        slug: 'suspendisse-potenti-ut-egestas-volutpat-odio-non-egestas'
                    },

                ],

            }
        }
        return res.status(200).json(data)
    }
    if (slug == 'duis-semper-nunc-sed-est-vehicula-et-pellentesque-lectus-porttitor') {
        const data = {
            error: false,
            message: 'Sem erro',
            results: {
                imagem: {
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_iV_inbADQ0ArioaiLqSwc6QU9LBLbA8TbiON4iGUqTCP8yMOY4QX0zMdQwE4hf6dYKY&usqp=CAU",
                    alt: "default image alt"
                },
                id: 1,
                slug: "duis-semper-nunc-sed-est-vehicula-et-pellentesque-lectus-porttitor",
                titulo: "Duis semper nunc sed est vehicula, et pellentesque lectus porttitor",
                body: "<p>Vivamus sagittis eros nec erat ornare, ac mollis quam aliquam. Maecenas elementum id mauris ac porta. In ac arcu vel massa tincidunt venenatis. In ac neque risus. Aenean consequat, nisl at fringilla dictum, turpis lorem ultrices sapien, et consectetur libero est eget mauris. Proin ac odio varius, tincidunt ipsum at, bibendum magna. In iaculis eros non leo accumsan, vel ullamcorper orci euismod. Vivamus finibus risus dui, at volutpat velit sollicitudin maximus. In a justo et odio molestie imperdiet. Sed placerat turpis at velit viverra, et malesuada urna venenatis.</p><p>Sed convallis, augue quis auctor tempor, risus dolor tincidunt nisl, at vulputate ligula nisl vel eros. Aliquam varius, nulla sed vehicula efficitur, purus tellus imperdiet diam, et bibendum nulla quam in dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed cursus elit nunc, ac rhoncus ex maximus eu. Suspendisse pharetra, mauris vitae pharetra lacinia, ligula massa mattis enim, quis mattis nisl lectus quis risus. In eu felis pharetra, auctor ipsum vitae, efficitur ante. Aliquam erat volutpat. Nulla rutrum egestas tortor eu ullamcorper. Cras egestas feugiat felis, in consectetur elit auctor ac. Sed malesuada aliquet sem, non condimentum purus vulputate semper. Donec accumsan interdum diam vel feugiat. Suspendisse augue ipsum, tincidunt non pulvinar eu, placerat at nibh.</p><p>Nam vel eros eu neque consequat laoreet. Integer a suscipit erat, ut venenatis ipsum. Praesent tortor ex, rutrum hendrerit arcu et, feugiat condimentum lectus. Fusce id nisi sed ligula lobortis efficitur id quis nisi. Suspendisse pulvinar quam et justo finibus dapibus. Pellentesque a suscipit nulla. Nulla interdum purus ac ligula imperdiet accumsan. Duis semper nunc sed est vehicula, et pellentesque lectus porttitor. Quisque id magna quis ipsum bibendum dapibus at quis massa. Nulla convallis tristique sapien, vitae tempus dui efficitur ac. Sed auctor gravida interdum. Donec pulvinar aliquam maximus. Suspendisse potenti. Ut egestas volutpat odio non egestas. Aliquam ac egestas nisi.</p><p>Ut vel diam non elit sagittis dapibus et et enim. Aliquam ornare ut ex et commodo. Mauris quam nisi, tempor sit amet dolor hendrerit, convallis aliquet enim. Fusce at enim ornare, pretium lorem ut, vestibulum purus. Morbi hendrerit placerat ex. Vivamus sit amet ultrices velit. Sed hendrerit arcu in faucibus sollicitudin.</p>",
                data: "2022-08-31",
                outros_post: [  //máximo 5 noticias
                    {
                        data: '2020-12-25',
                        titulo: 'Donec fringilla sodales pellentesque. Integer laoreet cursus efficitur',
                        slug: 'curabitur-lacus-ipsum-maximus-a-mollis-at-finibus-non-odio-nam-lacinia-eget-arcu-non-vestibulum'
                    },
                    {
                        data: '2019-01-25',
                        titulo: 'Aliquam erat volutpat. Cras velit odio, aliquam in mi at, fringilla sodales est',
                        slug: 'aliquam-erat-volutpat-cras-velit-odio-aliquam-in-mi-at-fringilla-sodales-est'
                    },
                    {
                        data: '2020-12-25',
                        titulo: 'Nam vel eros eu neque consequat laoreet. Integer a suscipit erat, ut venenatis',
                        slug: 'suspendisse-potenti-ut-egestas-volutpat-odio-non-egestas'
                    },
                ],

            }
        }
        return res.status(200).json(data)
    }
    if (slug == 'curabitur-lacus-ipsum-maximus-a-mollis-at-finibus-non-odio-nam-lacinia-eget-arcu-non-vestibulumw') {
        const data = {
            error: false,
            message: 'Sem erro',
            results: {
                imagem: {
                    url: "https://atlantica-matapi-frontend.vercel.app/tmp/post_image_lg.png",
                    alt: "default image alt"
                },
                id: 1,
                slug: "curabitur-lacus-ipsum-maximus-a-mollis-at-finibus-non-odio-nam-lacinia-eget-arcu-non-vestibulumw",
                titulo: "Proin cursus vehicula aliquet. Curabitur hendrerit leo sit amet consequat egestas",
                body: "<p>Vivamus sagittis eros nec erat ornare, ac mollis quam aliquam. Maecenas elementum id mauris ac porta. In ac arcu vel massa tincidunt venenatis. In ac neque risus. Aenean consequat, nisl at fringilla dictum, turpis lorem ultrices sapien, et consectetur libero est eget mauris. Proin ac odio varius, tincidunt ipsum at, bibendum magna. In iaculis eros non leo accumsan, vel ullamcorper orci euismod. Vivamus finibus risus dui, at volutpat velit sollicitudin maximus. In a justo et odio molestie imperdiet. Sed placerat turpis at velit viverra, et malesuada urna venenatis.</p><p>Sed convallis, augue quis auctor tempor, risus dolor tincidunt nisl, at vulputate ligula nisl vel eros. Aliquam varius, nulla sed vehicula efficitur, purus tellus imperdiet diam, et bibendum nulla quam in dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed cursus elit nunc, ac rhoncus ex maximus eu. Suspendisse pharetra, mauris vitae pharetra lacinia, ligula massa mattis enim, quis mattis nisl lectus quis risus. In eu felis pharetra, auctor ipsum vitae, efficitur ante. Aliquam erat volutpat. Nulla rutrum egestas tortor eu ullamcorper. Cras egestas feugiat felis, in consectetur elit auctor ac. Sed malesuada aliquet sem, non condimentum purus vulputate semper. Donec accumsan interdum diam vel feugiat. Suspendisse augue ipsum, tincidunt non pulvinar eu, placerat at nibh.</p><p>Nam vel eros eu neque consequat laoreet. Integer a suscipit erat, ut venenatis ipsum. Praesent tortor ex, rutrum hendrerit arcu et, feugiat condimentum lectus. Fusce id nisi sed ligula lobortis efficitur id quis nisi. Suspendisse pulvinar quam et justo finibus dapibus. Pellentesque a suscipit nulla. Nulla interdum purus ac ligula imperdiet accumsan. Duis semper nunc sed est vehicula, et pellentesque lectus porttitor. Quisque id magna quis ipsum bibendum dapibus at quis massa. Nulla convallis tristique sapien, vitae tempus dui efficitur ac. Sed auctor gravida interdum. Donec pulvinar aliquam maximus. Suspendisse potenti. Ut egestas volutpat odio non egestas. Aliquam ac egestas nisi.</p><p>Ut vel diam non elit sagittis dapibus et et enim. Aliquam ornare ut ex et commodo. Mauris quam nisi, tempor sit amet dolor hendrerit, convallis aliquet enim. Fusce at enim ornare, pretium lorem ut, vestibulum purus. Morbi hendrerit placerat ex. Vivamus sit amet ultrices velit. Sed hendrerit arcu in faucibus sollicitudin.</p>",
                data: "2022-08-31",
                outros_post: [  //máximo 5 noticias
                    {
                        data: '2020-12-25',
                        titulo: 'Donec fringilla sodales pellentesque. Integer laoreet cursus efficitur',
                        slug: 'curabitur-lacus-ipsum-maximus-a-mollis-at-finibus-non-odio-nam-lacinia-eget-arcu-non-vestibulum'
                    },
                    {
                        data: '2019-01-25',
                        titulo: 'Aliquam erat volutpat. Cras velit odio, aliquam in mi at, fringilla sodales est',
                        slug: 'aliquam-erat-volutpat-cras-velit-odio-aliquam-in-mi-at-fringilla-sodales-est'
                    },
                    {
                        data: '2020-12-25',
                        titulo: 'Nam vel eros eu neque consequat laoreet. Integer a suscipit erat, ut venenatis',
                        slug: 'suspendisse-potenti-ut-egestas-volutpat-odio-non-egestas'
                    },
                ],

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




