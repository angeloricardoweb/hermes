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
                url: 'https://api-temp.vercel.app/economico/unidades/jurunas/img1.jpg'
            },
            {
                id: 2,
                url: 'https://api-temp.vercel.app/economico/unidades/jurunas/img2.jpg'
            },
            {
                id: 3,
                url: 'https://api-temp.vercel.app/economico/unidades/jurunas/img3.jpg'
            },
            {
                id: 4,
                url: 'https://api-temp.vercel.app/economico/unidades/jurunas/img4.jpg'
            },
            {
                id: 5,
                url: 'https://api-temp.vercel.app/economico/unidades/jurunas/img5.jpg'
            },
            {
                id: 6,
                url: 'https://api-temp.vercel.app/economico/unidades/jurunas/img6.jpg'
            },
            {
                id: 7,
                url: 'https://api-temp.vercel.app/economico/unidades/jurunas/img7.jpg'
            },
            {
                id: 8,
                url: 'https://api-temp.vercel.app/economico/unidades/jurunas/img8.jpg'
            },
            {
                id: 9,
                url: 'https://api-temp.vercel.app/economico/unidades/jurunas/img9.jpg'
            },
            {
                id: 10,
                url: 'https://api-temp.vercel.app/economico/unidades/jurunas/img10.jpg'
            },
        ]
    }

    res.status(200).json(data)
}
