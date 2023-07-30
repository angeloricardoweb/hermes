import NextCors from 'nextjs-cors';

export default async function handler(req, res) {

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    const funcionarios = {
        error: false,
        message: 'Sem erros - Avisos da area da empresa',
        data: [
            {
                id: 1,
                cpf: "111.111.111-11",
                matricula: "543654",
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
            }, {
                id: 2,
                cpf: "111.111.111-11",
                matricula: "654344",
                nome: "Marcio Alex",
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
            }, {
                id: 3,
                cpf: "111.111.111-11",
                matricula: "534521",
                nome: "Carlos Eduardo",
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

        ]
    }

    res.status(200).json(funcionarios)
}
