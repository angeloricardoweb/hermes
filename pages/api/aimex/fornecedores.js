import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
    await NextCors(req, res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200,
    });

    const search = req.query.search;

    const fornecedoresSearch = {
        error: false,
        message: 'Sem erros',
        fornecedores: [
            {
                id: 1,
                nome: 'Fornecedor 1',
                descricao: 'Descrição do fornecedor 1',
                endereco: 'Rua 1, 1',
                telefone: '11 1111-1111',
            },
            {
                id: 2,
                nome: 'Fornecedor 2',
                descricao: 'Descrição do fornecedor 2',
                endereco: 'Rua 2, 2',
                telefone: '22 2222-2222',
            },
        ],
    }

    const fornecedoresSearchNotFound = {
        error: true,
        message: 'Fornecedor não encontrado',
        fornecedores: [],
    }

    const fornecedores = {
        error: false,
        message: 'Sem erros',
        fornecedores: {
            geral: [
                {
                    id: 1,
                    nome: 'Fornecedor 1 - geral',
                    descricao: 'Descrição do fornecedor 1',
                    endereco: 'Rua 1, 1',
                    telefone: '11 1111-1111',
                },
                {
                    id: 2,
                    nome: 'Fornecedor 2',
                    descricao: 'Descrição do fornecedor 2',
                    endereco: 'Rua 2, 2',
                    telefone: '22 2222-2222',
                },
            ],

            produtos: [
                {
                    id: 1,
                    nome: 'Fornecedor 1 - produtos',
                    descricao: 'Descrição do fornecedor 1',
                    endereco: 'Rua 1, 1',
                    telefone: '11 1111-1111',
                },
                {
                    id: 2,
                    nome: 'Fornecedor 2',
                    descricao: 'Descrição do fornecedor 2',
                    endereco: 'Rua 2, 2',
                    telefone: '22 2222-2222',
                },
            ],
            especie: [
                {
                    id: 1,
                    nome: 'Fornecedor 1 - especie',
                    descricao: 'Descrição do fornecedor 1',
                    endereco: 'Rua 1, 1',
                    telefone: '11 1111-1111',
                },
                {
                    id: 2,
                    nome: 'Fornecedor 2',
                    descricao: 'Descrição do fornecedor 2',
                    endereco: 'Rua 2, 2',
                    telefone: '22 2222-2222',
                },
            ],
            associados: [
                {
                    id: 1,
                    nome: 'Fornecedor 1 - associados',
                    descricao: 'Descrição do fornecedor 1',
                    endereco: 'Rua 1, 1',
                    telefone: '11 1111-1111',
                },
                {
                    id: 2,
                    nome: 'Fornecedor 2',
                    descricao: 'Descrição do fornecedor 2',
                    endereco: 'Rua 2, 2',
                    telefone: '22 2222-2222',
                },
            ]
        }
    }



    if (search === "erro") {
        return res.status(200).json(fornecedoresSearchNotFound)
    }
    if (search) {
        return res.status(200).json(fornecedoresSearch)
    }
    return res.status(200).json(fornecedores)

}
