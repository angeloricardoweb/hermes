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
                categoria: 'Rolo',
                produto: 'Persiana Rolo Coleção Screen 1',
                qtd_produtos: '5',                
            },
            produto: {
                "id": 1,
                "nome": "Ut voluptas",
                "cod": 123,
                "preco": "60,00",
                "preco_promocional": "0,00",
                "preco_atual": "60,00",
                "peso": 21.32000000000000028421709430404007434844970703125,
                "descricao": "Ea sed laboris nihil",
                "inf_tecnica": null,
                "prazo_entrega": null,
                "estoque_qtd": 94,
                "venda_max": "13,33",
                "venda_min": "15,55",
                "cobrado_min": "16,66",
                "instalacao_taxa": "17,77",
                "instalacao_min_qtd": 20,
                "venda_por": "Metro",
                "slug": "ut-voluptas",
                "cadastro": "1975-06-23",
                "ativo": 1,
                "caracteristicas": [
                    {
                        "id": 1,
                        "nome": "padrao teste 1",
                        "nome_visualizacao": "padrao teste 1 vs",
                        "tipo": {
                            "id": 1,
                            "nome": "Forma Padrão"
                        }
                    },
                    {
                        "id": 2,
                        "nome": "marcar 2",
                        "nome_visualizacao": "marcar 2 vs",
                        "tipo": {
                            "id": 2,
                            "nome": "Botão de Marcar"
                        }
                    },
                    {
                        "id": 3,
                        "nome": "marcar 3",
                        "nome_visualizacao": "marcar 3 vs",
                        "tipo": {
                            "id": 2,
                            "nome": "Botão de Marcar"
                        }
                    }
                ],
                "categoria": {
                    "id": 7,
                    "nome": "Painel",
                    "slug": "painel",
                    "ativo": 1
                },
                "subcategoria": null,
                "imagens": [
                    {
                        "nome": "Dummy",
                        "imagem": "https://picsum.photos/800/800",
                        "imagem_nome_original": "dummy.png",
                        "ativo": 1
                    }
                ]
            }
        }
    }

    res.status(200).json(data)
}
