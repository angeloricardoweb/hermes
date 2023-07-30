import NextCors from 'nextjs-cors';

export default async function handler(req, res) {

    const { slug } = req.query;
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    if (slug == 'sustentabilidade') {
        const data = {
            error: false,
            message: 'Sem erro',
            results: {
                imagem_url: "https://estrutura-engenharia-frontend.vercel.app/img/blog-post-image.png",
                alt: "default image alt",
                id: 1,
                slug: 'sustentabilidade',
                titulo: 'SUSTENTABILIDADE',
                resumo: '"<p>Vivamus sagittis eros nec erat ornare, ac mollis quam aliquam. Maecenas elementum id mauris ac porta. In ac arcu vel massa tincidunt venenatis. In ac neque risus. Aenean consequat, nisl at fringilla dictum, turpis lorem ultrices sapien, et consectetur libero est eget mauris. Proin ac odio varius, tincidunt ipsum at, bibendum magna. In iaculis eros non leo accumsan, vel ullamcorper orci euismod. Vivamus finibus risus dui, at volutpat velit sollicitudin maximus. In a justo et odio molestie imperdiet. Sed placerat turpis at velit viverra, et malesuada urna venenatis.</p>',
                texto: "<p>Vivamus sagittis eros nec erat ornare, ac mollis quam aliquam. Maecenas elementum id mauris ac porta. In ac arcu vel massa tincidunt venenatis. In ac neque risus. Aenean consequat, nisl at fringilla dictum, turpis lorem ultrices sapien, et consectetur libero est eget mauris. Proin ac odio varius, tincidunt ipsum at, bibendum magna. In iaculis eros non leo accumsan, vel ullamcorper orci euismod. Vivamus finibus risus dui, at volutpat velit sollicitudin maximus. In a justo et odio molestie imperdiet. Sed placerat turpis at velit viverra, et malesuada urna venenatis.</p><p>Sed convallis, augue quis auctor tempor, risus dolor tincidunt nisl, at vulputate ligula nisl vel eros. Aliquam varius, nulla sed vehicula efficitur, purus tellus imperdiet diam, et bibendum nulla quam in dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed cursus elit nunc, ac rhoncus ex maximus eu. Suspendisse pharetra, mauris vitae pharetra lacinia, ligula massa mattis enim, quis mattis nisl lectus quis risus. In eu felis pharetra, auctor ipsum vitae, efficitur ante. Aliquam erat volutpat. Nulla rutrum egestas tortor eu ullamcorper. Cras egestas feugiat felis, in consectetur elit auctor ac. Sed malesuada aliquet sem, non condimentum purus vulputate semper. Donec accumsan interdum diam vel feugiat. Suspendisse augue ipsum, tincidunt non pulvinar eu, placerat at nibh.</p><p>Nam vel eros eu neque consequat laoreet. Integer a suscipit erat, ut venenatis ipsum. Praesent tortor ex, rutrum hendrerit arcu et, feugiat condimentum lectus. Fusce id nisi sed ligula lobortis efficitur id quis nisi. Suspendisse pulvinar quam et justo finibus dapibus. Pellentesque a suscipit nulla. Nulla interdum purus ac ligula imperdiet accumsan. Duis semper nunc sed est vehicula, et pellentesque lectus porttitor. Quisque id magna quis ipsum bibendum dapibus at quis massa. Nulla convallis tristique sapien, vitae tempus dui efficitur ac. Sed auctor gravida interdum. Donec pulvinar aliquam maximus. Suspendisse potenti. Ut egestas volutpat odio non egestas. Aliquam ac egestas nisi.</p><p>Ut vel diam non elit sagittis dapibus et et enim. Aliquam ornare ut ex et commodo. Mauris quam nisi, tempor sit amet dolor hendrerit, convallis aliquet enim. Fusce at enim ornare, pretium lorem ut, vestibulum purus. Morbi hendrerit placerat ex. Vivamus sit amet ultrices velit. Sed hendrerit arcu in faucibus sollicitudin.</p>",
                data: "2022/08/31",
                editoria: "editoria 1",
                outros_post: [  //máximo 5 noticias
                    {
                        data: '2022/08/22',
                        titulo: 'Donec fringilla sodales pellentesque. Integer laoreet cursus efficitur',
                        slug: 'curabitur-lacus-ipsum-maximus-a-mollis-at-finibus-non-odio-nam-lacinia-eget-arcu-non-vestibulum',
                        imagem_url: "https://estrutura-engenharia-frontend.vercel.app/img/blog-post-image.png",
                        editoria: "editoria 1"
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
