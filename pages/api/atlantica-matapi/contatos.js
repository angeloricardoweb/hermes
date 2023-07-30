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
            escritorios: [
                {
                    filial: 'Escritório Belém',
                    telefone: '+55(91)3229-1807'
                },
                {
                    filial: 'Escritório Barcarena',
                    telefone: '+55(91)3229-1807'
                }
            ],
            emails: [
                'contato@atlanticamatapi.com.br',
                'vendas@atlanticamatapi.com.br',
                'juridico@atlanticamatapi.com.br',
                'marketing@atlanticamatapi.com.br'
            ]
        }
    }

    res.status(200).json(data)
}
