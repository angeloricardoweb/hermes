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
        results: [
            {
                id: 0,
                pergunta: 'O Simineral produz e vende minérios?',
                resposta: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laudantium perspiciatis culpa iste dolor soluta laborum natus nisi reiciendis sint explicabo corrupti unde ratione iure ipsa.',

            },
            {
                id: 1,
                pergunta: 'Quem pode se associar ao Simineral?',
                resposta: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod deleniti tempora rem, sed fugiat reiciendis molestias exercitationem. Cupiditate officiis non porro recusandae vitae pariatur architecto, tenetur voluptatem soluta molestias aperiam!',

            },
            {
                id: 2,
                pergunta: 'Como ser uma associada do Simineral? ',
                resposta: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro error placeat praesentium, impedit sed obcaecati rerum saepe qui nihil id consequuntur a harum quos reiciendis culpa beatae soluta repellendus! Et, consequatur? Reprehenderit natus expedita modi consequatur officia ipsum, quos fuga et ratione tempora sint sapiente cum non eum qui temporibus adipisci, perferendis tempore omnis esse alias voluptate quod quisquam quidem.',

            },
            {
                id: 3,
                pergunta: 'Como conseguir emprego em uma das mineradoras associadas?',
                resposta: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod deleniti tempora rem, sed fugiat reiciendis molestias exercitationem. Cupiditate officiis non porro recusandae vitae pariatur architecto, tenetur voluptatem soluta molestias aperiam!',

            },
            {
                id: 4,
                pergunta: 'Como entrar em contato com uma mineradora associada?',
                resposta: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsa?',

            },
            {
                id: 5,
                pergunta: 'A mineração gera riquezas para o Estado do Pará?',
                resposta: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsa?',

            },
            {
                id: 6,
                pergunta: 'Qual o papel do Simineral dentro do setor?',
                resposta: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsa?',

            },
            {
                id: 7,
                pergunta: 'Como faço para conseguir patrocínios ou apoio do Simineral?',
                resposta: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsa?',

            },
            {
                id: 8,
                pergunta: 'O Simineral é uma instituição pública do governo?',
                resposta: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsa?',

            },
            {
                id: 9,
                pergunta: 'Como faço para receber o Simineral On?',
                resposta: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsa?',

            },
            {
                id: 10,
                pergunta: 'Como ter acesso aos balanços e números do setor?',
                resposta: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsa?',

            },
        ]
    }

    res.status(200).json(data)
}
