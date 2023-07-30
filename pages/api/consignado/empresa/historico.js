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
        message: 'Sem erros - Avisos da area da empresa',
        historico: [
            {
                "id": "1",
                "date": "2022-04-21T14:30:00",
                "tipo": "Cadastro de servidores",
                'link_baixar': '/example/doc.pdf'
            },
            {
                "id": "2",
                "date": "2022-03-10T15:00:00",
                "tipo": "Cadastro de financeiro",
                'link_baixar': '/example/doc.pdf'
            },
        ]
    }

    res.status(200).json(data)
}
