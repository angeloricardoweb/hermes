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
        "message": "Sem erros",
        "results": {
            "Contratação de serviços": [
                {
                    "nome": "Transparência ISSAA 1",
                    "Contrato": [
                        {
                            "nome": "Arquivo 1",
                            "arquivo": "https://issaa.sitebeta.com.br/servico/download/124"
                        }
                    ]
                }
            ],
            "Prestação de Contas": [
                {
                    "nome": "2020",
                    "Geral": [
                        {
                            "nome": "Balanço Patrimonial",
                            "arquivo": "https://issaa.sitebeta.com.br/servico/download/77"
                        },
                        {
                            "nome": "Demonstração de Resultado do Exercício",
                            "arquivo": "https://issaa.sitebeta.com.br/servico/download/78"
                        },
                        {
                            "nome": "Demonstrativo de Resultado Abrangente",
                            "arquivo": "https://issaa.sitebeta.com.br/servico/download/79"
                        },
                        {
                            "nome": "Demonstrativo Valor Adicionado",
                            "arquivo": "https://issaa.sitebeta.com.br/servico/download/80"
                        },
                        {
                            "nome": "Demontração de Lucros e Prejuízos Acumulados",
                            "arquivo": "https://issaa.sitebeta.com.br/servico/download/81"
                        },
                        {
                            "nome": "M11 Contratos Vigentes",
                            "arquivo": "https://issaa.sitebeta.com.br/servico/download/82"
                        },
                        {
                            "nome": "M16 PRESTAÇÃO DE CONTAS TCE 2021-2020",
                            "arquivo": "https://issaa.sitebeta.com.br/servico/download/83"
                        },
                        {
                            "nome": "Programa de Trabalho do Contrato de Gestão",
                            "arquivo": "https://issaa.sitebeta.com.br/servico/download/84"
                        },
                        {
                            "nome": "Relatório Anual Salários Filial Poli Metropolitano",
                            "arquivo": "https://issaa.sitebeta.com.br/servico/download/85"
                        },
                        {
                            "nome": "Relatório Anual Salários Matriz",
                            "arquivo": "https://issaa.sitebeta.com.br/servico/download/86"
                        },
                        {
                            "nome": "Remessa de contas de gestão Ano 2021, Exercício 2020, e Jurisdicionado",
                            "arquivo": "https://issaa.sitebeta.com.br/servico/download/87"
                        },
                        {
                            "nome": "Relatório dos auditores ISSAA",
                            "arquivo": "https://issaa.sitebeta.com.br/servico/download/100"
                        }
                    ]
                },
                {
                    "nome": "2019",
                    "Geral": [
                        {
                            "nome": "Balanço Patrimonial",
                            "arquivo": "https://issaa.sitebeta.com.br/servico/download/88"
                        },
                        {
                            "nome": "Contratos Vigentes",
                            "arquivo": "https://issaa.sitebeta.com.br/servico/download/89"
                        },
                        {
                            "nome": "Demonstração das Mutacões do Patrimônio Líquido",
                            "arquivo": "https://issaa.sitebeta.com.br/servico/download/90"
                        },
                        {
                            "nome": "Demonstração de Lucros e Prejuízos Acumulados",
                            "arquivo": "https://issaa.sitebeta.com.br/servico/download/91"
                        },
                        {
                            "nome": "Demonstração de Resultado do Exercício",
                            "arquivo": "https://issaa.sitebeta.com.br/servico/download/92"
                        },
                        {
                            "nome": "Demonstração do Resultado Abrangente",
                            "arquivo": "https://issaa.sitebeta.com.br/servico/download/93"
                        },
                        {
                            "nome": "Demonstrativo do Valor Adicionado DVA",
                            "arquivo": "https://issaa.sitebeta.com.br/servico/download/94"
                        },
                        {
                            "nome": "Fluxo de Caixa",
                            "arquivo": "https://issaa.sitebeta.com.br/servico/download/95"
                        },
                        {
                            "nome": "Notas Explicativas",
                            "arquivo": "https://issaa.sitebeta.com.br/servico/download/96"
                        },
                        {
                            "nome": "Programa de Trabalho do Contrato de Gestão",
                            "arquivo": "https://issaa.sitebeta.com.br/servico/download/97"
                        },
                        {
                            "nome": "Remessa de contas de gestão Ano 2020, Exercicio 2019, e Jurisdicionado",
                            "arquivo": "https://issaa.sitebeta.com.br/servico/download/98"
                        },
                        {
                            "nome": "Relatório dos auditores ISSAA",
                            "arquivo": "https://issaa.sitebeta.com.br/servico/download/101"
                        }
                    ]
                }
            ],
            "Documentos Institucionais": [
                {
                    "nome": "Políticas",
                    "Geral": [
                        {
                            "nome": "Políticas de Recursos Humanos",
                            "arquivo": "https://issaa.sitebeta.com.br/servico/download/99"
                        },
                        {
                            "nome": "Políticas de Comunicação",
                            "arquivo": "https://issaa.sitebeta.com.br/servico/download/102"
                        }
                    ]
                }
            ]
        }
    }
    res.status(200).json(data)

}


