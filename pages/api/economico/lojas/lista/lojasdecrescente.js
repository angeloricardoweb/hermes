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
        // A -> Z (Ordem alfabética)
        lojasdecrescente: [
            {
                id: 1,
                nome: 'Unidade Jurunas',
                slug: 'unidade-jurunas',
                img_fachada: '/img/lojas/jurunas.jpg',
            },
            {
                id: 2,
                nome: 'Unidade Umarizal',
                slug: 'unidade-umarizal',
                img_fachada: '/img/lojas/umarizal.jpg',
            },
            {
                id: 3,
                nome: 'Unidade Pedreira',
                slug: 'unidade-pedreira',
                img_fachada: '/img/lojas/pedreira.jpg',
            },
            {
                id: 4,
                nome: 'Unidade Coqueiro',
                slug: 'unidade-coqueiro',
                img_fachada: '/img/lojas/coqueiro.jpg',
            },
            {
                id: 5,
                nome: 'Unidade Castanheira',
                slug: 'unidade-castanheira',
                img_fachada: '/img/lojas/castanheira.jpg',
            },

        ]
    }

    res.status(200).json(data)
}
