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
        data: [
            {
                id: 63413,
                data: '2022-07-27T11:50:48.709Z',
                status: 'Entregue',
                prazo: '4 dias',
                valor: 300,
                parcelamento: 3,
            },
            {
                id: 98723,
                data: '2022-07-27T11:50:48.709Z',
                status: 'Em andamento',
                prazo: 'Receber na loja',
                valor: 300,
                parcelamento: 5,
            },
            {
                id: 12440,
                data: '2022-07-27T11:50:48.709Z',
                status: 'Finalizado',
                prazo: 'Aguardando pagamento',
                valor: 300,
                parcelamento: 4,
            },

        ]
    }

    res.status(200).json(data)
}
