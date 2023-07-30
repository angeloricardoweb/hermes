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
                pergunta: 'O QUE É UMA SIMULAÇÃO?',
                resposta: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium nihil dignissimos eos nam voluptatem harum nobis suscipit, deserunt, in fugit debitis corporis! Ducimus impedit nihil excepturi sit facere consequatur qui?',
            },
            {
                id: 2,
                pergunta: 'O QUE É UMA SIMULAÇÃO?',
                resposta: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium nihil dignissimos eos nam voluptatem harum nobis suscipit, deserunt, in fugit debitis corporis! Ducimus impedit nihil excepturi sit facere consequatur qui?',
            },
            {
                id: 3,
                pergunta: 'O QUE É UMA SIMULAÇÃO?',
                resposta: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium nihil dignissimos eos nam voluptatem harum nobis suscipit, deserunt, in fugit debitis corporis! Ducimus impedit nihil excepturi sit facere consequatur qui?',
            },
        ]
    }

    res.status(200).json(data)
}
