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
        results: {
            midia_social: [
                {
                    id: 1,
                    type: 'instagram',
                    url: 'https://www.instagram.com'
                },
                {
                    id: 2,
                    type: 'facebook',
                    url: 'https://www.facebook.com'
                },

                {
                    id: 3,
                    type: 'whatsapp',
                    url: ''
                },
                {
                    id: 4,
                    type: 'youtube',
                    url: 'https://www.youtube.com'
                },

            ],
            contatos: {
                email_principal: 'contato@simineral.eng.br',
                emails: [{
                    id: 1,
                    nome: 'Central de Vendas',
                    email: 'contato@simineral.eng.br'
                }],
                telefones: [
                    {
                        id: 1,
                        nome: 'Central de Vendas',
                        telefone: '+55(91) 3235-3997',
                    },
                    {
                        id: 2,
                        nome: 'Escritório 2',
                        telefone: '+55(91)3229-1807',
                    },
                ],
            },
            endereco: {
                rua: 'Travessa Rui Barbosa',
                numero:'1536',
                bairro:'Nazaré',
                cep: '67120-370',
                uf: 'PA',
                cidade: 'Belém - Pará'
            },
            cnpj: '29.758.302/0001-05',
         
        },
    }

    res.status(200).json(data)
}
