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
        galeria: [
            {
                id: 1,
                url: 'https://api-temp.vercel.app/economico/Imagem6.jpg'
            },
            {
                id: 2,
                url: 'https://api-temp.vercel.app/economico/Imagem7.jpg'
            },
            {
                id: 3,
                url: 'https://api-temp.vercel.app/economico/Imagem8.jpg'
            },
        ]
    }

    res.status(200).json(data)
}
