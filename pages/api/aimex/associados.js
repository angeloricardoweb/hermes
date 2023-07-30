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
        associados: [
            {
                id: 1,
                nome: 'BENEVIDES MADEIRAS LTDA',
                endereco: 'Av. Martinho Monteiro, S/N - Lote 01 - Murinim - CEP: 68797-000 - Benevides - Pará',
                telefone: '(91) 3456-9596',
                email: 'hadex@hadex.com.br'
            },
            {
                id: 2,
                nome: 'BRASCOMP - COMPENSADOS DO BRASIL S/A',
                endereco: 'Distrito Industrial de Ananindeua, Setor I, Q/3, Lote 2 - CEP: 67000-000 - Ananideua - Pará',
                telefone: '(91) 4005-5800',
                email: 'matriz@brascompdobrasil.com.br'
            },
            {
                id: 3,
                nome: 'CIKEL BRASIL VERDE MADEIRAS LTDA',
                endereco: 'Trav. 14 de março, 1155 - Edifício Urbe 14 - 2º andar - Sala 201 - CEP: 66550-490 - Belém - Pará',
                telefone: '(91) 2121-2103 / 0228',
                email: 'manoel@cikel.com.br'
            },
            {
                id: 4,
                nome: 'COEXPA – COMÉRCIO E EXPORTAÇÃO DE PRODUTOS DA AMAZÕNIA EIRELI',
                endereco: '                Estrada do Outeiro, 21 - Maracacuera - Icoaraci - CEP: 66815-555 - Belém - Pará',
                telefone: '(91) 3081-9649',
                email: 'brunoleao@coexpa.com'
            },
            {
                id: 5,
                nome: 'CRAS LOGÍSTICA IMPORTAÇÃO E EXPORTAÇÃO LTDA',
                endereco: 'Estrada do Outeiro, S/N, Q/04, Lote 25, Setor B - Icoaraci - CEP: 66815-140 - Belém - Pará',
                telefone: '(24) 2251-8035',
                email: 'rodrigo@crascomex.com.br'
            },
            {
                id: 6,
                nome: 'CRISTAL COMÉRCIO E SERVIÇOS GERAIS EIRELI',
                endereco: '    Est. do Outeiro, Qd 4, Lt 1 a 6 – Bairro: Maracacuera - Dist. Industrial de Icoaraci - CEP: 66815-140 – Belém – Pará - Brasil',
                telefone: '    (91) 98121-7977 / 2122-9681',
                email: 'marcello@cristaltrading.com.br'
            },

        ]
    }

    res.status(200).json(data)
}
