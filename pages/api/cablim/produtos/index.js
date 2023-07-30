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
            "detalhes": [],
            "produtos": [
                {
                    "produto": {
                        "id": 75,
                        "cod": "411",
                        "slug": "composicao-praiana",
                        "nome": "Composicão Praiana",
                        "preco": 435,
                        "preco_promocional": 0,
                        "descricao": "Top reto com detalhe vazado em argola. Calça tanga cavada na frente e verso.\r\nFora da praia, pode ser usada como peça chave, compondo com saias longas estilo pareô.",
                        "prazo_entrega": null,
                        "composicao": "84% poliamida 16% elastano",
                        "composicao_forro": "100% poliamida",
                        "cadastro": "2023-01-29",
                        "ativo": 1,
                        "novidade": 1,
                        "destaque": 1,
                        "position": 0,
                        "disponivel": true,
                        "subprodutos": [
                            {
                                "id": 73,
                                "cod": "545",
                                "slug": "top-karina",
                                "nome": "Top Karina",
                                "preco": "178.00",
                                "preco_promocional": "0,00",
                                "peso": "0,00",
                                "descricao": "Top reto com detalhe vazado em argola.\r\nFora da praia, pode ser usada como peça chave, compondo com saias longas estilo pareô.",
                                "inf_tecnica": null,
                                "prazo_entrega": null,
                                "composicao": "84% poliamida 16% elastano",
                                "composicao_forro": "100% poliamida",
                                "img_ilus_msg": 1,
                                "cadastro": "2023-01-29",
                                "ativo": 1,
                                "novidade": 1,
                                "destaque": 1,
                                "produto_id": 75,
                                "conjunto_id": null,
                                "categoria_id": 1,
                                "subcategoria_id": 4,
                                "position": 0,
                                "created_at": "2023-01-30T09:42:23.000000Z",
                                "updated_at": "2023-03-15T14:56:42.000000Z",
                                "deleted_at": null,
                                "disponivel": true
                            },
                            {
                                "id": 74,
                                "cod": "415",
                                "slug": "calca-tanga-karina",
                                "nome": "Calça Tanga Karina",
                                "preco": "146.00",
                                "preco_promocional": "0,00",
                                "peso": "0,00",
                                "descricao": "Calça tanga cavada na frente e verso.\r\nFora da praia, pode ser usada como peça chave, compondo com saias longas estilo pareô.",
                                "inf_tecnica": null,
                                "prazo_entrega": null,
                                "composicao": "84% poliamida 16% elastano",
                                "composicao_forro": "100% poliamida",
                                "img_ilus_msg": 1,
                                "cadastro": "2023-01-29",
                                "ativo": 1,
                                "novidade": 1,
                                "destaque": 1,
                                "produto_id": 75,
                                "conjunto_id": null,
                                "categoria_id": 1,
                                "subcategoria_id": 24,
                                "position": 0,
                                "created_at": "2023-01-30T09:47:45.000000Z",
                                "updated_at": "2023-03-15T14:57:24.000000Z",
                                "deleted_at": null,
                                "disponivel": true
                            }
                        ],
                        "preco_atacado": 190.99,
                        "quantidade_min_atacado": 30,
                        "desconto_atacado": 0.15,
                        "categoria": {
                            "id": 1,
                            "nome": "Bikini",
                            "slug": "bikini",
                            "ativo": 1
                        },
                        "subcategoria": {
                            "id": 7,
                            "nome": "Fio Dental",
                            "slug": "fio-dental",
                            "ativo": 1
                        },
                        "imagens": [
                            {
                                "id": 80,
                                "nome": "Conjunto Karina",
                                "imagem": "https://imgur.com/ge29UTx.png",
                                "imagem_original": "https://imgur.com/ge29UTx.png",
                                "ativo": 1
                            }

                        ]
                    },
                    "subprodutos": [
                        {
                            "id": 73,
                            "cod": "545",
                            "slug": "Coleção de cerâmica organica no verde Bandeira",
                            "nome": "Top Karina",
                            "preco": 550,
                            "preco_promocional": 0,
                            "descricao": "Top reto com detalhe vazado em argola.\r\nFora da praia, pode ser usada como peça chave, compondo com saias longas estilo pareô.",
                            "prazo_entrega": null,
                            "composicao": "84% poliamida 16% elastano",
                            "composicao_forro": "100% poliamida",
                            "cadastro": "2023-01-29",
                            "ativo": 1,
                            "novidade": 1,
                            "destaque": 1,
                            "position": 0,
                            "disponivel": true,
                            "preco_atacado": 350.99,
                            "quantidade_min_atacado": 30,
                            "desconto_atacado": 0.15,
                            "categoria": {
                                "id": 1,
                                "nome": "Bikini",
                                "slug": "bikini",
                                "ativo": 1
                            },
                            "subcategoria": {
                                "id": 4,
                                "nome": "Retângulo",
                                "slug": "retangulo",
                                "ativo": 1
                            },
                            "imagens": [
                                {
                                    "id": 79,
                                    "nome": "Top Karina",
                                    "imagem": "https://imgur.com/ge29UTx.png",
                                    "imagem_original": "https://imgur.com/ge29UTx.png",
                                    "ativo": 1
                                }
                            ],
                            "variacoes_do_produto": {
                                "Escolha o tamanho do produto": [
                                    {
                                        "id": 487,
                                        "nome": "PP",
                                        "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                        "cores": [
                                            {
                                                "id": 886,
                                                "nome": "Lilás",
                                                "cor": "#eb61f5",
                                                "estoque": 14,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1047,
                                                "nome": "Verde",
                                                "cor": "#28c34f",
                                                "estoque": 61,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1048,
                                                "nome": "Preto",
                                                "cor": "#000000",
                                                "estoque": 82,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1049,
                                                "nome": "Branco",
                                                "cor": "#ffffff",
                                                "estoque": 98,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1050,
                                                "nome": "Rosa pink",
                                                "cor": "#ff00ff",
                                                "estoque": 52,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1078,
                                                "nome": "Azul",
                                                "cor": "#2e06f4",
                                                "estoque": 22,
                                                "disponivel": true
                                            }
                                        ]
                                    },
                                    {
                                        "id": 483,
                                        "nome": "P",
                                        "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                        "cores": [
                                            {
                                                "id": 886,
                                                "nome": "Lilás",
                                                "cor": "#eb61f5",
                                                "estoque": 60,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1047,
                                                "nome": "Verde",
                                                "cor": "#28c34f",
                                                "estoque": 30,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1048,
                                                "nome": "Preto",
                                                "cor": "#000000",
                                                "estoque": 36,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1049,
                                                "nome": "Branco",
                                                "cor": "#ffffff",
                                                "estoque": 62,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1050,
                                                "nome": "Rosa pink",
                                                "cor": "#ff00ff",
                                                "estoque": 21,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1078,
                                                "nome": "Azul",
                                                "cor": "#2e06f4",
                                                "estoque": 78,
                                                "disponivel": true
                                            }
                                        ]
                                    },
                                    {
                                        "id": 484,
                                        "nome": "M",
                                        "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                        "cores": [
                                            {
                                                "id": 886,
                                                "nome": "Lilás",
                                                "cor": "#eb61f5",
                                                "estoque": 20,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1047,
                                                "nome": "Verde",
                                                "cor": "#28c34f",
                                                "estoque": 53,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1048,
                                                "nome": "Preto",
                                                "cor": "#000000",
                                                "estoque": 35,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1049,
                                                "nome": "Branco",
                                                "cor": "#ffffff",
                                                "estoque": 60,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1050,
                                                "nome": "Rosa pink",
                                                "cor": "#ff00ff",
                                                "estoque": 87,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1078,
                                                "nome": "Azul",
                                                "cor": "#2e06f4",
                                                "estoque": 92,
                                                "disponivel": true
                                            }
                                        ]
                                    },
                                    {
                                        "id": 485,
                                        "nome": "G",
                                        "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                        "cores": [
                                            {
                                                "id": 886,
                                                "nome": "Lilás",
                                                "cor": "#eb61f5",
                                                "estoque": 30,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1047,
                                                "nome": "Verde",
                                                "cor": "#28c34f",
                                                "estoque": 80,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1048,
                                                "nome": "Preto",
                                                "cor": "#000000",
                                                "estoque": 21,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1049,
                                                "nome": "Branco",
                                                "cor": "#ffffff",
                                                "estoque": 82,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1050,
                                                "nome": "Rosa pink",
                                                "cor": "#ff00ff",
                                                "estoque": 81,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1078,
                                                "nome": "Azul",
                                                "cor": "#2e06f4",
                                                "estoque": 70,
                                                "disponivel": true
                                            }
                                        ]
                                    },
                                    {
                                        "id": 486,
                                        "nome": "GG",
                                        "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                        "cores": [
                                            {
                                                "id": 886,
                                                "nome": "Lilás",
                                                "cor": "#eb61f5",
                                                "estoque": 50,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1047,
                                                "nome": "Verde",
                                                "cor": "#28c34f",
                                                "estoque": 22,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1048,
                                                "nome": "Preto",
                                                "cor": "#000000",
                                                "estoque": 37,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1049,
                                                "nome": "Branco",
                                                "cor": "#ffffff",
                                                "estoque": 63,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1050,
                                                "nome": "Rosa pink",
                                                "cor": "#ff00ff",
                                                "estoque": 99,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1078,
                                                "nome": "Azul",
                                                "cor": "#2e06f4",
                                                "estoque": 81,
                                                "disponivel": true
                                            }
                                        ]
                                    }
                                ]
                            },
                            "estoques": [
                                {
                                    "id": 1722,
                                    "titulo": {
                                        "cor": "Lilás",
                                        "tamanho": "P"
                                    },
                                    "estoque": 60,
                                    "imagens": ""
                                },
                                {
                                    "id": 2527,
                                    "titulo": {
                                        "cor": "Branco",
                                        "tamanho": "M"
                                    },
                                    "estoque": 60,
                                    "imagens": ""
                                },
                                {
                                    "id": 2599,
                                    "titulo": {
                                        "cor": "Azul",
                                        "tamanho": "GG"
                                    },
                                    "estoque": 81,
                                    "imagens": ""
                                },
                                {
                                    "id": 2598,
                                    "titulo": {
                                        "cor": "Azul",
                                        "tamanho": "G"
                                    },
                                    "estoque": 70,
                                    "imagens": ""
                                },
                                {
                                    "id": 2597,
                                    "titulo": {
                                        "cor": "Azul",
                                        "tamanho": "M"
                                    },
                                    "estoque": 92,
                                    "imagens": ""
                                },
                                {
                                    "id": 2596,
                                    "titulo": {
                                        "cor": "Azul",
                                        "tamanho": "P"
                                    },
                                    "estoque": 78,
                                    "imagens": ""
                                },
                                {
                                    "id": 2535,
                                    "titulo": {
                                        "tamanho": "PP"
                                    },
                                    "estoque": 52,
                                    "imagens": ""
                                },
                                {
                                    "id": 2534,
                                    "titulo": {
                                        "tamanho": "GG"
                                    },
                                    "estoque": 99,
                                    "imagens": ""
                                },
                                {
                                    "id": 2533,
                                    "titulo": {
                                        "tamanho": "G"
                                    },
                                    "estoque": 81,
                                    "imagens": ""
                                },
                                {
                                    "id": 2532,
                                    "titulo": {
                                        "tamanho": "M"
                                    },
                                    "estoque": 87,
                                    "imagens": ""
                                },
                                {
                                    "id": 2531,
                                    "titulo": {
                                        "tamanho": "P"
                                    },
                                    "estoque": 21,
                                    "imagens": ""
                                },
                                {
                                    "id": 2530,
                                    "titulo": {
                                        "cor": "Branco",
                                        "tamanho": "PP"
                                    },
                                    "estoque": 98,
                                    "imagens": ""
                                },
                                {
                                    "id": 2529,
                                    "titulo": {
                                        "cor": "Branco",
                                        "tamanho": "GG"
                                    },
                                    "estoque": 63,
                                    "imagens": ""
                                },
                                {
                                    "id": 2528,
                                    "titulo": {
                                        "cor": "Branco",
                                        "tamanho": "G"
                                    },
                                    "estoque": 82,
                                    "imagens": ""
                                },
                                {
                                    "id": 2526,
                                    "titulo": {
                                        "cor": "Branco",
                                        "tamanho": "P"
                                    },
                                    "estoque": 62,
                                    "imagens": ""
                                },
                                {
                                    "id": 1723,
                                    "titulo": {
                                        "cor": "Lilás",
                                        "tamanho": "M"
                                    },
                                    "estoque": 20,
                                    "imagens": ""
                                },
                                {
                                    "id": 2525,
                                    "titulo": {
                                        "cor": "Preto",
                                        "tamanho": "PP"
                                    },
                                    "estoque": 82,
                                    "imagens": ""
                                },
                                {
                                    "id": 2524,
                                    "titulo": {
                                        "cor": "Preto",
                                        "tamanho": "GG"
                                    },
                                    "estoque": 37,
                                    "imagens": ""
                                },
                                {
                                    "id": 2523,
                                    "titulo": {
                                        "cor": "Preto",
                                        "tamanho": "G"
                                    },
                                    "estoque": 21,
                                    "imagens": ""
                                },
                                {
                                    "id": 2522,
                                    "titulo": {
                                        "cor": "Preto",
                                        "tamanho": "M"
                                    },
                                    "estoque": 35,
                                    "imagens": ""
                                },
                                {
                                    "id": 2521,
                                    "titulo": {
                                        "cor": "Preto",
                                        "tamanho": "P"
                                    },
                                    "estoque": 36,
                                    "imagens": ""
                                },
                                {
                                    "id": 2520,
                                    "titulo": {
                                        "cor": "Verde",
                                        "tamanho": "PP"
                                    },
                                    "estoque": 61,
                                    "imagens": ""
                                },
                                {
                                    "id": 2519,
                                    "titulo": {
                                        "cor": "Verde",
                                        "tamanho": "GG"
                                    },
                                    "estoque": 22,
                                    "imagens": ""
                                },
                                {
                                    "id": 2518,
                                    "titulo": {
                                        "cor": "Verde",
                                        "tamanho": "G"
                                    },
                                    "estoque": 80,
                                    "imagens": ""
                                },
                                {
                                    "id": 2517,
                                    "titulo": {
                                        "cor": "Verde",
                                        "tamanho": "M"
                                    },
                                    "estoque": 53,
                                    "imagens": ""
                                },
                                {
                                    "id": 2516,
                                    "titulo": {
                                        "cor": "Verde",
                                        "tamanho": "P"
                                    },
                                    "estoque": 30,
                                    "imagens": ""
                                },
                                {
                                    "id": 1726,
                                    "titulo": {
                                        "cor": "Lilás",
                                        "tamanho": "PP"
                                    },
                                    "estoque": 14,
                                    "imagens": ""
                                },
                                {
                                    "id": 1725,
                                    "titulo": {
                                        "cor": "Lilás",
                                        "tamanho": "GG"
                                    },
                                    "estoque": 50,
                                    "imagens": ""
                                },
                                {
                                    "id": 1724,
                                    "titulo": {
                                        "cor": "Lilás",
                                        "tamanho": "G"
                                    },
                                    "estoque": 30,
                                    "imagens": ""
                                },
                                {
                                    "id": 2600,
                                    "titulo": {
                                        "cor": "Azul",
                                        "tamanho": "PP"
                                    },
                                    "estoque": 22,
                                    "imagens": ""
                                }
                            ]
                        },
                        {
                            "id": 74,
                            "cod": "415",
                            "slug": "calca-tanga-karina",
                            "nome": "Calça Tanga Karina",
                            "preco": 146,
                            "preco_promocional": 0,
                            "descricao": "Calça tanga cavada na frente e verso.\r\nFora da praia, pode ser usada como peça chave, compondo com saias longas estilo pareô.",
                            "prazo_entrega": null,
                            "composicao": "84% poliamida 16% elastano",
                            "composicao_forro": "100% poliamida",
                            "cadastro": "2023-01-29",
                            "ativo": 1,
                            "novidade": 1,
                            "destaque": 1,
                            "position": 0,
                            "disponivel": true,
                            "preco_atacado": 190.99,
                            "quantidade_min_atacado": 30,
                            "desconto_atacado": 0.15,
                            "categoria": {
                                "id": 1,
                                "nome": "Bikini",
                                "slug": "bikini",
                                "ativo": 1
                            },
                            "subcategoria": {
                                "id": 24,
                                "nome": "Cavado",
                                "slug": "cavado",
                                "ativo": 1
                            },
                            "imagens": [
                                {
                                    "id": 81,
                                    "nome": "Calça Tanga Karina",
                                    "imagem": "https://imgur.com/7UsmE6K.png",
                                    "imagem_original": "https://imgur.com/7UsmE6K.png",
                                    "ativo": 1
                                }
                            ],
                            "variacoes_do_produto": {
                                "Escolha o tamanho do produto": [
                                    {
                                        "id": 493,
                                        "nome": "PP",
                                        "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                        "cores": [
                                            {
                                                "id": 887,
                                                "nome": "Lilás",
                                                "cor": "#eb61f5",
                                                "estoque": 85,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 959,
                                                "nome": "Verde",
                                                "cor": "#28c34f",
                                                "estoque": 92,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 960,
                                                "nome": "Preto",
                                                "cor": "#000000",
                                                "estoque": 57,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 961,
                                                "nome": "Branco",
                                                "cor": "#ffffff",
                                                "estoque": 20,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 962,
                                                "nome": "Rosa pink",
                                                "cor": "#ff00ff",
                                                "estoque": 61,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1079,
                                                "nome": "Azul",
                                                "cor": "#2e06f4",
                                                "estoque": 20,
                                                "disponivel": true
                                            }
                                        ]
                                    },
                                    {
                                        "id": 489,
                                        "nome": "P",
                                        "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                        "cores": [
                                            {
                                                "id": 887,
                                                "nome": "Lilás",
                                                "cor": "#eb61f5",
                                                "estoque": 20,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 959,
                                                "nome": "Verde",
                                                "cor": "#28c34f",
                                                "estoque": 88,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 960,
                                                "nome": "Preto",
                                                "cor": "#000000",
                                                "estoque": 90,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 961,
                                                "nome": "Branco",
                                                "cor": "#ffffff",
                                                "estoque": 33,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 962,
                                                "nome": "Rosa pink",
                                                "cor": "#ff00ff",
                                                "estoque": 49,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1079,
                                                "nome": "Azul",
                                                "cor": "#2e06f4",
                                                "estoque": 20,
                                                "disponivel": true
                                            }
                                        ]
                                    },
                                    {
                                        "id": 490,
                                        "nome": "M",
                                        "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                        "cores": [
                                            {
                                                "id": 887,
                                                "nome": "Lilás",
                                                "cor": "#eb61f5",
                                                "estoque": 22,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 959,
                                                "nome": "Verde",
                                                "cor": "#28c34f",
                                                "estoque": 85,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 960,
                                                "nome": "Preto",
                                                "cor": "#000000",
                                                "estoque": 20,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 961,
                                                "nome": "Branco",
                                                "cor": "#ffffff",
                                                "estoque": 85,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 962,
                                                "nome": "Rosa pink",
                                                "cor": "#ff00ff",
                                                "estoque": 20,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1079,
                                                "nome": "Azul",
                                                "cor": "#2e06f4",
                                                "estoque": 20,
                                                "disponivel": true
                                            }
                                        ]
                                    },
                                    {
                                        "id": 491,
                                        "nome": "G",
                                        "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                        "cores": [
                                            {
                                                "id": 887,
                                                "nome": "Lilás",
                                                "cor": "#eb61f5",
                                                "estoque": 34,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 959,
                                                "nome": "Verde",
                                                "cor": "#28c34f",
                                                "estoque": 94,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 960,
                                                "nome": "Preto",
                                                "cor": "#000000",
                                                "estoque": 20,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 961,
                                                "nome": "Branco",
                                                "cor": "#ffffff",
                                                "estoque": 41,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 962,
                                                "nome": "Rosa pink",
                                                "cor": "#ff00ff",
                                                "estoque": 80,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1079,
                                                "nome": "Azul",
                                                "cor": "#2e06f4",
                                                "estoque": 20,
                                                "disponivel": true
                                            }
                                        ]
                                    },
                                    {
                                        "id": 492,
                                        "nome": "GG",
                                        "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                        "cores": [
                                            {
                                                "id": 887,
                                                "nome": "Lilás",
                                                "cor": "#eb61f5",
                                                "estoque": 26,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 959,
                                                "nome": "Verde",
                                                "cor": "#28c34f",
                                                "estoque": 78,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 960,
                                                "nome": "Preto",
                                                "cor": "#000000",
                                                "estoque": 86,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 961,
                                                "nome": "Branco",
                                                "cor": "#ffffff",
                                                "estoque": 78,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 962,
                                                "nome": "Rosa pink",
                                                "cor": "#ff00ff",
                                                "estoque": 29,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1079,
                                                "nome": "Azul",
                                                "cor": "#2e06f4",
                                                "estoque": 20,
                                                "disponivel": true
                                            }
                                        ]
                                    }
                                ]
                            },
                            "estoques": [
                                {
                                    "id": 1727,
                                    "titulo": {
                                        "cor": "Lilás",
                                        "tamanho": "P"
                                    },
                                    "estoque": 20,
                                    "imagens": ""
                                },
                                {
                                    "id": 2087,
                                    "titulo": {
                                        "cor": "Branco",
                                        "tamanho": "M"
                                    },
                                    "estoque": 85,
                                    "imagens": ""
                                },
                                {
                                    "id": 2604,
                                    "titulo": {
                                        "cor": "Azul",
                                        "tamanho": "GG"
                                    },
                                    "estoque": 20,
                                    "imagens": ""
                                },
                                {
                                    "id": 2603,
                                    "titulo": {
                                        "cor": "Azul",
                                        "tamanho": "G"
                                    },
                                    "estoque": 20,
                                    "imagens": ""
                                },
                                {
                                    "id": 2602,
                                    "titulo": {
                                        "cor": "Azul",
                                        "tamanho": "M"
                                    },
                                    "estoque": 20,
                                    "imagens": ""
                                },
                                {
                                    "id": 2601,
                                    "titulo": {
                                        "cor": "Azul",
                                        "tamanho": "P"
                                    },
                                    "estoque": 20,
                                    "imagens": ""
                                },
                                {
                                    "id": 2095,
                                    "titulo": {
                                        "tamanho": "PP"
                                    },
                                    "estoque": 61,
                                    "imagens": ""
                                },
                                {
                                    "id": 2094,
                                    "titulo": {
                                        "tamanho": "GG"
                                    },
                                    "estoque": 29,
                                    "imagens": ""
                                },
                                {
                                    "id": 2093,
                                    "titulo": {
                                        "tamanho": "G"
                                    },
                                    "estoque": 80,
                                    "imagens": ""
                                },
                                {
                                    "id": 2092,
                                    "titulo": {
                                        "tamanho": "M"
                                    },
                                    "estoque": 20,
                                    "imagens": ""
                                },
                                {
                                    "id": 2091,
                                    "titulo": {
                                        "tamanho": "P"
                                    },
                                    "estoque": 49,
                                    "imagens": ""
                                },
                                {
                                    "id": 2090,
                                    "titulo": {
                                        "cor": "Branco",
                                        "tamanho": "PP"
                                    },
                                    "estoque": 20,
                                    "imagens": ""
                                },
                                {
                                    "id": 2089,
                                    "titulo": {
                                        "cor": "Branco",
                                        "tamanho": "GG"
                                    },
                                    "estoque": 78,
                                    "imagens": ""
                                },
                                {
                                    "id": 2088,
                                    "titulo": {
                                        "cor": "Branco",
                                        "tamanho": "G"
                                    },
                                    "estoque": 41,
                                    "imagens": ""
                                },
                                {
                                    "id": 2086,
                                    "titulo": {
                                        "cor": "Branco",
                                        "tamanho": "P"
                                    },
                                    "estoque": 33,
                                    "imagens": ""
                                },
                                {
                                    "id": 1728,
                                    "titulo": {
                                        "cor": "Lilás",
                                        "tamanho": "M"
                                    },
                                    "estoque": 22,
                                    "imagens": ""
                                },
                                {
                                    "id": 2085,
                                    "titulo": {
                                        "cor": "Preto",
                                        "tamanho": "PP"
                                    },
                                    "estoque": 57,
                                    "imagens": ""
                                },
                                {
                                    "id": 2084,
                                    "titulo": {
                                        "cor": "Preto",
                                        "tamanho": "GG"
                                    },
                                    "estoque": 86,
                                    "imagens": ""
                                },
                                {
                                    "id": 2083,
                                    "titulo": {
                                        "cor": "Preto",
                                        "tamanho": "G"
                                    },
                                    "estoque": 20,
                                    "imagens": ""
                                },
                                {
                                    "id": 2082,
                                    "titulo": {
                                        "cor": "Preto",
                                        "tamanho": "M"
                                    },
                                    "estoque": 20,
                                    "imagens": ""
                                },
                                {
                                    "id": 2081,
                                    "titulo": {
                                        "cor": "Preto",
                                        "tamanho": "P"
                                    },
                                    "estoque": 90,
                                    "imagens": ""
                                },
                                {
                                    "id": 2080,
                                    "titulo": {
                                        "cor": "Verde",
                                        "tamanho": "PP"
                                    },
                                    "estoque": 92,
                                    "imagens": ""
                                },
                                {
                                    "id": 2079,
                                    "titulo": {
                                        "cor": "Verde",
                                        "tamanho": "GG"
                                    },
                                    "estoque": 78,
                                    "imagens": ""
                                },
                                {
                                    "id": 2078,
                                    "titulo": {
                                        "cor": "Verde",
                                        "tamanho": "G"
                                    },
                                    "estoque": 94,
                                    "imagens": ""
                                },
                                {
                                    "id": 2077,
                                    "titulo": {
                                        "cor": "Verde",
                                        "tamanho": "M"
                                    },
                                    "estoque": 85,
                                    "imagens": ""
                                },
                                {
                                    "id": 2076,
                                    "titulo": {
                                        "cor": "Verde",
                                        "tamanho": "P"
                                    },
                                    "estoque": 88,
                                    "imagens": ""
                                },
                                {
                                    "id": 1731,
                                    "titulo": {
                                        "cor": "Lilás",
                                        "tamanho": "PP"
                                    },
                                    "estoque": 85,
                                    "imagens": ""
                                },
                                {
                                    "id": 1730,
                                    "titulo": {
                                        "cor": "Lilás",
                                        "tamanho": "GG"
                                    },
                                    "estoque": 26,
                                    "imagens": ""
                                },
                                {
                                    "id": 1729,
                                    "titulo": {
                                        "cor": "Lilás",
                                        "tamanho": "G"
                                    },
                                    "estoque": 34,
                                    "imagens": ""
                                },
                                {
                                    "id": 2605,
                                    "titulo": {
                                        "cor": "Azul",
                                        "tamanho": "PP"
                                    },
                                    "estoque": 20,
                                    "imagens": ""
                                }
                            ]
                        }
                    ]
                },
                {
                    "produto": {
                        "id": 30,
                        "cod": "1365",
                        "slug": "composicao-em-cachepot-de-aluminio-e-caladium-realista",
                        "nome": "Composicao em cachepot de alumínio e caladium realista",
                        "preco": 343,
                        "preco_promocional": 0,
                        "descricao": "Top reto estruturado com detalhe Vê, alças finas e amarração em ferragem. Calça cavada na frente e verso com regulagem na lateral.\r\nFora da praia, pode ser usada como peça chave, compondo com saias curtas e mais justas ao corpo.",
                        "prazo_entrega": null,
                        "composicao": "94% poliéster 6% elastano",
                        "composicao_forro": "100% poliamida",
                        "cadastro": "2023-01-23",
                        "ativo": 1,
                        "novidade": 1,
                        "destaque": 1,
                        "position": 1,
                        "disponivel": true,
                        "subprodutos": [
                            {
                                "id": 28,
                                "cod": "1",
                                "slug": "top-vivian",
                                "nome": "Top Vivian",
                                "preco": "218.00",
                                "preco_promocional": "0,00",
                                "peso": "0,00",
                                "descricao": "Top reto estruturado com detalhe Vê, alças finas e amarração em ferragem. Calça cavada na frente e verso com regulagem na lateral.\r\nFora da praia, pode ser usada como peça chave, compondo com saias curtas e mais justas ao corpo.",
                                "inf_tecnica": null,
                                "prazo_entrega": null,
                                "composicao": "94% poliéster 6% elastano",
                                "composicao_forro": "100% poliamida",
                                "img_ilus_msg": 1,
                                "cadastro": "2023-01-23",
                                "ativo": 1,
                                "novidade": 0,
                                "destaque": 0,
                                "produto_id": 30,
                                "conjunto_id": null,
                                "categoria_id": 1,
                                "subcategoria_id": 4,
                                "position": 0,
                                "created_at": "2023-01-26T16:58:54.000000Z",
                                "updated_at": "2023-03-15T15:03:50.000000Z",
                                "deleted_at": null,
                                "disponivel": true
                            },
                            {
                                "id": 29,
                                "cod": "2",
                                "slug": "calcinha-vivian",
                                "nome": "Calcinha Vivian",
                                "preco": "125.00",
                                "preco_promocional": "0,00",
                                "peso": "0,00",
                                "descricao": "Calça cavada na frente e verso com regulagem na lateral",
                                "inf_tecnica": null,
                                "prazo_entrega": null,
                                "composicao": "94% poliéster 6% elastano",
                                "composicao_forro": "100% poliamida",
                                "img_ilus_msg": 1,
                                "cadastro": "2023-01-23",
                                "ativo": 1,
                                "novidade": 0,
                                "destaque": 0,
                                "produto_id": 30,
                                "conjunto_id": null,
                                "categoria_id": 1,
                                "subcategoria_id": 4,
                                "position": 0,
                                "created_at": "2023-01-26T17:00:36.000000Z",
                                "updated_at": "2023-03-15T15:04:17.000000Z",
                                "deleted_at": null,
                                "disponivel": true
                            }
                        ],
                        "preco_atacado": 190.99,
                        "quantidade_min_atacado": 30,
                        "desconto_atacado": 0.15,
                        "categoria": {
                            "id": 1,
                            "nome": "Bikini",
                            "slug": "bikini",
                            "ativo": 1
                        },
                        "subcategoria": {
                            "id": 5,
                            "nome": "Oval",
                            "slug": "oval",
                            "ativo": 1
                        },
                        "imagens": [
                            {
                                "id": 26,
                                "nome": "Conjunto Vivian",
                                "imagem": "https://imgur.com/D4LhhKC.png",
                                "imagem_original": "https://imgur.com/D4LhhKC.png",
                                "ativo": 1
                            },

                        ]
                    },
                    "subprodutos": [
                        {
                            "id": 28,
                            "cod": "1",
                            "slug": "top-vivian",
                            "nome": "Top Vivian",
                            "preco": 218,
                            "preco_promocional": 0,
                            "descricao": "Top reto estruturado com detalhe Vê, alças finas e amarração em ferragem. Calça cavada na frente e verso com regulagem na lateral.\r\nFora da praia, pode ser usada como peça chave, compondo com saias curtas e mais justas ao corpo.",
                            "prazo_entrega": null,
                            "composicao": "94% poliéster 6% elastano",
                            "composicao_forro": "100% poliamida",
                            "cadastro": "2023-01-23",
                            "ativo": 1,
                            "novidade": 0,
                            "destaque": 0,
                            "position": 0,
                            "disponivel": true,
                            "preco_atacado": 190.99,
                            "quantidade_min_atacado": 30,
                            "desconto_atacado": 0.15,
                            "categoria": {
                                "id": 1,
                                "nome": "Bikini",
                                "slug": "bikini",
                                "ativo": 1
                            },
                            "subcategoria": {
                                "id": 4,
                                "nome": "Retângulo",
                                "slug": "retangulo",
                                "ativo": 1
                            },
                            "imagens": [
                                {
                                    "id": 78,
                                    "nome": "Calcinha Vivian",
                                    "imagem": "https://www.manuella-mello.sitebeta.com.br/img-render/produto-fotos/h/img-1372_7f1f87502f2e44e49f8fe8f459440c25.jpg",
                                    "imagem_original": "https://www.manuella-mello.sitebeta.com.br/img-render/produto-fotos/original/img-1372_7f1f87502f2e44e49f8fe8f459440c25.jpg",
                                    "ativo": 1
                                }
                            ],
                            "variacoes_do_produto": {
                                "Escolha o tamanho do produto": [
                                    {
                                        "id": 109,
                                        "nome": "PP",
                                        "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                        "cores": [
                                            {
                                                "id": 104,
                                                "nome": "vermelho",
                                                "cor": "#f20202",
                                                "estoque": 37,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 951,
                                                "nome": "Verde",
                                                "cor": "#28c34f",
                                                "estoque": 19,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 952,
                                                "nome": "Preto",
                                                "cor": "#000000",
                                                "estoque": 97,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 953,
                                                "nome": "Branco",
                                                "cor": "#ffffff",
                                                "estoque": 30,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 954,
                                                "nome": "Rosa pink",
                                                "cor": "#ff00ff",
                                                "estoque": 92,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1080,
                                                "nome": "Laranja",
                                                "cor": "#f99406",
                                                "estoque": 35,
                                                "disponivel": true
                                            }
                                        ]
                                    },
                                    {
                                        "id": 105,
                                        "nome": "P",
                                        "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                        "cores": [
                                            {
                                                "id": 104,
                                                "nome": "vermelho",
                                                "cor": "#f20202",
                                                "estoque": 60,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 951,
                                                "nome": "Verde",
                                                "cor": "#28c34f",
                                                "estoque": 82,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 952,
                                                "nome": "Preto",
                                                "cor": "#000000",
                                                "estoque": 41,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 953,
                                                "nome": "Branco",
                                                "cor": "#ffffff",
                                                "estoque": 65,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 954,
                                                "nome": "Rosa pink",
                                                "cor": "#ff00ff",
                                                "estoque": 30,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1080,
                                                "nome": "Laranja",
                                                "cor": "#f99406",
                                                "estoque": 42,
                                                "disponivel": true
                                            }
                                        ]
                                    },
                                    {
                                        "id": 106,
                                        "nome": "M",
                                        "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                        "cores": [
                                            {
                                                "id": 104,
                                                "nome": "vermelho",
                                                "cor": "#f20202",
                                                "estoque": 59,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 951,
                                                "nome": "Verde",
                                                "cor": "#28c34f",
                                                "estoque": 30,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 952,
                                                "nome": "Preto",
                                                "cor": "#000000",
                                                "estoque": 43,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 953,
                                                "nome": "Branco",
                                                "cor": "#ffffff",
                                                "estoque": 84,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 954,
                                                "nome": "Rosa pink",
                                                "cor": "#ff00ff",
                                                "estoque": 30,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1080,
                                                "nome": "Laranja",
                                                "cor": "#f99406",
                                                "estoque": 93,
                                                "disponivel": true
                                            }
                                        ]
                                    },
                                    {
                                        "id": 107,
                                        "nome": "G",
                                        "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                        "cores": [
                                            {
                                                "id": 104,
                                                "nome": "vermelho",
                                                "cor": "#f20202",
                                                "estoque": 31,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 951,
                                                "nome": "Verde",
                                                "cor": "#28c34f",
                                                "estoque": 26,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 952,
                                                "nome": "Preto",
                                                "cor": "#000000",
                                                "estoque": 34,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 953,
                                                "nome": "Branco",
                                                "cor": "#ffffff",
                                                "estoque": 49,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 954,
                                                "nome": "Rosa pink",
                                                "cor": "#ff00ff",
                                                "estoque": 78,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1080,
                                                "nome": "Laranja",
                                                "cor": "#f99406",
                                                "estoque": 98,
                                                "disponivel": true
                                            }
                                        ]
                                    },
                                    {
                                        "id": 108,
                                        "nome": "GG",
                                        "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                        "cores": [
                                            {
                                                "id": 104,
                                                "nome": "vermelho",
                                                "cor": "#f20202",
                                                "estoque": 65,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 951,
                                                "nome": "Verde",
                                                "cor": "#28c34f",
                                                "estoque": 59,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 952,
                                                "nome": "Preto",
                                                "cor": "#000000",
                                                "estoque": 15,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 953,
                                                "nome": "Branco",
                                                "cor": "#ffffff",
                                                "estoque": 30,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 954,
                                                "nome": "Rosa pink",
                                                "cor": "#ff00ff",
                                                "estoque": 59,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1080,
                                                "nome": "Laranja",
                                                "cor": "#f99406",
                                                "estoque": 72,
                                                "disponivel": true
                                            }
                                        ]
                                    }
                                ]
                            },
                            "estoques": [
                                {
                                    "id": 265,
                                    "titulo": {
                                        "tamanho": "P"
                                    },
                                    "estoque": 60,
                                    "imagens": ""
                                },
                                {
                                    "id": 2047,
                                    "titulo": {
                                        "cor": "Branco",
                                        "tamanho": "M"
                                    },
                                    "estoque": 84,
                                    "imagens": ""
                                },
                                {
                                    "id": 2609,
                                    "titulo": {
                                        "cor": "Laranja",
                                        "tamanho": "GG"
                                    },
                                    "estoque": 72,
                                    "imagens": ""
                                },
                                {
                                    "id": 2608,
                                    "titulo": {
                                        "cor": "Laranja",
                                        "tamanho": "G"
                                    },
                                    "estoque": 98,
                                    "imagens": ""
                                },
                                {
                                    "id": 2607,
                                    "titulo": {
                                        "cor": "Laranja",
                                        "tamanho": "M"
                                    },
                                    "estoque": 93,
                                    "imagens": ""
                                },
                                {
                                    "id": 2606,
                                    "titulo": {
                                        "cor": "Laranja",
                                        "tamanho": "P"
                                    },
                                    "estoque": 42,
                                    "imagens": ""
                                },
                                {
                                    "id": 2055,
                                    "titulo": {
                                        "tamanho": "PP"
                                    },
                                    "estoque": 92,
                                    "imagens": ""
                                },
                                {
                                    "id": 2054,
                                    "titulo": {
                                        "tamanho": "GG"
                                    },
                                    "estoque": 59,
                                    "imagens": ""
                                },
                                {
                                    "id": 2053,
                                    "titulo": {
                                        "tamanho": "G"
                                    },
                                    "estoque": 78,
                                    "imagens": ""
                                },
                                {
                                    "id": 2052,
                                    "titulo": {
                                        "tamanho": "M"
                                    },
                                    "estoque": 30,
                                    "imagens": ""
                                },
                                {
                                    "id": 2051,
                                    "titulo": {
                                        "tamanho": "P"
                                    },
                                    "estoque": 30,
                                    "imagens": ""
                                },
                                {
                                    "id": 2050,
                                    "titulo": {
                                        "cor": "Branco",
                                        "tamanho": "PP"
                                    },
                                    "estoque": 30,
                                    "imagens": ""
                                },
                                {
                                    "id": 2049,
                                    "titulo": {
                                        "cor": "Branco",
                                        "tamanho": "GG"
                                    },
                                    "estoque": 30,
                                    "imagens": ""
                                },
                                {
                                    "id": 2048,
                                    "titulo": {
                                        "cor": "Branco",
                                        "tamanho": "G"
                                    },
                                    "estoque": 49,
                                    "imagens": ""
                                },
                                {
                                    "id": 2046,
                                    "titulo": {
                                        "cor": "Branco",
                                        "tamanho": "P"
                                    },
                                    "estoque": 65,
                                    "imagens": ""
                                },
                                {
                                    "id": 266,
                                    "titulo": {
                                        "tamanho": "M"
                                    },
                                    "estoque": 59,
                                    "imagens": ""
                                },
                                {
                                    "id": 2045,
                                    "titulo": {
                                        "cor": "Preto",
                                        "tamanho": "PP"
                                    },
                                    "estoque": 97,
                                    "imagens": ""
                                },
                                {
                                    "id": 2044,
                                    "titulo": {
                                        "cor": "Preto",
                                        "tamanho": "GG"
                                    },
                                    "estoque": 15,
                                    "imagens": ""
                                },
                                {
                                    "id": 2043,
                                    "titulo": {
                                        "cor": "Preto",
                                        "tamanho": "G"
                                    },
                                    "estoque": 34,
                                    "imagens": ""
                                },
                                {
                                    "id": 2042,
                                    "titulo": {
                                        "cor": "Preto",
                                        "tamanho": "M"
                                    },
                                    "estoque": 43,
                                    "imagens": ""
                                },
                                {
                                    "id": 2041,
                                    "titulo": {
                                        "cor": "Preto",
                                        "tamanho": "P"
                                    },
                                    "estoque": 41,
                                    "imagens": ""
                                },
                                {
                                    "id": 2040,
                                    "titulo": {
                                        "cor": "Verde",
                                        "tamanho": "PP"
                                    },
                                    "estoque": 19,
                                    "imagens": ""
                                },
                                {
                                    "id": 2039,
                                    "titulo": {
                                        "cor": "Verde",
                                        "tamanho": "GG"
                                    },
                                    "estoque": 59,
                                    "imagens": ""
                                },
                                {
                                    "id": 2038,
                                    "titulo": {
                                        "cor": "Verde",
                                        "tamanho": "G"
                                    },
                                    "estoque": 26,
                                    "imagens": ""
                                },
                                {
                                    "id": 2037,
                                    "titulo": {
                                        "cor": "Verde",
                                        "tamanho": "M"
                                    },
                                    "estoque": 30,
                                    "imagens": ""
                                },
                                {
                                    "id": 2036,
                                    "titulo": {
                                        "cor": "Verde",
                                        "tamanho": "P"
                                    },
                                    "estoque": 82,
                                    "imagens": ""
                                },
                                {
                                    "id": 269,
                                    "titulo": {
                                        "tamanho": "PP"
                                    },
                                    "estoque": 37,
                                    "imagens": ""
                                },
                                {
                                    "id": 268,
                                    "titulo": {
                                        "tamanho": "GG"
                                    },
                                    "estoque": 65,
                                    "imagens": ""
                                },
                                {
                                    "id": 267,
                                    "titulo": {
                                        "tamanho": "G"
                                    },
                                    "estoque": 31,
                                    "imagens": ""
                                },
                                {
                                    "id": 2610,
                                    "titulo": {
                                        "cor": "Laranja",
                                        "tamanho": "PP"
                                    },
                                    "estoque": 35,
                                    "imagens": ""
                                }
                            ]
                        },
                        {
                            "id": 29,
                            "cod": "2",
                            "slug": "calcinha-vivian",
                            "nome": "Calcinha Vivian",
                            "preco": 125,
                            "preco_promocional": 0,
                            "descricao": "Calça cavada na frente e verso com regulagem na lateral",
                            "prazo_entrega": null,
                            "composicao": "94% poliéster 6% elastano",
                            "composicao_forro": "100% poliamida",
                            "cadastro": "2023-01-23",
                            "ativo": 1,
                            "novidade": 0,
                            "destaque": 0,
                            "position": 0,
                            "disponivel": true,
                            "preco_atacado": 190.99,
                            "quantidade_min_atacado": 30,
                            "desconto_atacado": 0.15,
                            "categoria": {
                                "id": 1,
                                "nome": "Bikini",
                                "slug": "bikini",
                                "ativo": 1
                            },
                            "subcategoria": {
                                "id": 4,
                                "nome": "Retângulo",
                                "slug": "retangulo",
                                "ativo": 1
                            },
                            "imagens": [
                                {
                                    "id": 25,
                                    "nome": "Conjunto Vivian",
                                    "imagem": "https://www.manuella-mello.sitebeta.com.br/img-render/produto-fotos/h/img-1364_b5dcfb7824d210168e87e746176422d2.jpg",
                                    "imagem_original": "https://www.manuella-mello.sitebeta.com.br/img-render/produto-fotos/original/img-1364_b5dcfb7824d210168e87e746176422d2.jpg",
                                    "ativo": 1
                                }
                            ],
                            "variacoes_do_produto": {
                                "Escolha o tamanho do produto": [
                                    {
                                        "id": 118,
                                        "nome": "PP",
                                        "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                        "cores": [
                                            {
                                                "id": 113,
                                                "nome": "vermelho",
                                                "cor": "#f20202",
                                                "estoque": 39,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 955,
                                                "nome": "Verde",
                                                "cor": "#28c34f",
                                                "estoque": 82,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 956,
                                                "nome": "Preto",
                                                "cor": "#000000",
                                                "estoque": 56,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 957,
                                                "nome": "Branco",
                                                "cor": "#ffffff",
                                                "estoque": 70,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 958,
                                                "nome": "Rosa pink",
                                                "cor": "#ff00ff",
                                                "estoque": 83,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1081,
                                                "nome": "Laranja",
                                                "cor": "#f99406",
                                                "estoque": 30,
                                                "disponivel": true
                                            }
                                        ]
                                    },
                                    {
                                        "id": 114,
                                        "nome": "P",
                                        "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                        "cores": [
                                            {
                                                "id": 113,
                                                "nome": "vermelho",
                                                "cor": "#f20202",
                                                "estoque": 66,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 955,
                                                "nome": "Verde",
                                                "cor": "#28c34f",
                                                "estoque": 33,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 956,
                                                "nome": "Preto",
                                                "cor": "#000000",
                                                "estoque": 79,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 957,
                                                "nome": "Branco",
                                                "cor": "#ffffff",
                                                "estoque": 68,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 958,
                                                "nome": "Rosa pink",
                                                "cor": "#ff00ff",
                                                "estoque": 100,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1081,
                                                "nome": "Laranja",
                                                "cor": "#f99406",
                                                "estoque": 30,
                                                "disponivel": true
                                            }
                                        ]
                                    },
                                    {
                                        "id": 115,
                                        "nome": "M",
                                        "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                        "cores": [
                                            {
                                                "id": 113,
                                                "nome": "vermelho",
                                                "cor": "#f20202",
                                                "estoque": 82,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 955,
                                                "nome": "Verde",
                                                "cor": "#28c34f",
                                                "estoque": 28,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 956,
                                                "nome": "Preto",
                                                "cor": "#000000",
                                                "estoque": 73,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 957,
                                                "nome": "Branco",
                                                "cor": "#ffffff",
                                                "estoque": 47,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 958,
                                                "nome": "Rosa pink",
                                                "cor": "#ff00ff",
                                                "estoque": 64,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1081,
                                                "nome": "Laranja",
                                                "cor": "#f99406",
                                                "estoque": 42,
                                                "disponivel": true
                                            }
                                        ]
                                    },
                                    {
                                        "id": 116,
                                        "nome": "G",
                                        "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                        "cores": [
                                            {
                                                "id": 113,
                                                "nome": "vermelho",
                                                "cor": "#f20202",
                                                "estoque": 40,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 955,
                                                "nome": "Verde",
                                                "cor": "#28c34f",
                                                "estoque": 78,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 956,
                                                "nome": "Preto",
                                                "cor": "#000000",
                                                "estoque": 64,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 957,
                                                "nome": "Branco",
                                                "cor": "#ffffff",
                                                "estoque": 30,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 958,
                                                "nome": "Rosa pink",
                                                "cor": "#ff00ff",
                                                "estoque": 72,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1081,
                                                "nome": "Laranja",
                                                "cor": "#f99406",
                                                "estoque": 83,
                                                "disponivel": true
                                            }
                                        ]
                                    },
                                    {
                                        "id": 117,
                                        "nome": "GG",
                                        "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                        "cores": [
                                            {
                                                "id": 113,
                                                "nome": "vermelho",
                                                "cor": "#f20202",
                                                "estoque": 47,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 955,
                                                "nome": "Verde",
                                                "cor": "#28c34f",
                                                "estoque": 30,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 956,
                                                "nome": "Preto",
                                                "cor": "#000000",
                                                "estoque": 53,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 957,
                                                "nome": "Branco",
                                                "cor": "#ffffff",
                                                "estoque": 30,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 958,
                                                "nome": "Rosa pink",
                                                "cor": "#ff00ff",
                                                "estoque": 22,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1081,
                                                "nome": "Laranja",
                                                "cor": "#f99406",
                                                "estoque": 40,
                                                "disponivel": true
                                            }
                                        ]
                                    }
                                ]
                            },
                            "estoques": [
                                {
                                    "id": 285,
                                    "titulo": {
                                        "tamanho": "P"
                                    },
                                    "estoque": 66,
                                    "imagens": ""
                                },
                                {
                                    "id": 2067,
                                    "titulo": {
                                        "cor": "Branco",
                                        "tamanho": "M"
                                    },
                                    "estoque": 47,
                                    "imagens": ""
                                },
                                {
                                    "id": 2614,
                                    "titulo": {
                                        "cor": "Laranja",
                                        "tamanho": "GG"
                                    },
                                    "estoque": 40,
                                    "imagens": ""
                                },
                                {
                                    "id": 2613,
                                    "titulo": {
                                        "cor": "Laranja",
                                        "tamanho": "G"
                                    },
                                    "estoque": 83,
                                    "imagens": ""
                                },
                                {
                                    "id": 2612,
                                    "titulo": {
                                        "cor": "Laranja",
                                        "tamanho": "M"
                                    },
                                    "estoque": 42,
                                    "imagens": ""
                                },
                                {
                                    "id": 2611,
                                    "titulo": {
                                        "cor": "Laranja",
                                        "tamanho": "P"
                                    },
                                    "estoque": 30,
                                    "imagens": ""
                                },
                                {
                                    "id": 2075,
                                    "titulo": {
                                        "tamanho": "PP"
                                    },
                                    "estoque": 83,
                                    "imagens": ""
                                },
                                {
                                    "id": 2074,
                                    "titulo": {
                                        "tamanho": "GG"
                                    },
                                    "estoque": 22,
                                    "imagens": ""
                                },
                                {
                                    "id": 2073,
                                    "titulo": {
                                        "tamanho": "G"
                                    },
                                    "estoque": 72,
                                    "imagens": ""
                                },
                                {
                                    "id": 2072,
                                    "titulo": {
                                        "tamanho": "M"
                                    },
                                    "estoque": 64,
                                    "imagens": ""
                                },
                                {
                                    "id": 2071,
                                    "titulo": {
                                        "tamanho": "P"
                                    },
                                    "estoque": 100,
                                    "imagens": ""
                                },
                                {
                                    "id": 2070,
                                    "titulo": {
                                        "cor": "Branco",
                                        "tamanho": "PP"
                                    },
                                    "estoque": 70,
                                    "imagens": ""
                                },
                                {
                                    "id": 2069,
                                    "titulo": {
                                        "cor": "Branco",
                                        "tamanho": "GG"
                                    },
                                    "estoque": 30,
                                    "imagens": ""
                                },
                                {
                                    "id": 2068,
                                    "titulo": {
                                        "cor": "Branco",
                                        "tamanho": "G"
                                    },
                                    "estoque": 30,
                                    "imagens": ""
                                },
                                {
                                    "id": 2066,
                                    "titulo": {
                                        "cor": "Branco",
                                        "tamanho": "P"
                                    },
                                    "estoque": 68,
                                    "imagens": ""
                                },
                                {
                                    "id": 286,
                                    "titulo": {
                                        "tamanho": "M"
                                    },
                                    "estoque": 82,
                                    "imagens": ""
                                },
                                {
                                    "id": 2065,
                                    "titulo": {
                                        "cor": "Preto",
                                        "tamanho": "PP"
                                    },
                                    "estoque": 56,
                                    "imagens": ""
                                },
                                {
                                    "id": 2064,
                                    "titulo": {
                                        "cor": "Preto",
                                        "tamanho": "GG"
                                    },
                                    "estoque": 53,
                                    "imagens": ""
                                },
                                {
                                    "id": 2063,
                                    "titulo": {
                                        "cor": "Preto",
                                        "tamanho": "G"
                                    },
                                    "estoque": 64,
                                    "imagens": ""
                                },
                                {
                                    "id": 2062,
                                    "titulo": {
                                        "cor": "Preto",
                                        "tamanho": "M"
                                    },
                                    "estoque": 73,
                                    "imagens": ""
                                },
                                {
                                    "id": 2061,
                                    "titulo": {
                                        "cor": "Preto",
                                        "tamanho": "P"
                                    },
                                    "estoque": 79,
                                    "imagens": ""
                                },
                                {
                                    "id": 2060,
                                    "titulo": {
                                        "cor": "Verde",
                                        "tamanho": "PP"
                                    },
                                    "estoque": 82,
                                    "imagens": ""
                                },
                                {
                                    "id": 2059,
                                    "titulo": {
                                        "cor": "Verde",
                                        "tamanho": "GG"
                                    },
                                    "estoque": 30,
                                    "imagens": ""
                                },
                                {
                                    "id": 2058,
                                    "titulo": {
                                        "cor": "Verde",
                                        "tamanho": "G"
                                    },
                                    "estoque": 78,
                                    "imagens": ""
                                },
                                {
                                    "id": 2057,
                                    "titulo": {
                                        "cor": "Verde",
                                        "tamanho": "M"
                                    },
                                    "estoque": 28,
                                    "imagens": ""
                                },
                                {
                                    "id": 2056,
                                    "titulo": {
                                        "cor": "Verde",
                                        "tamanho": "P"
                                    },
                                    "estoque": 33,
                                    "imagens": ""
                                },
                                {
                                    "id": 289,
                                    "titulo": {
                                        "tamanho": "PP"
                                    },
                                    "estoque": 39,
                                    "imagens": ""
                                },
                                {
                                    "id": 288,
                                    "titulo": {
                                        "tamanho": "GG"
                                    },
                                    "estoque": 47,
                                    "imagens": ""
                                },
                                {
                                    "id": 287,
                                    "titulo": {
                                        "tamanho": "G"
                                    },
                                    "estoque": 40,
                                    "imagens": ""
                                },
                                {
                                    "id": 2615,
                                    "titulo": {
                                        "cor": "Laranja",
                                        "tamanho": "PP"
                                    },
                                    "estoque": 30,
                                    "imagens": ""
                                }
                            ]
                        }
                    ]
                },
                {
                    "produto": {
                        "id": 31,
                        "cod": "133",
                        "slug": "escultura-pessoa",
                        "nome": "Escultura Pessoa",
                        "preco": 5560,
                        "preco_promocional": 0,
                        "descricao": "Decote reto no busto e costas, com alças finas ajustáveis em amarração, calça com ajuste para cava.\r\nFora da praia, pode ser usada como peça chave, compondo com calças e saias.",
                        "prazo_entrega": null,
                        "composicao": "84% poliamida 16% elastano",
                        "composicao_forro": "100% poliamida",
                        "cadastro": null,
                        "ativo": 1,
                        "novidade": 1,
                        "destaque": 1,
                        "position": 2,
                        "disponivel": true,
                        "preco_atacado": 4665.99,
                        "quantidade_min_atacado": 30,
                        "desconto_atacado": 0.15,
                        "categoria": {
                            "id": 17,
                            "nome": "Maiô",
                            "slug": "maio",
                            "ativo": 1
                        },
                        "subcategoria": {
                            "id": 27,
                            "nome": "Cavado",
                            "slug": "cavado-1",
                            "ativo": 1
                        },
                        "imagens": [
                            {
                                "id": 27,
                                "nome": "Maiô Roberta",
                                "imagem": "https://imgur.com/6bg93zI.png",
                                "imagem_original": "https://imgur.com/6bg93zI.png",
                                "ativo": 1
                            },

                        ],
                        "variacoes_do_produto": {
                            "Escolha o tamanho do produto": [
                                {
                                    "id": 875,
                                    "nome": "PP",
                                    "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                    "cores": [
                                        {
                                            "id": 900,
                                            "nome": "Branco",
                                            "cor": "#ffffff",
                                            "estoque": 67,
                                            "disponivel": true
                                        },
                                        {
                                            "id": 899,
                                            "nome": "Preto",
                                            "cor": "#000000",
                                            "estoque": 22,
                                            "disponivel": true
                                        },
                                        {
                                            "id": 898,
                                            "nome": "Verde",
                                            "cor": "#28c34f",
                                            "estoque": 45,
                                            "disponivel": true
                                        },
                                        {
                                            "id": 901,
                                            "nome": "Rosa pink",
                                            "cor": "#ff00ff",
                                            "estoque": 71,
                                            "disponivel": true
                                        },
                                        {
                                            "id": 1084,
                                            "nome": "Rosa claro",
                                            "cor": "#eb9fd6",
                                            "estoque": 67,
                                            "disponivel": true
                                        }
                                    ]
                                },
                                {
                                    "id": 693,
                                    "nome": "P",
                                    "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                    "cores": [
                                        {
                                            "id": 900,
                                            "nome": "Branco",
                                            "cor": "#ffffff",
                                            "estoque": 57,
                                            "disponivel": true
                                        },
                                        {
                                            "id": 899,
                                            "nome": "Preto",
                                            "cor": "#000000",
                                            "estoque": 92,
                                            "disponivel": true
                                        },
                                        {
                                            "id": 898,
                                            "nome": "Verde",
                                            "cor": "#28c34f",
                                            "estoque": 70,
                                            "disponivel": true
                                        },
                                        {
                                            "id": 901,
                                            "nome": "Rosa pink",
                                            "cor": "#ff00ff",
                                            "estoque": 40,
                                            "disponivel": true
                                        },
                                        {
                                            "id": 1084,
                                            "nome": "Rosa claro",
                                            "cor": "#eb9fd6",
                                            "estoque": 30,
                                            "disponivel": true
                                        }
                                    ]
                                },
                                {
                                    "id": 872,
                                    "nome": "M",
                                    "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                    "cores": [
                                        {
                                            "id": 900,
                                            "nome": "Branco",
                                            "cor": "#ffffff",
                                            "estoque": 96,
                                            "disponivel": true
                                        },
                                        {
                                            "id": 899,
                                            "nome": "Preto",
                                            "cor": "#000000",
                                            "estoque": 50,
                                            "disponivel": true
                                        },
                                        {
                                            "id": 898,
                                            "nome": "Verde",
                                            "cor": "#28c34f",
                                            "estoque": 67,
                                            "disponivel": true
                                        },
                                        {
                                            "id": 901,
                                            "nome": "Rosa pink",
                                            "cor": "#ff00ff",
                                            "estoque": 20,
                                            "disponivel": true
                                        },
                                        {
                                            "id": 1084,
                                            "nome": "Rosa claro",
                                            "cor": "#eb9fd6",
                                            "estoque": 98,
                                            "disponivel": true
                                        }
                                    ]
                                },
                                {
                                    "id": 873,
                                    "nome": "G",
                                    "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                    "cores": [
                                        {
                                            "id": 900,
                                            "nome": "Branco",
                                            "cor": "#ffffff",
                                            "estoque": 32,
                                            "disponivel": true
                                        },
                                        {
                                            "id": 899,
                                            "nome": "Preto",
                                            "cor": "#000000",
                                            "estoque": 85,
                                            "disponivel": true
                                        },
                                        {
                                            "id": 898,
                                            "nome": "Verde",
                                            "cor": "#28c34f",
                                            "estoque": 18,
                                            "disponivel": true
                                        },
                                        {
                                            "id": 901,
                                            "nome": "Rosa pink",
                                            "cor": "#ff00ff",
                                            "estoque": 86,
                                            "disponivel": true
                                        },
                                        {
                                            "id": 1084,
                                            "nome": "Rosa claro",
                                            "cor": "#eb9fd6",
                                            "estoque": 66,
                                            "disponivel": true
                                        }
                                    ]
                                },
                                {
                                    "id": 874,
                                    "nome": "GG",
                                    "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                    "cores": [
                                        {
                                            "id": 900,
                                            "nome": "Branco",
                                            "cor": "#ffffff",
                                            "estoque": 44,
                                            "disponivel": true
                                        },
                                        {
                                            "id": 899,
                                            "nome": "Preto",
                                            "cor": "#000000",
                                            "estoque": 45,
                                            "disponivel": true
                                        },
                                        {
                                            "id": 898,
                                            "nome": "Verde",
                                            "cor": "#28c34f",
                                            "estoque": 131,
                                            "disponivel": true
                                        },
                                        {
                                            "id": 901,
                                            "nome": "Rosa pink",
                                            "cor": "#ff00ff",
                                            "estoque": 23,
                                            "disponivel": true
                                        },
                                        {
                                            "id": 1084,
                                            "nome": "Rosa claro",
                                            "cor": "#eb9fd6",
                                            "estoque": 40,
                                            "disponivel": true
                                        }
                                    ]
                                }
                            ]
                        },
                        "estoques": [
                            {
                                "id": 1766,
                                "titulo": {
                                    "cor": "Branco",
                                    "tamanho": "P"
                                },
                                "estoque": 57,
                                "imagens": ""
                            },
                            {
                                "id": 1779,
                                "titulo": {
                                    "cor": "Verde",
                                    "tamanho": "G"
                                },
                                "estoque": 18,
                                "imagens": ""
                            },
                            {
                                "id": 2629,
                                "titulo": {
                                    "cor": "Rosa claro",
                                    "tamanho": "G"
                                },
                                "estoque": 66,
                                "imagens": ""
                            },
                            {
                                "id": 2628,
                                "titulo": {
                                    "cor": "Rosa claro",
                                    "tamanho": "GG"
                                },
                                "estoque": 40,
                                "imagens": ""
                            },
                            {
                                "id": 2627,
                                "titulo": {
                                    "cor": "Rosa claro",
                                    "tamanho": "PP"
                                },
                                "estoque": 67,
                                "imagens": ""
                            },
                            {
                                "id": 2626,
                                "titulo": {
                                    "cor": "Rosa claro",
                                    "tamanho": "P"
                                },
                                "estoque": 30,
                                "imagens": ""
                            },
                            {
                                "id": 1785,
                                "titulo": {
                                    "tamanho": "M"
                                },
                                "estoque": 20,
                                "imagens": ""
                            },
                            {
                                "id": 1784,
                                "titulo": {
                                    "tamanho": "G"
                                },
                                "estoque": 86,
                                "imagens": ""
                            },
                            {
                                "id": 1783,
                                "titulo": {
                                    "tamanho": "GG"
                                },
                                "estoque": 23,
                                "imagens": ""
                            },
                            {
                                "id": 1782,
                                "titulo": {
                                    "tamanho": "PP"
                                },
                                "estoque": 71,
                                "imagens": ""
                            },
                            {
                                "id": 1781,
                                "titulo": {
                                    "tamanho": "P"
                                },
                                "estoque": 40,
                                "imagens": ""
                            },
                            {
                                "id": 1780,
                                "titulo": {
                                    "cor": "Verde",
                                    "tamanho": "M"
                                },
                                "estoque": 67,
                                "imagens": ""
                            },
                            {
                                "id": 1778,
                                "titulo": {
                                    "cor": "Verde",
                                    "tamanho": "GG"
                                },
                                "estoque": 131,
                                "imagens": ""
                            },
                            {
                                "id": 1767,
                                "titulo": {
                                    "cor": "Branco",
                                    "tamanho": "PP"
                                },
                                "estoque": 67,
                                "imagens": ""
                            },
                            {
                                "id": 1777,
                                "titulo": {
                                    "cor": "Verde",
                                    "tamanho": "PP"
                                },
                                "estoque": 45,
                                "imagens": ""
                            },
                            {
                                "id": 1776,
                                "titulo": {
                                    "cor": "Verde",
                                    "tamanho": "P"
                                },
                                "estoque": 70,
                                "imagens": ""
                            },
                            {
                                "id": 1775,
                                "titulo": {
                                    "cor": "Preto",
                                    "tamanho": "M"
                                },
                                "estoque": 50,
                                "imagens": ""
                            },
                            {
                                "id": 1774,
                                "titulo": {
                                    "cor": "Preto",
                                    "tamanho": "G"
                                },
                                "estoque": 85,
                                "imagens": ""
                            },
                            {
                                "id": 1773,
                                "titulo": {
                                    "cor": "Preto",
                                    "tamanho": "GG"
                                },
                                "estoque": 45,
                                "imagens": ""
                            },
                            {
                                "id": 1772,
                                "titulo": {
                                    "cor": "Preto",
                                    "tamanho": "PP"
                                },
                                "estoque": 22,
                                "imagens": ""
                            },
                            {
                                "id": 1771,
                                "titulo": {
                                    "cor": "Preto",
                                    "tamanho": "P"
                                },
                                "estoque": 92,
                                "imagens": ""
                            },
                            {
                                "id": 1770,
                                "titulo": {
                                    "cor": "Branco",
                                    "tamanho": "M"
                                },
                                "estoque": 96,
                                "imagens": ""
                            },
                            {
                                "id": 1769,
                                "titulo": {
                                    "cor": "Branco",
                                    "tamanho": "G"
                                },
                                "estoque": 32,
                                "imagens": ""
                            },
                            {
                                "id": 1768,
                                "titulo": {
                                    "cor": "Branco",
                                    "tamanho": "GG"
                                },
                                "estoque": 44,
                                "imagens": ""
                            },
                            {
                                "id": 2630,
                                "titulo": {
                                    "cor": "Rosa claro",
                                    "tamanho": "M"
                                },
                                "estoque": 98,
                                "imagens": ""
                            }
                        ]
                    }
                },
                {
                    "produto": {
                        "id": 75,
                        "cod": "411",
                        "slug": "vaso-rustico",
                        "nome": "Vaso Rústico",
                        "preco": 660,
                        "preco_promocional": 0,
                        "descricao": "Top reto com detalhe vazado em argola. Calça tanga cavada na frente e verso.\r\nFora da praia, pode ser usada como peça chave, compondo com saias longas estilo pareô.",
                        "prazo_entrega": null,
                        "composicao": "84% poliamida 16% elastano",
                        "composicao_forro": "100% poliamida",
                        "cadastro": "2023-01-29",
                        "ativo": 1,
                        "novidade": 1,
                        "destaque": 1,
                        "position": 0,
                        "disponivel": true,
                        "subprodutos": [
                            {
                                "id": 73,
                                "cod": "545",
                                "slug": "top-karina",
                                "nome": "Top Karina",
                                "preco": "178.00",
                                "preco_promocional": "0,00",
                                "peso": "0,00",
                                "descricao": "Top reto com detalhe vazado em argola.\r\nFora da praia, pode ser usada como peça chave, compondo com saias longas estilo pareô.",
                                "inf_tecnica": null,
                                "prazo_entrega": null,
                                "composicao": "84% poliamida 16% elastano",
                                "composicao_forro": "100% poliamida",
                                "img_ilus_msg": 1,
                                "cadastro": "2023-01-29",
                                "ativo": 1,
                                "novidade": 1,
                                "destaque": 1,
                                "produto_id": 75,
                                "conjunto_id": null,
                                "categoria_id": 1,
                                "subcategoria_id": 4,
                                "position": 0,
                                "created_at": "2023-01-30T09:42:23.000000Z",
                                "updated_at": "2023-03-15T14:56:42.000000Z",
                                "deleted_at": null,
                                "disponivel": true
                            },
                            {
                                "id": 74,
                                "cod": "415",
                                "slug": "calca-tanga-karina",
                                "nome": "Calça Tanga Karina",
                                "preco": "146.00",
                                "preco_promocional": "0,00",
                                "peso": "0,00",
                                "descricao": "Calça tanga cavada na frente e verso.\r\nFora da praia, pode ser usada como peça chave, compondo com saias longas estilo pareô.",
                                "inf_tecnica": null,
                                "prazo_entrega": null,
                                "composicao": "84% poliamida 16% elastano",
                                "composicao_forro": "100% poliamida",
                                "img_ilus_msg": 1,
                                "cadastro": "2023-01-29",
                                "ativo": 1,
                                "novidade": 1,
                                "destaque": 1,
                                "produto_id": 75,
                                "conjunto_id": null,
                                "categoria_id": 1,
                                "subcategoria_id": 24,
                                "position": 0,
                                "created_at": "2023-01-30T09:47:45.000000Z",
                                "updated_at": "2023-03-15T14:57:24.000000Z",
                                "deleted_at": null,
                                "disponivel": true
                            }
                        ],
                        "preco_atacado": 190.99,
                        "quantidade_min_atacado": 30,
                        "desconto_atacado": 0.15,
                        "categoria": {
                            "id": 1,
                            "nome": "Bikini",
                            "slug": "bikini",
                            "ativo": 1
                        },
                        "subcategoria": {
                            "id": 7,
                            "nome": "Fio Dental",
                            "slug": "fio-dental",
                            "ativo": 1
                        },
                        "imagens": [
                            {
                                "id": 80,
                                "nome": "Conjunto Karina",
                                "imagem": "https://imgur.com/RfpmcBb.png",
                                "imagem_original": "https://imgur.com/RfpmcBb.png",
                                "ativo": 1
                            },

                        ]
                    },
                    "subprodutos": [
                        {
                            "id": 73,
                            "cod": "545",
                            "slug": "Coleção de cerâmica organica no verde Bandeira",
                            "nome": "Top Karina",
                            "preco": 550,
                            "preco_promocional": 0,
                            "descricao": "Top reto com detalhe vazado em argola.\r\nFora da praia, pode ser usada como peça chave, compondo com saias longas estilo pareô.",
                            "prazo_entrega": null,
                            "composicao": "84% poliamida 16% elastano",
                            "composicao_forro": "100% poliamida",
                            "cadastro": "2023-01-29",
                            "ativo": 1,
                            "novidade": 1,
                            "destaque": 1,
                            "position": 0,
                            "disponivel": true,
                            "preco_atacado": 350.99,
                            "quantidade_min_atacado": 30,
                            "desconto_atacado": 0.15,
                            "categoria": {
                                "id": 1,
                                "nome": "Bikini",
                                "slug": "bikini",
                                "ativo": 1
                            },
                            "subcategoria": {
                                "id": 4,
                                "nome": "Retângulo",
                                "slug": "retangulo",
                                "ativo": 1
                            },
                            "imagens": [
                                {
                                    "id": 79,
                                    "nome": "Top Karina",
                                    "imagem": "https://imgur.com/ge29UTx.png",
                                    "imagem_original": "https://imgur.com/ge29UTx.png",
                                    "ativo": 1
                                }
                            ],
                            "variacoes_do_produto": {
                                "Escolha o tamanho do produto": [
                                    {
                                        "id": 487,
                                        "nome": "PP",
                                        "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                        "cores": [
                                            {
                                                "id": 886,
                                                "nome": "Lilás",
                                                "cor": "#eb61f5",
                                                "estoque": 14,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1047,
                                                "nome": "Verde",
                                                "cor": "#28c34f",
                                                "estoque": 61,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1048,
                                                "nome": "Preto",
                                                "cor": "#000000",
                                                "estoque": 82,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1049,
                                                "nome": "Branco",
                                                "cor": "#ffffff",
                                                "estoque": 98,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1050,
                                                "nome": "Rosa pink",
                                                "cor": "#ff00ff",
                                                "estoque": 52,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1078,
                                                "nome": "Azul",
                                                "cor": "#2e06f4",
                                                "estoque": 22,
                                                "disponivel": true
                                            }
                                        ]
                                    },
                                    {
                                        "id": 483,
                                        "nome": "P",
                                        "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                        "cores": [
                                            {
                                                "id": 886,
                                                "nome": "Lilás",
                                                "cor": "#eb61f5",
                                                "estoque": 60,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1047,
                                                "nome": "Verde",
                                                "cor": "#28c34f",
                                                "estoque": 30,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1048,
                                                "nome": "Preto",
                                                "cor": "#000000",
                                                "estoque": 36,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1049,
                                                "nome": "Branco",
                                                "cor": "#ffffff",
                                                "estoque": 62,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1050,
                                                "nome": "Rosa pink",
                                                "cor": "#ff00ff",
                                                "estoque": 21,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1078,
                                                "nome": "Azul",
                                                "cor": "#2e06f4",
                                                "estoque": 78,
                                                "disponivel": true
                                            }
                                        ]
                                    },
                                    {
                                        "id": 484,
                                        "nome": "M",
                                        "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                        "cores": [
                                            {
                                                "id": 886,
                                                "nome": "Lilás",
                                                "cor": "#eb61f5",
                                                "estoque": 20,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1047,
                                                "nome": "Verde",
                                                "cor": "#28c34f",
                                                "estoque": 53,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1048,
                                                "nome": "Preto",
                                                "cor": "#000000",
                                                "estoque": 35,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1049,
                                                "nome": "Branco",
                                                "cor": "#ffffff",
                                                "estoque": 60,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1050,
                                                "nome": "Rosa pink",
                                                "cor": "#ff00ff",
                                                "estoque": 87,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1078,
                                                "nome": "Azul",
                                                "cor": "#2e06f4",
                                                "estoque": 92,
                                                "disponivel": true
                                            }
                                        ]
                                    },
                                    {
                                        "id": 485,
                                        "nome": "G",
                                        "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                        "cores": [
                                            {
                                                "id": 886,
                                                "nome": "Lilás",
                                                "cor": "#eb61f5",
                                                "estoque": 30,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1047,
                                                "nome": "Verde",
                                                "cor": "#28c34f",
                                                "estoque": 80,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1048,
                                                "nome": "Preto",
                                                "cor": "#000000",
                                                "estoque": 21,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1049,
                                                "nome": "Branco",
                                                "cor": "#ffffff",
                                                "estoque": 82,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1050,
                                                "nome": "Rosa pink",
                                                "cor": "#ff00ff",
                                                "estoque": 81,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1078,
                                                "nome": "Azul",
                                                "cor": "#2e06f4",
                                                "estoque": 70,
                                                "disponivel": true
                                            }
                                        ]
                                    },
                                    {
                                        "id": 486,
                                        "nome": "GG",
                                        "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                        "cores": [
                                            {
                                                "id": 886,
                                                "nome": "Lilás",
                                                "cor": "#eb61f5",
                                                "estoque": 50,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1047,
                                                "nome": "Verde",
                                                "cor": "#28c34f",
                                                "estoque": 22,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1048,
                                                "nome": "Preto",
                                                "cor": "#000000",
                                                "estoque": 37,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1049,
                                                "nome": "Branco",
                                                "cor": "#ffffff",
                                                "estoque": 63,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1050,
                                                "nome": "Rosa pink",
                                                "cor": "#ff00ff",
                                                "estoque": 99,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1078,
                                                "nome": "Azul",
                                                "cor": "#2e06f4",
                                                "estoque": 81,
                                                "disponivel": true
                                            }
                                        ]
                                    }
                                ]
                            },
                            "estoques": [
                                {
                                    "id": 1722,
                                    "titulo": {
                                        "cor": "Lilás",
                                        "tamanho": "P"
                                    },
                                    "estoque": 60,
                                    "imagens": ""
                                },
                                {
                                    "id": 2527,
                                    "titulo": {
                                        "cor": "Branco",
                                        "tamanho": "M"
                                    },
                                    "estoque": 60,
                                    "imagens": ""
                                },
                                {
                                    "id": 2599,
                                    "titulo": {
                                        "cor": "Azul",
                                        "tamanho": "GG"
                                    },
                                    "estoque": 81,
                                    "imagens": ""
                                },
                                {
                                    "id": 2598,
                                    "titulo": {
                                        "cor": "Azul",
                                        "tamanho": "G"
                                    },
                                    "estoque": 70,
                                    "imagens": ""
                                },
                                {
                                    "id": 2597,
                                    "titulo": {
                                        "cor": "Azul",
                                        "tamanho": "M"
                                    },
                                    "estoque": 92,
                                    "imagens": ""
                                },
                                {
                                    "id": 2596,
                                    "titulo": {
                                        "cor": "Azul",
                                        "tamanho": "P"
                                    },
                                    "estoque": 78,
                                    "imagens": ""
                                },
                                {
                                    "id": 2535,
                                    "titulo": {
                                        "tamanho": "PP"
                                    },
                                    "estoque": 52,
                                    "imagens": ""
                                },
                                {
                                    "id": 2534,
                                    "titulo": {
                                        "tamanho": "GG"
                                    },
                                    "estoque": 99,
                                    "imagens": ""
                                },
                                {
                                    "id": 2533,
                                    "titulo": {
                                        "tamanho": "G"
                                    },
                                    "estoque": 81,
                                    "imagens": ""
                                },
                                {
                                    "id": 2532,
                                    "titulo": {
                                        "tamanho": "M"
                                    },
                                    "estoque": 87,
                                    "imagens": ""
                                },
                                {
                                    "id": 2531,
                                    "titulo": {
                                        "tamanho": "P"
                                    },
                                    "estoque": 21,
                                    "imagens": ""
                                },
                                {
                                    "id": 2530,
                                    "titulo": {
                                        "cor": "Branco",
                                        "tamanho": "PP"
                                    },
                                    "estoque": 98,
                                    "imagens": ""
                                },
                                {
                                    "id": 2529,
                                    "titulo": {
                                        "cor": "Branco",
                                        "tamanho": "GG"
                                    },
                                    "estoque": 63,
                                    "imagens": ""
                                },
                                {
                                    "id": 2528,
                                    "titulo": {
                                        "cor": "Branco",
                                        "tamanho": "G"
                                    },
                                    "estoque": 82,
                                    "imagens": ""
                                },
                                {
                                    "id": 2526,
                                    "titulo": {
                                        "cor": "Branco",
                                        "tamanho": "P"
                                    },
                                    "estoque": 62,
                                    "imagens": ""
                                },
                                {
                                    "id": 1723,
                                    "titulo": {
                                        "cor": "Lilás",
                                        "tamanho": "M"
                                    },
                                    "estoque": 20,
                                    "imagens": ""
                                },
                                {
                                    "id": 2525,
                                    "titulo": {
                                        "cor": "Preto",
                                        "tamanho": "PP"
                                    },
                                    "estoque": 82,
                                    "imagens": ""
                                },
                                {
                                    "id": 2524,
                                    "titulo": {
                                        "cor": "Preto",
                                        "tamanho": "GG"
                                    },
                                    "estoque": 37,
                                    "imagens": ""
                                },
                                {
                                    "id": 2523,
                                    "titulo": {
                                        "cor": "Preto",
                                        "tamanho": "G"
                                    },
                                    "estoque": 21,
                                    "imagens": ""
                                },
                                {
                                    "id": 2522,
                                    "titulo": {
                                        "cor": "Preto",
                                        "tamanho": "M"
                                    },
                                    "estoque": 35,
                                    "imagens": ""
                                },
                                {
                                    "id": 2521,
                                    "titulo": {
                                        "cor": "Preto",
                                        "tamanho": "P"
                                    },
                                    "estoque": 36,
                                    "imagens": ""
                                },
                                {
                                    "id": 2520,
                                    "titulo": {
                                        "cor": "Verde",
                                        "tamanho": "PP"
                                    },
                                    "estoque": 61,
                                    "imagens": ""
                                },
                                {
                                    "id": 2519,
                                    "titulo": {
                                        "cor": "Verde",
                                        "tamanho": "GG"
                                    },
                                    "estoque": 22,
                                    "imagens": ""
                                },
                                {
                                    "id": 2518,
                                    "titulo": {
                                        "cor": "Verde",
                                        "tamanho": "G"
                                    },
                                    "estoque": 80,
                                    "imagens": ""
                                },
                                {
                                    "id": 2517,
                                    "titulo": {
                                        "cor": "Verde",
                                        "tamanho": "M"
                                    },
                                    "estoque": 53,
                                    "imagens": ""
                                },
                                {
                                    "id": 2516,
                                    "titulo": {
                                        "cor": "Verde",
                                        "tamanho": "P"
                                    },
                                    "estoque": 30,
                                    "imagens": ""
                                },
                                {
                                    "id": 1726,
                                    "titulo": {
                                        "cor": "Lilás",
                                        "tamanho": "PP"
                                    },
                                    "estoque": 14,
                                    "imagens": ""
                                },
                                {
                                    "id": 1725,
                                    "titulo": {
                                        "cor": "Lilás",
                                        "tamanho": "GG"
                                    },
                                    "estoque": 50,
                                    "imagens": ""
                                },
                                {
                                    "id": 1724,
                                    "titulo": {
                                        "cor": "Lilás",
                                        "tamanho": "G"
                                    },
                                    "estoque": 30,
                                    "imagens": ""
                                },
                                {
                                    "id": 2600,
                                    "titulo": {
                                        "cor": "Azul",
                                        "tamanho": "PP"
                                    },
                                    "estoque": 22,
                                    "imagens": ""
                                }
                            ]
                        },
                        {
                            "id": 74,
                            "cod": "415",
                            "slug": "calca-tanga-karina",
                            "nome": "Calça Tanga Karina",
                            "preco": 146,
                            "preco_promocional": 0,
                            "descricao": "Calça tanga cavada na frente e verso.\r\nFora da praia, pode ser usada como peça chave, compondo com saias longas estilo pareô.",
                            "prazo_entrega": null,
                            "composicao": "84% poliamida 16% elastano",
                            "composicao_forro": "100% poliamida",
                            "cadastro": "2023-01-29",
                            "ativo": 1,
                            "novidade": 1,
                            "destaque": 1,
                            "position": 0,
                            "disponivel": true,
                            "preco_atacado": 190.99,
                            "quantidade_min_atacado": 30,
                            "desconto_atacado": 0.15,
                            "categoria": {
                                "id": 1,
                                "nome": "Bikini",
                                "slug": "bikini",
                                "ativo": 1
                            },
                            "subcategoria": {
                                "id": 24,
                                "nome": "Cavado",
                                "slug": "cavado",
                                "ativo": 1
                            },
                            "imagens": [
                                {
                                    "id": 81,
                                    "nome": "Calça Tanga Karina",
                                    "imagem": "https://imgur.com/7UsmE6K.png",
                                    "imagem_original": "https://imgur.com/7UsmE6K.png",
                                    "ativo": 1
                                }
                            ],
                            "variacoes_do_produto": {
                                "Escolha o tamanho do produto": [
                                    {
                                        "id": 493,
                                        "nome": "PP",
                                        "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                        "cores": [
                                            {
                                                "id": 887,
                                                "nome": "Lilás",
                                                "cor": "#eb61f5",
                                                "estoque": 85,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 959,
                                                "nome": "Verde",
                                                "cor": "#28c34f",
                                                "estoque": 92,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 960,
                                                "nome": "Preto",
                                                "cor": "#000000",
                                                "estoque": 57,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 961,
                                                "nome": "Branco",
                                                "cor": "#ffffff",
                                                "estoque": 20,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 962,
                                                "nome": "Rosa pink",
                                                "cor": "#ff00ff",
                                                "estoque": 61,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1079,
                                                "nome": "Azul",
                                                "cor": "#2e06f4",
                                                "estoque": 20,
                                                "disponivel": true
                                            }
                                        ]
                                    },
                                    {
                                        "id": 489,
                                        "nome": "P",
                                        "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                        "cores": [
                                            {
                                                "id": 887,
                                                "nome": "Lilás",
                                                "cor": "#eb61f5",
                                                "estoque": 20,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 959,
                                                "nome": "Verde",
                                                "cor": "#28c34f",
                                                "estoque": 88,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 960,
                                                "nome": "Preto",
                                                "cor": "#000000",
                                                "estoque": 90,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 961,
                                                "nome": "Branco",
                                                "cor": "#ffffff",
                                                "estoque": 33,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 962,
                                                "nome": "Rosa pink",
                                                "cor": "#ff00ff",
                                                "estoque": 49,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1079,
                                                "nome": "Azul",
                                                "cor": "#2e06f4",
                                                "estoque": 20,
                                                "disponivel": true
                                            }
                                        ]
                                    },
                                    {
                                        "id": 490,
                                        "nome": "M",
                                        "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                        "cores": [
                                            {
                                                "id": 887,
                                                "nome": "Lilás",
                                                "cor": "#eb61f5",
                                                "estoque": 22,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 959,
                                                "nome": "Verde",
                                                "cor": "#28c34f",
                                                "estoque": 85,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 960,
                                                "nome": "Preto",
                                                "cor": "#000000",
                                                "estoque": 20,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 961,
                                                "nome": "Branco",
                                                "cor": "#ffffff",
                                                "estoque": 85,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 962,
                                                "nome": "Rosa pink",
                                                "cor": "#ff00ff",
                                                "estoque": 20,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1079,
                                                "nome": "Azul",
                                                "cor": "#2e06f4",
                                                "estoque": 20,
                                                "disponivel": true
                                            }
                                        ]
                                    },
                                    {
                                        "id": 491,
                                        "nome": "G",
                                        "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                        "cores": [
                                            {
                                                "id": 887,
                                                "nome": "Lilás",
                                                "cor": "#eb61f5",
                                                "estoque": 34,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 959,
                                                "nome": "Verde",
                                                "cor": "#28c34f",
                                                "estoque": 94,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 960,
                                                "nome": "Preto",
                                                "cor": "#000000",
                                                "estoque": 20,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 961,
                                                "nome": "Branco",
                                                "cor": "#ffffff",
                                                "estoque": 41,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 962,
                                                "nome": "Rosa pink",
                                                "cor": "#ff00ff",
                                                "estoque": 80,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1079,
                                                "nome": "Azul",
                                                "cor": "#2e06f4",
                                                "estoque": 20,
                                                "disponivel": true
                                            }
                                        ]
                                    },
                                    {
                                        "id": 492,
                                        "nome": "GG",
                                        "url_img": "https://www.manuella-mello.sitebeta.com.br/storage/caracteristicas-imagens/h",
                                        "cores": [
                                            {
                                                "id": 887,
                                                "nome": "Lilás",
                                                "cor": "#eb61f5",
                                                "estoque": 26,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 959,
                                                "nome": "Verde",
                                                "cor": "#28c34f",
                                                "estoque": 78,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 960,
                                                "nome": "Preto",
                                                "cor": "#000000",
                                                "estoque": 86,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 961,
                                                "nome": "Branco",
                                                "cor": "#ffffff",
                                                "estoque": 78,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 962,
                                                "nome": "Rosa pink",
                                                "cor": "#ff00ff",
                                                "estoque": 29,
                                                "disponivel": true
                                            },
                                            {
                                                "id": 1079,
                                                "nome": "Azul",
                                                "cor": "#2e06f4",
                                                "estoque": 20,
                                                "disponivel": true
                                            }
                                        ]
                                    }
                                ]
                            },
                            "estoques": [
                                {
                                    "id": 1727,
                                    "titulo": {
                                        "cor": "Lilás",
                                        "tamanho": "P"
                                    },
                                    "estoque": 20,
                                    "imagens": ""
                                },
                                {
                                    "id": 2087,
                                    "titulo": {
                                        "cor": "Branco",
                                        "tamanho": "M"
                                    },
                                    "estoque": 85,
                                    "imagens": ""
                                },
                                {
                                    "id": 2604,
                                    "titulo": {
                                        "cor": "Azul",
                                        "tamanho": "GG"
                                    },
                                    "estoque": 20,
                                    "imagens": ""
                                },
                                {
                                    "id": 2603,
                                    "titulo": {
                                        "cor": "Azul",
                                        "tamanho": "G"
                                    },
                                    "estoque": 20,
                                    "imagens": ""
                                },
                                {
                                    "id": 2602,
                                    "titulo": {
                                        "cor": "Azul",
                                        "tamanho": "M"
                                    },
                                    "estoque": 20,
                                    "imagens": ""
                                },
                                {
                                    "id": 2601,
                                    "titulo": {
                                        "cor": "Azul",
                                        "tamanho": "P"
                                    },
                                    "estoque": 20,
                                    "imagens": ""
                                },
                                {
                                    "id": 2095,
                                    "titulo": {
                                        "tamanho": "PP"
                                    },
                                    "estoque": 61,
                                    "imagens": ""
                                },
                                {
                                    "id": 2094,
                                    "titulo": {
                                        "tamanho": "GG"
                                    },
                                    "estoque": 29,
                                    "imagens": ""
                                },
                                {
                                    "id": 2093,
                                    "titulo": {
                                        "tamanho": "G"
                                    },
                                    "estoque": 80,
                                    "imagens": ""
                                },
                                {
                                    "id": 2092,
                                    "titulo": {
                                        "tamanho": "M"
                                    },
                                    "estoque": 20,
                                    "imagens": ""
                                },
                                {
                                    "id": 2091,
                                    "titulo": {
                                        "tamanho": "P"
                                    },
                                    "estoque": 49,
                                    "imagens": ""
                                },
                                {
                                    "id": 2090,
                                    "titulo": {
                                        "cor": "Branco",
                                        "tamanho": "PP"
                                    },
                                    "estoque": 20,
                                    "imagens": ""
                                },
                                {
                                    "id": 2089,
                                    "titulo": {
                                        "cor": "Branco",
                                        "tamanho": "GG"
                                    },
                                    "estoque": 78,
                                    "imagens": ""
                                },
                                {
                                    "id": 2088,
                                    "titulo": {
                                        "cor": "Branco",
                                        "tamanho": "G"
                                    },
                                    "estoque": 41,
                                    "imagens": ""
                                },
                                {
                                    "id": 2086,
                                    "titulo": {
                                        "cor": "Branco",
                                        "tamanho": "P"
                                    },
                                    "estoque": 33,
                                    "imagens": ""
                                },
                                {
                                    "id": 1728,
                                    "titulo": {
                                        "cor": "Lilás",
                                        "tamanho": "M"
                                    },
                                    "estoque": 22,
                                    "imagens": ""
                                },
                                {
                                    "id": 2085,
                                    "titulo": {
                                        "cor": "Preto",
                                        "tamanho": "PP"
                                    },
                                    "estoque": 57,
                                    "imagens": ""
                                },
                                {
                                    "id": 2084,
                                    "titulo": {
                                        "cor": "Preto",
                                        "tamanho": "GG"
                                    },
                                    "estoque": 86,
                                    "imagens": ""
                                },
                                {
                                    "id": 2083,
                                    "titulo": {
                                        "cor": "Preto",
                                        "tamanho": "G"
                                    },
                                    "estoque": 20,
                                    "imagens": ""
                                },
                                {
                                    "id": 2082,
                                    "titulo": {
                                        "cor": "Preto",
                                        "tamanho": "M"
                                    },
                                    "estoque": 20,
                                    "imagens": ""
                                },
                                {
                                    "id": 2081,
                                    "titulo": {
                                        "cor": "Preto",
                                        "tamanho": "P"
                                    },
                                    "estoque": 90,
                                    "imagens": ""
                                },
                                {
                                    "id": 2080,
                                    "titulo": {
                                        "cor": "Verde",
                                        "tamanho": "PP"
                                    },
                                    "estoque": 92,
                                    "imagens": ""
                                },
                                {
                                    "id": 2079,
                                    "titulo": {
                                        "cor": "Verde",
                                        "tamanho": "GG"
                                    },
                                    "estoque": 78,
                                    "imagens": ""
                                },
                                {
                                    "id": 2078,
                                    "titulo": {
                                        "cor": "Verde",
                                        "tamanho": "G"
                                    },
                                    "estoque": 94,
                                    "imagens": ""
                                },
                                {
                                    "id": 2077,
                                    "titulo": {
                                        "cor": "Verde",
                                        "tamanho": "M"
                                    },
                                    "estoque": 85,
                                    "imagens": ""
                                },
                                {
                                    "id": 2076,
                                    "titulo": {
                                        "cor": "Verde",
                                        "tamanho": "P"
                                    },
                                    "estoque": 88,
                                    "imagens": ""
                                },
                                {
                                    "id": 1731,
                                    "titulo": {
                                        "cor": "Lilás",
                                        "tamanho": "PP"
                                    },
                                    "estoque": 85,
                                    "imagens": ""
                                },
                                {
                                    "id": 1730,
                                    "titulo": {
                                        "cor": "Lilás",
                                        "tamanho": "GG"
                                    },
                                    "estoque": 26,
                                    "imagens": ""
                                },
                                {
                                    "id": 1729,
                                    "titulo": {
                                        "cor": "Lilás",
                                        "tamanho": "G"
                                    },
                                    "estoque": 34,
                                    "imagens": ""
                                },
                                {
                                    "id": 2605,
                                    "titulo": {
                                        "cor": "Azul",
                                        "tamanho": "PP"
                                    },
                                    "estoque": 20,
                                    "imagens": ""
                                }
                            ]
                        }
                    ]
                },

            ]
        }
    }

    res.status(200).json(data)
}
