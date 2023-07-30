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
        noticiasrecentes: [
            {
                id: 1,
                titulo: 'Novidades no Horti da unidade Umarizal',
                data_post: '03/08/2022',
                img_detaque: '/img/noticias/noticia1.jpg',
            },
            {
                id: 2,
                titulo: 'Novidades no Horti da unidade Umarizal',
                data_post: '10/07/2022',
                img_detaque: '/img/noticias/noticia1.jpg',
            },
            {
                id: 3,
                titulo: 'Novidades no Horti da unidade Umarizal',
                data_post: '09/07/2022',
                img_detaque: '/img/noticias/noticia1.jpg',
            },
            {
                id: 4,
                titulo: 'Novidades no Horti da unidade Umarizal',
                data_post: '08/07/2022',
                img_detaque: '/img/noticias/noticia1.jpg',
            },
            {
                id: 5,
                titulo: 'Novidades no Horti da unidade Umarizal',
                data_post: '01/07/2022',
                img_detaque: '/img/noticias/noticia1.jpg',
            },

        ]
    }

    res.status(200).json(data)
}
