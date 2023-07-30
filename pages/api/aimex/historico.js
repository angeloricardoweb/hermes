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
        historico: [
            {
                id: 1,
                ano: '1971',
                acontecimento: 'Fundação da Aimex.',
                image: 'https://aimex-frontend.vercel.app/temp/historico/1971.png',
            },
            {
                id: 2,
                ano: '1989',
                acontecimento: 'Aimex lidera luta a nível nacional, para proibição da exportação de madeira em tora oriunda de florestas nativas',
                image: 'https://aimex-frontend.vercel.app/temp/historico/1989.png',
            },
            {
                id: 3,
                ano: '1992',
                acontecimento: 'Realização da 1ª Feira de Máquinas do Setor Madeireiro e o Congresso Internacional de Compensados e Madeira Tropical, com o objetivo de fomentar e divulgar a atividade econômica do setor produtivo.',
                image: 'https://aimex-frontend.vercel.app/temp/historico/1992.png',
            },
            {
                id: 4,
                ano: '1997',
                acontecimento: 'Criação do Laboratório de Sementes e Mudas, que atuou de forma decisiva para a recuperação de áreas degradadas e desenvolvimento de florestas plantadas na Amazônia.',
                image: 'https://aimex-frontend.vercel.app/temp/historico/1997.png',
            },
            {
                id: 5,
                ano: '2002',
                acontecimento: 'Aimex participa ativamente da criação da Lei Florestal do Pará.',
                image: '/temp/historico/2002.png',
            },
            {
                id: 6,
                ano: '2006',
                acontecimento: 'Criada a Lei de Concessões Florestais no Pará, com participação decisiva da Aimex.',
                image: '/temp/historico/2006.png',
            },
            {
                id: 7,
                ano: '2008',
                acontecimento: 'Aimex propõe e assina o Pacto pela Madeira Legal e Sustentável, junto ao Ministério do Meio Ambiente e diversas outras instituições.',
                image: '/temp/historico/2008.png',
            },
            {
                id: 8,
                ano: '2012',
                acontecimento: 'Lançamento do Novo Código Florestal',
                image: '/temp/historico/2012.png',
            },
            {
                id: 9,
                ano: '2021',
                acontecimento: '40 anos da Aimex.',
                image: '/temp/historico/2021.png',
            },
            {
                id: 10,
                ano: '2021',
                acontecimento: 'Aimex lança nova marca e atualiza sua identidade visual.',
                image: '/temp/historico/2021-2.png',
            },
            {
                id: 11,
                ano: '2022',
                acontecimento: 'Aimex inova e monta ‘Casa de Madeira’ na Feira da Indústria',
                image: '/temp/historico/2022.png',
            },
            {
                id: 12,
                ano: '2022',
                acontecimento: 'Lançamento da Verificação de Transparência de Origem (VTO)',
                image: '/temp/historico/2022-vto.png',
            },

        ]
    }

    res.status(200).json(data)
}
