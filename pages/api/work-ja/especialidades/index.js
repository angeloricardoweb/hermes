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
            especialidades:
                [
                    { 
                        id: 1, 
                        titulo: 'Pintor' 
                    },
                    { 
                        id: 2, 
                        titulo: 'Suporte em Informática' 
                    },
                    { 
                        id: 3, 
                        titulo: 'Secretário' 
                    },
                    { 
                        id: 4, 
                        titulo: 'Pedreiro' 
                    },
                    { 
                        id: 5, 
                        titulo: 'Marceneiro' 
                    }
                ]
        }
    }

    res.status(200).json(data)
}
