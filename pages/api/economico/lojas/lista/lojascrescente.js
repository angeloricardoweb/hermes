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
        // Z -> A (Ordem alfabética)
        lojascrescente: [
            {
                id: 1,
                slug: 'unidade-jurunas',
                nome: 'Unidade Jurunas',
                img_fachada: '/img/lojas/jurunas.jpg',
            },
            {
                id: 2,
                slug: 'unidade-umarizal',
                nome: 'Unidade Umarizal',
                img_fachada: '/img/lojas/umarizal.jpg',
            },
            {
                id: 3,
                slug: 'unidade-pedreira',
                nome: 'Unidade Pedreira',
                img_fachada: '/img/lojas/pedreira.jpg',
            },
            {
                id: 4,
                slug: 'unidade-coqueiro',
                nome: 'Unidade Coqueiro',
                img_fachada: '/img/lojas/coqueiro.jpg',
            },
            {
                id: 5,
                slug: 'unidade-castanheira',
                nome: 'Unidade Castanheira',
                img_fachada: '/img/lojas/castanheira.jpg',
            },

        ]
    }

    res.status(200).json(data)
}
