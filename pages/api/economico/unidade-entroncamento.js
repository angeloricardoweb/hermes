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
                url: 'https://api-temp.vercel.app/economico/unidades/entroncamento/img1.jpg'
            },
            {
                id: 2,
                url: 'https://api-temp.vercel.app/economico/unidades/entroncamento/img2.jpg'
            },
            {
                id: 3,
                url: 'https://api-temp.vercel.app/economico/unidades/entroncamento/img3.jpg'
            },
            {
                id: 4,
                url: 'https://api-temp.vercel.app/economico/unidades/entroncamento/img4.jpg'
            },
            {
                id: 5,
                url: 'https://api-temp.vercel.app/economico/unidades/entroncamento/img4.jpg'
            },
            {
                id: 6,
                url: 'https://api-temp.vercel.app/economico/unidades/entroncamento/img6.jpg'
            },
            {
                id: 7,
                url: 'https://api-temp.vercel.app/economico/unidades/entroncamento/img7.jpg'
            },
            {
                id: 8,
                url: 'https://api-temp.vercel.app/economico/unidades/entroncamento/img8.jpg'
            },
            {
                id: 9,
                url: 'https://api-temp.vercel.app/economico/unidades/entroncamento/img9.jpg'
            },
            {
                id: 10,
                url: 'https://api-temp.vercel.app/economico/unidades/entroncamento/img10.jpg'
            },
            {
                id: 11,
                url: 'https://api-temp.vercel.app/economico/unidades/entroncamento/img11.jpg'
            },
            {
                id: 12,
                url: 'https://api-temp.vercel.app/economico/unidades/entroncamento/img12.jpg'
            },
            {
                id: 13,
                url: 'https://api-temp.vercel.app/economico/unidades/entroncamento/img13.jpg'
            },
            {
                id: 14,
                url: 'https://api-temp.vercel.app/economico/unidades/entroncamento/img14.jpg'
            },
            {
                id: 15,
                url: 'https://api-temp.vercel.app/economico/unidades/entroncamento/img15.jpg'
            },
            {
                id: 16,
                url: 'https://api-temp.vercel.app/economico/unidades/entroncamento/img16.jpg'
            },
            {
                id: 17,
                url: 'https://api-temp.vercel.app/economico/unidades/entroncamento/img17.jpg'
            },
            {
                id: 18,
                url: 'https://api-temp.vercel.app/economico/unidades/entroncamento/img18.jpg'
            },
            {
                id: 19,
                url: 'https://api-temp.vercel.app/economico/unidades/entroncamento/img19.jpg'
            },
            {
                id: 20,
                url: 'https://api-temp.vercel.app/economico/unidades/entroncamento/img20.jpg'
            },
            {
                id: 21,
                url: 'https://api-temp.vercel.app/economico/unidades/entroncamento/img21.jpg'
            },
            {
                id: 22,
                url: 'https://api-temp.vercel.app/economico/unidades/entroncamento/img22.jpg'
            },
            {
                id: 23,
                url: 'https://api-temp.vercel.app/economico/unidades/entroncamento/img23.jpg'
            },
            {
                id: 24,
                url: 'https://api-temp.vercel.app/economico/unidades/entroncamento/img24.jpg'
            },
            {
                id: 25,
                url: 'https://api-temp.vercel.app/economico/unidades/entroncamento/img25.jpg'
            },
            {
                id: 26,
                url: 'https://api-temp.vercel.app/economico/unidades/entroncamento/img26.jpg'
            },
        ]
    }

    res.status(200).json(data)
}
