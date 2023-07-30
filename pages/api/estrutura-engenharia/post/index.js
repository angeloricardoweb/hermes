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
        results: {

            posts: [
                {
                    id: 1,
                    titulo: 'Proin cursus vehicula aliquet. Curabitur hendrerit leo sit amet consequat egestas',
                    slug: 'proin-cursus-vehicula-aliquet-curabitur-hendrerit-leo-sit-amet-consequat-egestas',
                    data: '2021-12-25',
                    thumbnail: {
                        alt: 'default image alt',
                        url: 'https://estrutura-engenharia-frontend.vercel.app/img/blog-lg-photo1.webp'
                    }
                },
                {
                    id: 2,
                    titulo: 'Donec fringilla sodales pellentesque. Integer laoreet cursus efficitur',
                    slug: 'donec-fringilla-sodales-pellentesque-integer-laoreet-cursus-efficitur',
                    data: '2022-09-22',
                    thumbnail: {
                        alt: 'default image alt',
                        url: 'https://estrutura-engenharia-frontend.vercel.app/img/blog-photo-2.webp'
                    }
                },
                {
                    id: 3,
                    titulo: 'Aliquam erat volutpat. Cras velit odio, aliquam in mi at, fringilla sodales est',
                    slug: 'aliquam-erat-volutpat-cras-velit-odio-aliquam-in-mi-at-fringilla-sodales-est',
                    data: '2022-09-01',
                    thumbnail: {
                        alt: 'default image alt',
                        url: 'https://estrutura-engenharia-frontend.vercel.app/img/blog-photo-3.webp'
                    }
                },
                {
                    id: 4,
                    titulo: 'Suspendisse potenti. Ut egestas volutpat odio non egestas',
                    slug: 'suspendisse-potenti-ut-egestas-volutpat-odio-non-egestas',
                    data: '2008-12-01',
                    thumbnail: {
                        alt: 'default image alt',
                        url: 'https://estrutura-engenharia-frontend.vercel.app/img/blog-photo-4.webp'
                    }
                },

            ],
            outros_post: [  //máximo 5 noticias
                {
                    data: '2020-12-25',
                    titulo: 'Donec fringilla sodales pellentesque. Integer laoreet cursus efficitur',
                    slug: 'curabitur-lacus-ipsum-maximus-a-mollis-at-finibus-non-odio-nam-lacinia-eget-arcu-non-vestibulum'
                },
                {
                    data: '2019-01-25',
                    titulo: 'Aliquam erat volutpat. Cras velit odio, aliquam in mi at, fringilla sodales est',
                    slug: 'aliquam-erat-volutpat-cras-velit-odio-aliquam-in-mi-at-fringilla-sodales-est'
                },
                {
                    data: '2020-12-25',
                    titulo: 'Nam vel eros eu neque consequat laoreet. Integer a suscipit erat, ut venenatis',
                    slug: 'nam-vel-eros-eu-neque-consequat-laoreet-integer-a-suscipit-erat-ut-venenatis'
                },
                {
                    data: '2020-12-25',
                    titulo: 'sed-auctor-gravida-interdum-donec-pulvinar-aliquam-maximus',
                    slug: 'sed-auctor-gravida-interdum-donec-pulvinar-aliquam-maximus'
                },
            ],

        }

    }
    res.status(200).json(data)
}
