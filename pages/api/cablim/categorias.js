import NextCors from 'nextjs-cors'

export default async function handler(req, res) {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    })

    const data = {
        "error": false,
        "message": "Ação realizada com sucesso!",
        "data": {
            "detalhes": null,
            "categorias": [

                {
                    "id": 18,
                    "nome": "Paisagismo",
                    "slug": "paisagismo",
                    "ativo": 1,
                    "subcategorias": [
                        {
                            "id": 28,
                            "nome": "Folhagem",
                            "slug": "Folhagem",
                            "ativo": 1
                        },
                        {
                            "id": 31,
                            "nome": "Sementes",
                            "slug": "Sementes",
                            "ativo": 1
                        },
                        {
                            "id": 12,
                            "nome": "Picks",
                            "slug": "Picks",
                            "ativo": 1
                        },
                        {
                            "id": 14,
                            "nome": "Hastes",
                            "slug": "Hastes",
                            "ativo": 1
                        },
                        {
                            "id": 15,
                            "nome": "Complememtos",
                            "slug": "Complememtos",
                            "ativo": 1
                        },
                        {
                            "id": 16,
                            "nome": "Material de Montagem",
                            "slug": "Material de Montagem",
                            "ativo": 1
                        },
                        {
                            "id": 19,
                            "nome": "Árvores",
                            "slug": "Árvores",
                            "ativo": 1
                        },
                        {
                            "id": 88,
                            "nome": "Folhas",
                            "slug": "Folhas",
                            "ativo": 1
                        }
                    ],
                    "faq": []
                },
                {
                    "id": 20,
                    "nome": "Decoração",
                    "slug": "decoracao",
                    "ativo": 1,
                    "subcategorias": [
                        {
                            "id": 11,
                            "nome": "Vasos",
                            "slug": "vasos",
                            "ativo": 1
                        },
                        {
                            "id": 12,
                            "nome": "Cestaria",
                            "slug": "cestaria",
                            "ativo": 1
                        },
                        {
                            "id": 13,
                            "nome": "Luminárias",
                            "slug": "luminarias",
                            "ativo": 1
                        },
                        {
                            "id": 14,
                            "nome": "Bandeja",
                            "slug": "bandeja",
                            "ativo": 1
                        },
                        {
                            "id": 15,
                            "nome": "Escultura",
                            "slug": "escultura",
                            "ativo": 1
                        },
                        {
                            "id": 16,
                            "nome": "Livro Caixa",
                            "slug": "livro-caixa",
                            "ativo": 1
                        },
                        {
                            "id": 87,
                            "nome": "Caixas Decorativas",
                            "slug": "caixas-decorativas",
                            "ativo": 1
                        },
                        {
                            "id": 84,
                            "nome": "Muranos",
                            "slug": "muranos",
                            "ativo": 1
                        },
                        {
                            "id": 73,
                            "nome": "Prataria",
                            "slug": "prataria",
                            "ativo": 1
                        },
                        {
                            "id": 62,
                            "nome": "Quadros",
                            "slug": "quadros",
                            "ativo": 1
                        },
                        {
                            "id": 52,
                            "nome": "Móveis(Poltronas/Mesas/Sofás)",
                            "slug": "longa-1",
                            "ativo": 1
                        }, {
                            "id": 41,
                            "nome": "Porta Retrato",
                            "slug": "porta-retrato",
                            "ativo": 1
                        }, {
                            "id": 73,
                            "nome": "Lupas",
                            "slug": "lupas",
                            "ativo": 1
                        }, {
                            "id": 86,
                            "nome": "Colares de Mesa",
                            "slug": "colares-de-mesa",
                            "ativo": 1
                        }, {
                            "id": 663,
                            "nome": "Adornos",
                            "slug": "adornos",
                            "ativo": 1
                        },
                    ],
                    "faq": []
                },
                {
                    "id": 21,
                    "nome": "Lançamentos",
                    "slug": "Lançamentos",
                    "ativo": 1,
                    "subcategorias": [

                    ],
                    "faq": []
                },

            ]
        }
    }

    res.status(200).json(data)
}


