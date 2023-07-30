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
                valor: 'R$ 1.000,00',
            },
            {
                id: 98723,
                data: '2022-07-27T11:50:48.709Z',
                status: 'Em andamento',
                prazo: 'Receber na loja',
                valor: 'R$ 1.000,00',
            },
            {
                id: 12440,
                data: '2022-07-27T11:50:48.709Z',
                status: 'Finalizado',
                prazo: 'Aguardando pagamento',
                valor: 'R$ 1.000,00',
            },

        ]
    }

    res.status(200).json(data)
}
