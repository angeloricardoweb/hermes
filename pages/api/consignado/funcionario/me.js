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
            usuario: 'Angelo Ricardo',
            matricula: '123456789',
            convenio: 'Convênio Socred',
            email: 'angeloricardo@email.com',
            cpf: '123.456.789-00',
            servico: '1131-COOPERATIVA',
            margem_total: 'R$ 1.000,00',
            margem_disponivel: 'R$ 750,00',
            descontos: 'R$ 120,00',
        }
    }

    res.status(200).json(data)
}
