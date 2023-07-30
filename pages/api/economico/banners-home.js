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
        banners: [
        {
            id: 1,
            title: 'segunda-feira',
            image: '/img/temporary/segunda.png'
        },
        {
            id: 3,
            title: 'quarta-feira',
            image: '/img/temporary/quarta.png'
        },
        {
            id: 4,
            title: 'quinta-feira',
            image: '/img/temporary/quinta.png'
        },
        
        ]
    }

    res.status(200).json(data)
}
