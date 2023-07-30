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
        data: {
            detalhes:{
                descricao: 'Produtos disponíveis',
                categoria: params.category,
                produto: params.category,
                qtd_produtos: '5',                
            },
            produtos:[
                {
                    produto_id: 15325,
                    nome: 'Persiana Rolo Coleção Screen 1',
                    amount_old: 'R$ 220,50',
                    amount: 'R$ 154,35',
                    image: {
                        url: 'https://artmil-frontend.vercel.app/temp/produto.png',
                    },
                },           
                {
                    produto_id: 1564525,
                    nome: 'Persiana Rolo Coleção Screen 1',
                    amount_old: 'R$ 210,50',
                    amount: 'R$ 112,50',
                    image: {
                        url: 'https://artmil-frontend.vercel.app/temp/produto.png',
                    },
                },           
                {
                    produto_id: 1234325,
                    nome: 'Persiana Rolo Coleção Screen 1',
                    amount_old: 'R$ 199,50',
                    amount: 'R$ 154,99',
                    image: {
                        url: 'https://artmil-frontend.vercel.app/temp/produto.png',
                    },
                },           
                {
                    produto_id: 15325,
                    nome: 'Persiana Rolo Coleção Screen 1',
                    amount_old: 'R$ 190,50',
                    amount: 'R$ 164,99',
                    image: {
                        url: 'https://artmil-frontend.vercel.app/temp/produto.png',
                    },
                },           
                {
                    produto_id: 15312325,
                    nome: 'Persiana Rolo Coleção Screen 1',
                    amount_old: 'R$ 320,50',
                    amount: 'R$ 134,00',
                    image: {
                        url: 'https://artmil-frontend.vercel.app/temp/produto.png',
                    },
                },           
               
            ]
        }
    }

    res.status(200).json(data)
}
