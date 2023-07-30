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
            categorias:
                [
                    {
                        id: 1,
                        title: 'Casa',
                        icone: 'https://api-temp.vercel.app/santa-dica/categorias/casa.png',
                        background: '#FDA398',
                        subcategorias: [
                            {
                                id: 1,
                                title: 'sub-casa 1'
                            },
                            {
                                id: 2,
                                title: 'sub-casa 2'
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: 'Kids',
                        icone: 'https://api-temp.vercel.app/santa-dica/categorias/kids.png',
                        background: '#C1D898',
                        subcategorias: [
                            {
                                id: 3,
                                title: 'sub-kids 1'
                            },
                            {
                                id: 4,
                                title: 'sub-kids 2'
                            },
                        ],
                    },
                    {
                        id: 3,
                        title: 'Pet',
                        icone: 'https://api-temp.vercel.app/santa-dica/categorias/pet.png',
                        background: '#ABDDE9',
                        subcategorias: [
                            {
                                id: 5,
                                title: 'sub-pet 1'
                            },
                            {
                                id: 6,
                                title: 'sub-pet 2'
                            },
                        ],
                    },
                    {
                        id: 4,
                        title: 'Moda',
                        icone: 'https://api-temp.vercel.app/santa-dica/categorias/moda.png',
                        background: '#98ABDC',
                        subcategorias: [
                            {
                                id: 7,
                                title: 'sub-moda 1'
                            },
                            {
                                id: 8,
                                title: 'sub-moda 2'
                            },
                        ],
                    },
                    {
                        id: 5,
                        title: 'Passeio',
                        icone: 'https://api-temp.vercel.app/santa-dica/categorias/passeio.png',
                        background: '#C7A3EA',
                        subcategorias: [
                            {
                                id: 9,
                                title: 'sub-passeio 1'
                            },
                            {
                                id: 10,
                                title: 'sub-passeio 2'
                            },
                        ],
                    },
                    {
                        id: 6,
                        title: 'Festa',
                        icone: 'https://api-temp.vercel.app/santa-dica/categorias/festa.png',
                        background: '#FECB84',
                        subcategorias: [
                            {
                                id: 11,
                                title: 'sub-festa 1'
                            },
                            {
                                id: 12,
                                title: 'sub-festa 2'
                            },
                        ],
                    },
                ]
        }
    }

    res.status(200).json(data)
}
