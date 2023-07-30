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
        data: [
            {
                id: 1,
                consignataria: '1032 - Caixa Econômica',
                situacao: 'Quitada por migração',
                ade: '6311674',
                servico: 'Empréstimo',
                doc: 'https://api-temp.vercel.app/temp/doc/example.pdf',
            },
            {
                id: 2,
                consignataria: '1032 - Caixa Econômica',
                situacao: 'Quitada por migração',
                ade: '6311674',
                servico: 'Empréstimo',
                doc: 'https://api-temp.vercel.app/temp/doc/example.pdf',
            },
        ]
    }

    res.status(200).json(data)
}
