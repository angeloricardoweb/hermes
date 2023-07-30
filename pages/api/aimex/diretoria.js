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
        diretoria: [
            {
                id: 1,
                nome: 'Eduardo Leão',
                cargo: 'Presidente',
                image: 'https://aimex-frontend.vercel.app/img/diretoria/eduardo-leao.png',
            },
            {
                id: 2,
                nome: 'Leandro Rimsza',
                cargo: 'Vice-Presidente',
                image: 'https://aimex-frontend.vercel.app/img/diretoria/fallback.png',
            },
            {
                id: 3,
                nome: 'Leônidas Ernesto de Souza',
                cargo: 'Diretor Financeiro',
                image: 'https://aimex-frontend.vercel.app/img/diretoria/leonidas-ernesto.png',
            },
            {
                id: 4,
                nome: 'Antônio Pagliari',
                cargo: 'Vice-Diretor Financeiro',
                image: 'https://aimex-frontend.vercel.app/img/diretoria/antonio-pagliari.png',
            },
            {
                id: 5,
                nome: 'Deryck Martins',
                cargo: 'Diretor Técnico',
                image: 'https://aimex-frontend.vercel.app/img/diretoria/deryck-martins.png',
            },
            {
                id: 6,
                nome: 'Guilherme Carvalho',
                cargo: 'Consultor Técnico',
                image: 'https://aimex-frontend.vercel.app/img/diretoria/guilherme-carvalho.png',
            },
            {
                id: 7,
                nome: 'Edilene Pacheco',
                cargo: 'Secretária Executiva',
                image: 'https://aimex-frontend.vercel.app/img/diretoria/edilene-pacheco.png',
            },
            {
                id: 8,
                nome: 'Rui Leal',
                cargo: 'Secretário Financeiro',
                image: 'https://aimex-frontend.vercel.app/img/diretoria/rui-leal.png',
            },

        ]
    }

    res.status(200).json(data)
}
