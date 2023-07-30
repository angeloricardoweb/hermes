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
        imagens: [
            {
                id: 1,
                url: 'https://api-temp.vercel.app/economico/unidades/pedreira/img1.jpg'
            },
            {
                id: 2,
                url: 'https://api-temp.vercel.app/economico/unidades/pedreira/img2.jpg'
            },
            {
                id: 3,
                url: 'https://api-temp.vercel.app/economico/unidades/pedreira/img3.jpg'
            },
            {
                id: 4,
                url: 'https://api-temp.vercel.app/economico/unidades/pedreira/img4.jpg'
            },
            {
                id: 5,
                url: 'https://api-temp.vercel.app/economico/unidades/pedreira/img4.jpg'
            },
            {
                id: 6,
                url: 'https://api-temp.vercel.app/economico/unidades/pedreira/img6.jpg'
            },
            {
                id: 7,
                url: 'https://api-temp.vercel.app/economico/unidades/pedreira/img7.jpg'
            },
            {
                id: 8,
                url: 'https://api-temp.vercel.app/economico/unidades/pedreira/img8.jpg'
            },
            {
                id: 9,
                url: 'https://api-temp.vercel.app/economico/unidades/pedreira/img9.jpg'
            },
            {
                id: 10,
                url: 'https://api-temp.vercel.app/economico/unidades/pedreira/img10.jpg'
            },
            {
                id: 11,
                url: 'https://api-temp.vercel.app/economico/unidades/pedreira/img11.jpg'
            },
            {
                id: 12,
                url: 'https://api-temp.vercel.app/economico/unidades/pedreira/img12.jpg'
            },
            {
                id: 13,
                url: 'https://api-temp.vercel.app/economico/unidades/pedreira/img13.jpg'
            },
            {
                id: 14,
                url: 'https://api-temp.vercel.app/economico/unidades/pedreira/img14.jpg'
            },
            {
                id: 15,
                url: 'https://api-temp.vercel.app/economico/unidades/pedreira/img15.jpg'
            },
            {
                id: 16,
                url: 'https://api-temp.vercel.app/economico/unidades/pedreira/img16.jpg'
            },
            {
                id: 17,
                url: 'https://api-temp.vercel.app/economico/unidades/pedreira/img17.jpg'
            },
        ]
    }

    res.status(200).json(data)
}
