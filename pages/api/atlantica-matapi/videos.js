import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
    const params = req.query;

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
            videos: [
                {
                    id: 1,
                    url_video: 'https://www.youtube.com/watch?v=dKEMi5YilSM',
                    titulo: 'Apresentamos o Grupo Matapi'
                },
                {
                    id: 2,
                    url_video: 'https://www.youtube.com/watch?v=Jx8EGuwcWwU',
                    titulo: 'Locação de Equipamentos Portuários'
                },
                {
                    id: 3,
                    url_video: 'https://www.youtube.com/watch?v=9mlUL_Of-RI',
                    titulo: 'Operação de Gergelim em big bags'
                },
                {
                    id: 4,
                    url_video: 'https://www.youtube.com/watch?v=Jx8EGuwcWwU',
                    titulo: 'Conheça a Matapi'
                },

            ]
        }
    }


    res.status(200).json(data)
}
