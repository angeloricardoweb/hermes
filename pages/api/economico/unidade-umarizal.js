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
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img1.jpg'
            },
            {
                id: 2,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img2.jpg'
            },
            {
                id: 3,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img3.jpg'
            },
            {
                id: 4,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img4.jpg'
            },
            {
                id: 5,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img4.jpg'
            },
            {
                id: 6,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img6.jpg'
            },
            {
                id: 7,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img7.jpg'
            },
            {
                id: 8,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img8.jpg'
            },
            {
                id: 9,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img9.jpg'
            },
            {
                id: 10,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img10.jpg'
            },
            {
            id: 11,
            url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img11.jpg'
            },
            {
                id: 12,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img12.jpg'
            },
            {
                id: 13,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img13.jpg'
            },
            {
                id: 14,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img14.jpg'
            },
            {
                id: 15,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img15.jpg'
            },
            {
                id: 16,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img16.jpg'
            },
            {
                id: 17,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img17.jpg'
            },
            {
                id: 18,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img18.jpg'
            },
            {
                id: 19,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img19.jpg'
            },
            {
                id: 20,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img20.jpg'
            },
            {
                id: 21,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img21.jpg'
            },
            {
                id: 22,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img22.jpg'
            },
            {
                id: 23,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img23.jpg'
            },
            {
                id: 24,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img24.jpg'
            },
            {
                id: 25,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img25.jpg'
            },
            {
                id: 26,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img26.jpg'
            },
            {
                id: 27,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img27.jpg'
            },
            {
                id: 28,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img28.jpg'
            },
            {
                id: 29,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img29.jpg'
            },
            {
                id: 30,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img30.jpg'
            },
            {
            id: 31,
            url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img31.jpg'
            },
            {
                id: 33,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img33.jpg'
            },
            {
                id: 33,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img33.jpg'
            },
            {
                id: 34,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img34.jpg'
            },
            {
                id: 35,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img35.jpg'
            },
            {
                id: 36,
                url: 'https://api-temp.vercel.app/economico/unidades/umarizal/img36.jpg'
            },
        ]
    }

    res.status(200).json(data)
}
