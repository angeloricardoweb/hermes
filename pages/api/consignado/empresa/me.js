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
        data: {
            id: 1,
            consignataria: 'SOCRED',
            cnpj: '123.456.789/0001-00',
            usuario: 'Bredi Tecnologia',
            convenio: 'Convênio Socred',
            email: 'bredi@email.com',
            qtd_funcionarios: '10',
            validade_cadastro: '2022-07-27T11:50:48.709Z'
        }
    }

    res.status(200).json(data)
}
