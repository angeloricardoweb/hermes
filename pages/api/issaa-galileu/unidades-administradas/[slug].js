import NextCors from 'nextjs-cors';

export default async function handler(req, res) {

    const { slug } = req.query;
    console.log(slug);

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    if (slug == 'policlinica-natea-tucurui') {
        const data = {
            error: false,
            message: 'Sem erro',
            results: {
                detalhe: {
                    slug: "policlinica-natea-tucurui",
                    banner_primario: {
                        url: "https://issaa.sitebeta.com.br/img/projects/second-natea.jpg"
                    },
                    banner_secundario: {
                        url: "https://issaa.sitebeta.com.br/img/projects/second-natea.jpg"
                    },
                    titulo: "Policlínica/NATEA Tucuruí",
                    descricao: "<p>A Policl&iacute;nica/Natea - Tucuru&iacute; &eacute; um centro de m&eacute;dia e alta complexidade que atende uma demanda na sa&uacute;de do sudeste do Estado do Par&aacute;.</p>"
                },
                transparencias: [


                    {
                        tipo: "Relatórios de Atividades",
                        nome: "Publicação Resultado de Licitação",
                        Geral: [
                            {
                                id: 1,
                                nome: "Publicação Resultado de Licitação",
                                arquivos: [
                                    {
                                        nome: 'nome do arquivo',
                                        id: 1,
                                        url_arquivo: "https://issaa.sitebeta.com.br/transparencia/download/6"

                                    }
                                ]
                            }
                        ]
                    },
                    {
                        tipo: "Celebração",
                        nome: "Contrato de gestão Nº 004 SESPA 2022",
                        Geral: [
                            {
                                id: 2,
                                nome: "Contrato de gestão Nº 004 SESPA 2022",
                                arquivos: [
                                    {
                                        nome: 'nome do arquivo',
                                        id: 1,
                                        url_arquivo: "https://issaa.sitebeta.com.br/transparencia/download/6"

                                    }
                                ]
                            }
                        ]
                    },



                ],
                servicos: [],

                recursos_humanos: [
                    {
                        tipo: "Processo Seletivo - nº01/2022",
                        nome: "Edital de Processo Seletivo nº01/2022",
                        Geral: [
                            {
                                id: 1,
                                nome: "Edital de Processo Seletivo nº01/2022",
                                arquivos: [
                                    {
                                        nome: 'nome do arquivo',
                                        id: 1,
                                        url_arquivo: "https://issaa.sitebeta.com.br/transparencia/download/6"

                                    }
                                ]
                            }
                        ]
                    },

                    {
                        tipo: "Processo Seletivo - nº02/2020",
                        nome: "Edital de Processo Seletivo nº02/2020",
                        Geral: [
                            {
                                id: 1,
                                nome: "Processo Seletivo - Biomédico - nº033/2020",
                                Arquivos: []
                            },
                            {
                                id: 2,
                                nome: "Processo Seletivo - Nutricionista - nº035/2020",
                                Arquivos: []
                            },
                            {
                                id: 3,
                                nome: "Processo Seletivo - Analista de Qualidade - nº036/2020",
                                Arquivos: []
                            }
                        ]

                    },
                    {
                        tipo: "Processo Seletivo Auxiliar de Escritório - nº01/2020",
                        Geral: [
                            {
                                id: 1,
                                nome: "Processo Seletivo - Auxiliar de Escritório para Serviços Externos - nº01/2020",
                                Arquivos: []
                            }
                        ]
                    },
                    {
                        tipo: "Processo Seletivo Enfermagem - nº02/2019",
                        nome: "Processo Seletivo - nº02/2019",
                        Geral: [
                            {
                                id: 1,
                                nome: 'Edital de Processo Seletivo',
                                arquivos: [
                                    {
                                        nome: 'nome do arquivo',
                                        id: 1,
                                        url_arquivo: "https://issaa.sitebeta.com.br/transparencia/download/6"

                                    }
                                ]
                            }
                        ]
                    }
                ]
            },

        }
        return res.status(200).json(data)
    }

    if (slug == 'poli-metropolitana-policlinicas-do-para') {
        const data = {
            error: false,
            message: 'Sem erro',
            results: {
                detalhe: {
                    slug: "poli-metropolitana-policlinicas-do-para",
                    banner_primario: {
                        url: "https://issaa.sitebeta.com.br/img/projects/ame.jpg"
                    },
                    banner_secundario: {
                        url: "https://issaa.sitebeta.com.br/img/projects/ame.jpg"
                    },
                    titulo: "Poli Metropolitana – Policlínicas do Pará",
                    descricao: "<p>A Poli Metropolitana - Policl&iacute;nicas do Par&aacute; - &eacute; um centro de m&eacute;dia e alta complexidade que atende uma demanda na sa&uacute;de do Estado do Par&aacute;.</p>\r\n<div id=\"gtx-trans\" style=\"position: absolute; left: 132px; top: -14px;\">\r\n<div class=\"gtx-trans-icon\">&nbsp;</div>\r\n</div>"
                },
                transparencias: [
                    {
                        tipo: "Listagem de Compras",
                        nome: '',
                        Geral: [
                            {
                                id: 1,
                                nome: "Listagem de Equipamentos e Mobiliários",
                                arquivos: [
                                    {
                                        nome: 'nome do arquivo',
                                        id: 1,
                                        url_arquivo: "https://issaa.sitebeta.com.br/transparencia/download/6"

                                    }
                                ]
                            },
                        ],

                    },
                    {
                        tipo: "Celebração",
                        nome: '',
                        Geral: [
                            {
                                id: 1,
                                nome: "04º Termo Aditivo Contrato de Gestão nº 006-SESPA-2018 (ação itinerante)",
                                arquivos: [
                                    {
                                        nome: 'nome do arquivo',
                                        id: 1,
                                        url_arquivo: "https://issaa.sitebeta.com.br/transparencia/download/17"
                                    }
                                ]
                            },
                            {
                                id: 2,
                                nome: "05º Termo Aditivo Contrato Gestão nº 006-SESPA-2018",
                                arquivos: [
                                    {
                                        nome: 'nome do arquivo',
                                        id: 1,
                                        url_arquivo: "https://issaa.sitebeta.com.br/transparencia/download/18"
                                    }
                                ]
                            },
                            {
                                id: 3,
                                nome: "6º TA Contrato de Gestão nº 006.SESPA.2018 - Repactuação de Metas e Serviços",
                                arquivos: [
                                    {
                                        nome: 'nome do arquivo',
                                        id: 1,
                                        url_arquivo: "https://issaa.sitebeta.com.br/transparencia/download/19"
                                    }
                                ]
                            },
                            {
                                id: 4,
                                nome: "3º Termo Aditivo - COVID",
                                arquivos: [
                                    {
                                        nome: 'nome do arquivo',
                                        id: 1,
                                        url_arquivo: "https://issaa.sitebeta.com.br/transparencia/download/16"
                                    }
                                ]
                            },
                            {
                                id: 5,
                                nome: "Contrato de Gestão Nº 006/SESPA/2018",
                                arquivos: [
                                    {
                                        nome: 'nome do arquivo',
                                        id: 1,
                                        url_arquivo: "https://issaa.sitebeta.com.br/transparencia/download/5"

                                    }
                                ]
                            },
                            {
                                id: 6,
                                nome: "1º Aditivo ao Contrato - Investimento",
                                arquivos: [
                                    {
                                        nome: 'nome do arquivo',
                                        id: 1,
                                        url_arquivo: "https://issaa.sitebeta.com.br/transparencia/download/7"

                                    }
                                ]
                            },
                            {
                                id: 7,
                                nome: "2º Termo Aditivo ao contrato - Repactuação de Metas e Serviços",
                                arquivos: [
                                    {
                                        nome: 'nome do arquivo',
                                        id: 1,
                                        url_arquivo: "https://issaa.sitebeta.com.br/transparencia/download/8"

                                    }
                                ]
                            },
                        ],
                    }
                ],
                servicos: [
                    {
                        tipo: "Prestação de Contas",
                        nome: "2021",
                        Geral: [
                            {
                                id: 1,
                                nome: "Balanço Patrimônial 2021",
                                arquivos: [
                                    {
                                        nome: 'nome do arquivo',
                                        id: 1,
                                        url_arquivo: "https://issaa.sitebeta.com.br/transparencia/download/7"

                                    }
                                ]
                            },
                            {
                                id: 2,
                                nome: "Demonstração de Resultado do Exercício",
                                arquivos: [
                                    {
                                        nome: 'nome do arquivo',
                                        id: 1,
                                        url_arquivo: "https://issaa.sitebeta.com.br/transparencia/download/7"

                                    }
                                ]
                            },
                            {
                                id: 3,
                                nome: "Demonstração de Superavit e Déficit acumulado",
                                arquivos: [
                                    {
                                        nome: 'nome do arquivo',
                                        id: 1,
                                        url_arquivo: "https://issaa.sitebeta.com.br/transparencia/download/7"

                                    }
                                ]
                            },
                            {
                                id: 4,
                                nome: "Demonstração do Resultado Abrangente",
                                arquivos: [
                                    {
                                        nome: 'nome do arquivo',
                                        id: 1,
                                        url_arquivo: "https://issaa.sitebeta.com.br/transparencia/download/7"

                                    }
                                ]
                            },
                            {
                                id: 5,
                                nome: "Demonstrativo de Gasto Anual com Pessoal - Hospital Galileu",
                                arquivos: [
                                    {
                                        nome: 'nome do arquivo',
                                        id: 1,
                                        url_arquivo: "https://issaa.sitebeta.com.br/transparencia/download/7"

                                    }
                                ]
                            },
                            {
                                id: 6,
                                nome: "Demonstrativo de Gasto Anual com Pessoal - HRAS",
                                arquivos: [
                                    {
                                        nome: 'nome do arquivo',
                                        id: 1,
                                        url_arquivo: "https://issaa.sitebeta.com.br/transparencia/download/7"

                                    }
                                ]
                            },
                            {
                                id: 7,
                                nome: "Demonstrativo de Gasto Anual com Pessoal - Matriz",
                                arquivos: [
                                    {
                                        nome: 'nome do arquivo',
                                        id: 1,
                                        url_arquivo: "https://issaa.sitebeta.com.br/transparencia/download/7"

                                    }
                                ]
                            },
                            {
                                id: 8,
                                nome: "Demonstrativo de Gasto Anual com Pessoal - Policlinica",
                                arquivos: [
                                    {
                                        nome: 'nome do arquivo',
                                        id: 1,
                                        url_arquivo: "https://issaa.sitebeta.com.br/transparencia/download/7"

                                    }
                                ]
                            },
                            {
                                id: 9,
                                nome: "Demonstrativo Valor Adicionado-2021",
                                arquivos: [
                                    {
                                        nome: 'nome do arquivo',
                                        id: 1,
                                        url_arquivo: "https://issaa.sitebeta.com.br/transparencia/download/7"

                                    }
                                ]
                            },
                            {
                                id: 10,
                                nome: "Galileu - Remessa de contas de gestão, Ano 2022, Exercício 2021 - e-Jurisdicionado",
                                arquivos: [
                                    {
                                        nome: 'nome do arquivo',
                                        id: 1,
                                        url_arquivo: "https://issaa.sitebeta.com.br/transparencia/download/7"

                                    }
                                ]
                            },
                            {
                                id: 11,
                                nome: "HRAS - Remessa de contas de gestão, Ano 2022, Exercício 2021 - e-Jurisdicionado",
                                arquivos: [
                                    {
                                        nome: 'nome do arquivo',
                                        id: 1,
                                        url_arquivo: "https://issaa.sitebeta.com.br/transparencia/download/7"

                                    }
                                ]
                            },
                            {
                                id: 12,
                                nome: "Relatorio dos auditores ISSAA - 2021 Completo - assinado",
                                arquivos: [
                                    {
                                        nome: 'nome do arquivo',
                                        id: 1,
                                        url_arquivo: "https://issaa.sitebeta.com.br/transparencia/download/7"

                                    }
                                ]
                            }
                        ]
                    },
                    {
                        tipo: "Documentos Institucionais",
                        nome: "Manuais",
                        Geral: [
                            {
                                id: 1,
                                nome: "Manual de Compras",
                                arquivos: [
                                    {
                                        nome: 'nome do arquivo',
                                        id: 1,
                                        url_arquivo: "https://issaa.sitebeta.com.br/transparencia/download/7"

                                    }
                                ]
                            },
                            {
                                id: 2,
                                nome: "Manual de Conformidade - Compliance",
                                arquivos: [
                                    {
                                        nome: 'nome do arquivo',
                                        id: 1,
                                        url_arquivo: "https://issaa.sitebeta.com.br/transparencia/download/7"

                                    }
                                ]
                            },

                        ]
                    },



                ],



                recursos_humanos: [

                    {
                        tipo: "Processo Seletivo - nº01/2022",
                        Geral: [
                            {
                                nome: "Edital de Processo Seletivo nº01/2022",
                                arquivos: []
                            }
                        ]
                    },

                    {
                        tipo: "Processo Seletivo - nº02/2020",
                        Geral: [
                            {
                                nome: "Processo Seletivo - Biomédico - nº033/2020",
                                arquivos: [
                                    {
                                        id: 1,
                                        nome: "Abertura Processo Seletivo - 033/2020",
                                        url_arquivo: "https://issaa.sitebeta.com.br/rh/download/40"
                                    }
                                ]
                            },
                            {
                                nome: "Processo Seletivo - Nutricionista - nº035/2020",
                                arquivos: [
                                    {
                                        id: 1,
                                        nome: "Abertura Processo Seletivo - 035/2020",
                                        url_arquivo: "https://issaa.sitebeta.com.br/rh/download/41"
                                    }
                                ]
                            },
                            {
                                nome: "Processo Seletivo - Analista de Qualidade - nº036/2020",
                                arquivos: [
                                    {
                                        id: 1,
                                        nome: "Abertura Processo Seletivo - 036/2020",
                                        url_arquivo: "https://issaa.sitebeta.com.br/rh/download/42"
                                    }
                                ]
                            }
                        ]

                    },
                    {
                        tipo: "Processo Seletivo Auxiliar de Escritório - nº01/2020",
                        Geral: [
                            {
                                nome: "Processo Seletivo - Auxiliar de Escritório para Serviços Externos - nº01/2020",
                                arquivos: [
                                    {
                                        id: 1,
                                        nome: "Processo Seletivo Auxiliar de Escritório para Serviços Externos - 01/2020",
                                        url_arquivo: "https://issaa.sitebeta.com.br/rh/download/39"
                                    }
                                ]
                            }
                        ]

                    },
                    {
                        tipo: "Processo Seletivo Enfermagem - nº02/2019",
                        Geral: [
                            {
                                nome: "Processo Seletivo - nº02/2019",
                                arquivos: [
                                    {
                                        id: 1,
                                        nome: "Edital de Processo Seletivo",
                                        url_arquivo: "https://issaa.sitebeta.com.br/rh/download/32"
                                    },
                                    {
                                        id: 2,
                                        nome: "Lista de Divulgação dos Candidatos para a Prova",
                                        url_arquivo: "https://issaa.sitebeta.com.br/rh/download/34"
                                    },
                                    {
                                        id: 3,
                                        nome: "Lista de Aprovados",
                                        url_arquivo: "https://issaa.sitebeta.com.br/rh/download/36"
                                    },
                                    {
                                        id: 4,
                                        nome: "Lista de Classificados",
                                        url_arquivo: "https://issaa.sitebeta.com.br/rh/download/38"
                                    }
                                ]
                            },
                            {
                                nome: "Processo Seletivo – Enfermagem - nº030/2019",
                                arquivos: [
                                    {
                                        id: 1,
                                        nome: "Abertura Processo Seletivo - 030/2019",
                                        url_arquivo: "https://issaa.sitebeta.com.br/rh/download/33"
                                    }
                                ]
                            }
                        ]
                    }
                ],
            },


        }
        return res.status(200).json(data)
    }

}



