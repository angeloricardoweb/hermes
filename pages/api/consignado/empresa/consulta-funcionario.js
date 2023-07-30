import NextCors from 'nextjs-cors';

export default async function handler(req, res) {

    const { cpf, matricula } = req.query;

    console.log(cpf, matricula);

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    if (cpf.length <= 8) {
        const data = {
            error: true,
            message: 'CPF inválido',
            data: []
        }
        return res.status(200).json(data)
    }

    const data = {
        error: false,
        message: 'Sem erros',
        funcionario: {
            id: 1,
            cpf: "111.111.111-11",
            matricula: "12345",
            nome: "João da Silva",
            email: "joao@teste.com",
            telefone_comercial: "123456789",
            telefone_celular: "123456789",
            categoria: "Servidor",
            entidade: "Prefeitura de Belém",
            situacao: "Ativo",
            data_nascimento: "2022-07-27T11:50:48.709Z",
            conta: {
                banco: "Banco do Brasil",
                agencia: "123",
                conta: "1234-5",
            }
        }
    }

    res.status(200).json(data)
}
