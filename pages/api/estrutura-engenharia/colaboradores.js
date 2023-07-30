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
            employees: [
                {
                    id: 1,
                    nome: 'Antonio Carlos',
                    cargo: 'CEO',
                    url_image: 'https://estrutura-engenharia-frontend.vercel.app/img/people-5.webp',
                    alt: 'foto de perfil de antonio carlos'
                },
                {
                    id: 2,
                    nome: 'Paula Mendes',
                    cargo: 'Diretora Comercial',
                    url_image: 'https://estrutura-engenharia-frontend.vercel.app/img/people-1.webp',
                    alt: 'foto de pergil de paula mendes'
                },
                {
                    id: 3,
                    nome: 'João Rodrigues',
                    cargo: 'Diretor Executivo',
                    url_image: 'https://estrutura-engenharia-frontend.vercel.app/img/people-2.webp',
                    alt: 'foto de perfil de joão rodrigues'
                },
                {
                    id: 4,
                    nome: 'Daniela santos',
                    cargo: 'Diretora de Vendas',
                    url_image: 'https://estrutura-engenharia-frontend.vercel.app/img/people-3.webp',
                    alt: 'foto de perfil de daniela santos'
                },
                {
                    id: 5,
                    nome: 'Marcos silva',
                    cargo: 'Marketing',
                    url_image: 'https://estrutura-engenharia-frontend.vercel.app/img/people-4.webp',
                    alt: 'foto de perfil de marcos silva'
                },
            ]
        }
    }

    res.status(200).json(data)
}
