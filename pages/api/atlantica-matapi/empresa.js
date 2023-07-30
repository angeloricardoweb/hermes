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
        results: {
            midia_social: {
                instagram: 'https://www.instagram.com/atlanticamatapi/',
                facebook: 'https://www.facebook.com/GrupoAtlanticaMatapi/',
                linkedin: 'https://www.linkedin.com/company/grupoatlanticamatapi/',
                whatsapp: '559193048348',
                youtube: 'https://www.youtube.com/@atlanticamatapi'
            },
            contatos: {
                email_principal: 'comercial@matapi.com.br ',
                emails: [
                    {
                        id: 1,
                        nome: 'Email principal',
                        email: 'comercial@matapi.com.br ',
                    },
                    {
                        id: 2,
                        nome: 'Email de Recepção',
                        email: 'matapi@matapi.com.br',
                    },

                ],
                telefones: [
                    {
                        id: 1,
                        nome: 'Escritório Belém',
                        telefone: '+55(91)3229-1807',
                        enderecos: {
                            rua: 'Av. Bernardo Sayão',
                            numero: '4036',
                            bairro: 'Condor',
                            municipio: 'Belém',
                            cidade: 'Pará',
                            pais: 'Brasil',
                            complemento: null
                        }
                    },
                    {
                        id: 2,
                        nome: 'Escritório Barcarena',
                        telefone: '+55(91)3733-1335',

                        enderecos: {
                            rua: 'Rod. PA 483, km 09',
                            numero: 'S/N',
                            bairro: 'Vila do Conde',
                            municipio: 'Barcarena',
                            cidade: 'Pará',
                            pais: 'Brasil',
                            complemento: 'Rod. PA 483, km 09'
                        }
                    },
                ],
            },
            cnpj: '29.758.302/0001-05',
            copyright: 'Grupo Atlântica Matapi 2022. Todos os direitos reservados',
        },
    }

    res.status(200).json(data)
}
